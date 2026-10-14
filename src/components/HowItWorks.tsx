import styles from './HowItWorks.module.css'

/*
 * Two code samples: the YAML spec, and the Python escape hatch.
 *
 * These used to be hand-tagged — every token wrapped in its own <span> in the
 * JSX. That broke (a string literal cannot span a newline, so `{'` + newline +
 * `'}` is a syntax error) and it advertised spec fields that do not exist:
 * `input_modalities`, `structured_output`, `memory.backend` and `guardrails`.
 * Memory and guardrails are on the roadmap, not in the tree.
 *
 * So the code is now plain text, highlighted by the tiny tokeniser below. Both
 * samples are the real thing: the YAML uses only fields `AgentSpec` actually
 * accepts, and the Python is the `LangGraphAgent.build_graph` shape from
 * examples/custom/agent.py.
 */

const SPEC_YAML = `# A coordinator routes each request to the member whose description fits.
name: triage-agent
engine: langgraph
template: graph          # single | graph | autonomous
model: openai/gpt-4o-mini
prompt: Route the request, then answer it.
durability: checkpoint   # survive a restart, and pause for a human
streaming: true
members:
  - name: analyst
    description: arithmetic and comparisons over known numbers
    model: openai/gpt-4o-mini
    prompt: Answer with the number and one short sentence.
  - name: writer
    description: explanations, summaries, anything needing prose
    model: anthropic/claude-sonnet-4-6
    prompt: Answer in two clear sentences.`

const AGENT_PY = `from agentship.spec import AgentSpec
from agentship_langgraph import LangGraphAgent
from langgraph.graph import END, START, StateGraph


class EchoingAssistant(LangGraphAgent):
    def build_graph(self, model, tools):
        # Native LangGraph. AgentShip supplies the model and drives the run.
        def answer(state):
            reply = model.invoke(state["messages"])
            return {"messages": [*state["messages"], reply]}

        g = StateGraph(_State)
        g.add_node("answer", answer)
        g.add_edge(START, "answer")
        g.add_edge("answer", END)
        return g


def build_agent():
    return EchoingAssistant(AgentSpec(name="custom-assistant", engine="langgraph"))`

const PY_KEYWORDS = new Set([
  'from', 'import', 'class', 'def', 'return', 'self', 'for', 'in', 'if', 'else', 'None', 'True', 'False',
])

type Token = { text: string; cls?: string }

/** Split `line` on a regex, tagging matches with `cls` and recursing on the rest. */
function split(tokens: Token[], re: RegExp, cls: string, then: (t: Token[]) => Token[]): Token[] {
  return tokens.flatMap((tok) => {
    if (tok.cls) return [tok]
    const out: Token[] = []
    let last = 0
    for (const m of tok.text.matchAll(re)) {
      const i = m.index ?? 0
      if (i > last) out.push(...then([{ text: tok.text.slice(last, i) }]))
      out.push({ text: m[0], cls })
      last = i + m[0].length
    }
    if (last < tok.text.length) out.push(...then([{ text: tok.text.slice(last) }]))
    return out
  })
}

function highlightYaml(line: string): Token[] {
  let toks: Token[] = [{ text: line }]
  toks = split(toks, /#.*$/g, styles.hlComment, (t) => t)
  // A key is the first word before a colon, at any indent, optionally after "- ".
  toks = split(toks, /^(\s*-\s+)?[A-Za-z_][\w-]*(?=:)/g, styles.hlKey, (t) => t)
  toks = split(toks, /[:[\]{},]|^\s*-\s/g, styles.hlPunct, (t) => t)
  return toks.map((t) => (t.cls ? t : { ...t, cls: styles.hlVal }))
}

function highlightPython(line: string): Token[] {
  let toks: Token[] = [{ text: line }]
  toks = split(toks, /#.*$/g, styles.hlComment, (t) => t)
  toks = split(toks, /"[^"]*"/g, styles.hlStr, (t) => t)
  toks = split(toks, /\b[A-Za-z_]\w*\b/g, '', (t) => t)
  // Re-tag the bare words: keyword, type (CapCase), or plain.
  toks = toks.map((t) => {
    if (t.cls !== '') return t
    if (PY_KEYWORDS.has(t.text)) return { ...t, cls: styles.hlKw }
    if (/^[A-Z_]/.test(t.text)) return { ...t, cls: styles.hlType }
    return { ...t, cls: styles.hlFn }
  })
  return toks.map((t) => (t.cls ? t : { ...t, cls: styles.hlPunct }))
}

function Code({ source, lang }: { source: string; lang: 'yaml' | 'python' }) {
  const highlight = lang === 'yaml' ? highlightYaml : highlightPython
  return (
    <code>
      {source.split('\n').map((line, i) => (
        <span key={i} className={styles.line}>
          {highlight(line).map((tok, j) => (
            <span key={j} className={tok.cls}>
              {tok.text}
            </span>
          ))}
          {'\n'}
        </span>
      ))}
    </code>
  )
}

function CodeBlock({ file, source, lang }: { file: string; source: string; lang: 'yaml' | 'python' }) {
  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeHeader}>
        <span className={styles.fileName}>{file}</span>
      </div>
      <pre className={styles.codeBody}>
        <Code source={source} lang={lang} />
      </pre>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>The pattern</p>
        <h2 className="section-title">YAML for the wiring. Python when you need it.</h2>
        <p className="section-subtitle">
          Most agents are the spec on the left and nothing else. When one needs a graph the spec
          cannot express, point `code:` at a Python function and write native LangGraph — AgentShip
          still supplies the model and tools, and still drives the run.
        </p>

        <div className={styles.codeGrid}>
          <CodeBlock file="agents/triage.yaml" source={SPEC_YAML} lang="yaml" />
          <CodeBlock file="agents/triage/agent.py" source={AGENT_PY} lang="python" />
        </div>

        <p className={styles.note}>
          Two engines ship today: <code>langgraph</code> and <code>echo</code>, which needs no
          provider and no network. The adapter is the only code that names a vendor, so a third
          engine is a package rather than a rewrite.
        </p>
      </div>
    </section>
  )
}
