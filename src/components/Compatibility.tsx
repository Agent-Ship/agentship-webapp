import styles from './Compatibility.module.css'

const ENGINES = [
  {
    name: 'Google ADK',
    desc: 'Default agent execution engine',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    color: 'teal' as const,
    tag: 'Default',
  },
  {
    name: 'LangGraph',
    desc: 'LangGraph + LiteLLM with streaming',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>,
    color: 'purple' as const,
  },
]

const PROVIDERS = [
  {
    name: 'OpenAI',
    desc: 'GPT-4o, GPT-4, GPT-3.5',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
    color: 'blue' as const,
  },
  {
    name: 'Gemini',
    desc: 'Gemini Pro, Flash, Ultra',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    color: 'teal' as const,
  },
  {
    name: 'Claude',
    desc: 'Claude 4, Sonnet, Haiku',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>,
    color: 'purple' as const,
  },
]

const INFRA = [
  {
    name: 'Docker',
    desc: 'One-command containerized setup',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
    color: 'blue' as const,
  },
  {
    name: 'PostgreSQL',
    desc: 'Session storage, zero config',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    color: 'teal' as const,
  },
  {
    name: 'Heroku',
    desc: 'One-command cloud deploy',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-4l2-4h-8l-2 10h4l-2 6 10-12z"/></svg>,
    color: 'purple' as const,
  },
  {
    name: 'Opik',
    desc: 'Observability & tracing built in',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    color: 'blue' as const,
  },
]

type Item = { name: string; desc: string; icon: JSX.Element; color: 'teal' | 'purple' | 'blue'; tag?: string }

function Card({ item }: { item: Item }) {
  return (
    <div className={`${styles.card} ${styles[item.color]}`}>
      <div className={styles.cardIcon}>{item.icon}</div>
      <div className={styles.cardBody}>
        <div className={styles.cardName}>
          {item.name}
          {item.tag && <span className={styles.tag}>{item.tag}</span>}
        </div>
        <div className={styles.cardDesc}>{item.desc}</div>
      </div>
    </div>
  )
}

export function Compatibility() {
  return (
    <section className="section section--alt">
      <div className="container">
        <h2 className="section-title">Built-in Compatibility</h2>
        <p className="section-subtitle">
          Two execution engines, three LLM providers, and production infrastructure – all configured through YAML.
        </p>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.groupTitle}>
              <span className={styles.groupDot} style={{ background: 'var(--brand-indigo-light)' }} />
              Engines
            </h3>
            {ENGINES.map((item) => <Card key={item.name} item={item} />)}

            <h3 className={styles.groupTitle}>
              <span className={styles.groupDot} style={{ background: 'var(--brand-teal)' }} />
              LLM Providers
            </h3>
            {PROVIDERS.map((item) => <Card key={item.name} item={item} />)}
          </div>

          <div className={styles.column}>
            <h3 className={styles.groupTitle}>
              <span className={styles.groupDot} style={{ background: 'var(--brand-periwinkle)' }} />
              Infrastructure
            </h3>
            {INFRA.map((item) => <Card key={item.name} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
