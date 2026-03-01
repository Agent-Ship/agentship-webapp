import styles from './Hero.module.css'

const FEATURES = [
  { label: 'Auto-Discovery', desc: 'Drop in a YAML + Python file, agent registers itself' },
  { label: 'REST & SSE API', desc: 'FastAPI endpoints with streaming out of the box' },
  { label: 'Session Memory', desc: 'PostgreSQL or in-memory, persistent conversations' },
  { label: 'Multi-LLM', desc: 'OpenAI, Gemini, Claude via unified config' },
  { label: 'Dual Engines', desc: 'Google ADK or LangGraph — pick per agent' },
  { label: 'Observability', desc: 'Opik tracing, metrics, and structured logging' },
]

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background layers */}
      <div className={styles.gridBg} />
      <div className={styles.glowCenter} />
      <div className={styles.glowAccent} />

      <div className={styles.inner}>
        {/* Chip */}
        <div className={styles.chip}>
          <span className={styles.chipDot} />
          Open Source &middot; MIT Licensed
        </div>

        {/* Big logo */}
        <div className={styles.bigLogo}>
          <span className={styles.logoAgent}>Agent</span>
          <span className={styles.logoShip}>Ship</span>
        </div>

        <h1 className={styles.title}>
          The <span className="gradient-text">Production Layer</span>
          {' '}for AI&nbsp;Agents
        </h1>

        <p className={styles.subtitle}>
          AgentShip sits on top of Google ADK and LangGraph to give you everything
          needed to <strong>ship agents to production</strong> — REST API, session management,
          observability, streaming, and deployment — with zero boilerplate.
        </p>

        {/* CTA buttons */}
        <div className={styles.ctas}>
          <a href="#quickstart" className={styles.primaryBtn}>
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a
            href="https://docs.agent-ship.dev/"
            className={styles.secondaryBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
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

        {/* Inline code preview */}
        <div className={styles.codePreview}>
          <div className={styles.codeHeader}>
            <span className={styles.codeDot} style={{ background: '#ff5f57' }} />
            <span className={styles.codeDot} style={{ background: '#febc2e' }} />
            <span className={styles.codeDot} style={{ background: '#28c840' }} />
            <span className={styles.codeTitle}>Terminal</span>
          </div>
          <pre className={styles.codeBody}>
<code><span className={styles.codeMuted}>$</span> git clone https://github.com/Agent-Ship/agent-ship.git{'\n'}<span className={styles.codeMuted}>$</span> cd agent-ship{'\n'}<span className={styles.codeMuted}>$</span> make docker-setup{'\n'}<span className={styles.codeSuccess}>✓ API running at http://localhost:7001</span></code>
          </pre>
        </div>

        {/* Feature grid */}
        <div className={styles.features}>
          {FEATURES.map((f) => (
            <div key={f.label} className={styles.featureCard}>
              <h4 className={styles.featureLabel}>{f.label}</h4>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
