import styles from './Ecosystem.module.css'

/* The seven distributions that actually exist and are released together on one
   version. The list previously advertised agentship-memory, -guardrails and
   -mcp, none of which are published, and gave the CLI commands `deploy`,
   `studio` and `eval`, none of which exist. */
const PROJECTS = [
  { name: 'agentship-sdk', tag: 'The batteries-included meta-package — what you install', href: 'https://pypi.org/project/agentship-sdk/' },
  { name: 'agentship-core', tag: 'The vendor-free kernel: spec, runtime, registry, middleware, echo engine', href: 'https://pypi.org/project/agentship-core/' },
  { name: 'agentship-langgraph', tag: 'The reference engine — compiles a spec into a LangGraph StateGraph', href: 'https://pypi.org/project/agentship-langgraph/' },
  { name: 'agentship-service', tag: 'The FastAPI app behind /v1 — REST, SSE, WebSocket, auth, Studio', href: 'https://pypi.org/project/agentship-service/' },
  { name: 'agentship-observability', tag: 'The OpenTelemetry pipeline and its exporters', href: 'https://pypi.org/project/agentship-observability/' },
  { name: 'agentship-cli', tag: 'init / new-agent / run / serve / doctor / verify / db upgrade', href: 'https://pypi.org/project/agentship-cli/' },
  { name: 'agentship-voice', tag: 'The same agent over a live audio stream (Pipecat or LiveKit)', href: 'https://pypi.org/project/agentship-voice/' },
]

export function Ecosystem() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Packages</h2>
        <p className="section-subtitle">
          Several distributions, released together on one version. Install only what you need.
          `agentship-core` imports no vendor library — that is what keeps the seams honest.
        </p>
        <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <span className={styles.name}>{p.name}</span>
              <span className={styles.dot}>&middot;</span>
              <span className={styles.tag}>{p.tag}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
