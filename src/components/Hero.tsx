import { useState, useEffect } from 'react'
import { Logo } from './Logo'
import styles from './Hero.module.css'

/* Every line here has to be true of the tree today. Nothing from the kit's
   "not built yet" list — long-term memory, guardrails/PII, sandboxing, evals,
   and the ADK and Pydantic AI adapters — belongs in this array. */
const ROTATING_PHRASES = [
  'Author an agent, or a team of agents, in YAML or Python',
  'LangGraph runs the graph. We wire the rest',
  'One spec, compiled by an engine adapter, run by a vendor-free kernel',
  'REST, SSE and WebSocket under /v1, with a chat and trace UI at /studio',
  'OpenTelemetry span trees with token counts and costs',
  'An engine declares a capability; `agentship verify` proves it',
]

export function Hero() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % ROTATING_PHRASES.length)
        setFade(true)
      }, 400)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.hero}>
      {/* The faint grid is the kit's one permitted texture. The two glow layers
          that used to sit here are gone — the kit allows no glows. */}
      <div className={styles.gridBg} />

      <div className={styles.inner}>
        <div className={styles.chip}>
          <span className={styles.chipDot} />
          Open source · Apache 2.0 · 0.0.4 on PyPI
        </div>

        <div className={styles.bigLogo}>
          <Logo markSize={52} fontSize="clamp(2.25rem, 6vw, 3.25rem)" />
        </div>

        <h1 className={styles.title}>
          Production plumbing for AI agents, <span className="gradient-text">without the rewrite</span>.
        </h1>

        <div className={styles.rotatingWrap}>
          <span className={`${styles.rotatingText} ${fade ? styles.rotatingIn : styles.rotatingOut}`}>
            {ROTATING_PHRASES[index]}
          </span>
        </div>

        <p className={styles.subtitle}>
          An agent is a prompt, a model and a few tools. Getting it in front of users is
          everything else: a REST API, session storage, streaming, tracing with token costs,
          packaging. AgentShip is that part — and it integrates what you already use instead of
          reimplementing it. <strong>LangGraph</strong> runs the graph, <strong>LiteLLM</strong> handles
          models, <strong>MCP</strong> supplies tools, <strong>OpenTelemetry</strong> carries traces.
        </p>

        <div className={styles.ctas}>
          <a href="#quickstart" className={styles.primaryBtn}>
            Quick Start
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a
            href="https://docs.agent-ship.dev/"
            className={styles.secondaryBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the docs
          </a>
          <a
            href="https://github.com/Agent-Ship/agent-ship"
            className={styles.ghBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
