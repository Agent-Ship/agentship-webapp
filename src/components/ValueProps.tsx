import styles from './ValueProps.module.css'

const ITEMS = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    title: 'Ship in an hour',
    desc: 'REST API, PostgreSQL sessions, streaming, observability, MCP tools – all included. Stop rebuilding ~2,000 lines of infrastructure for every agent.',
    color: 'purple',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>,
    title: 'Zero lock-in',
    desc: 'Swap ADK for LangGraph with one YAML line. Your Python class stays the same. Day-one decisions never become permanent constraints.',
    color: 'teal',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    title: 'Just two files',
    desc: 'YAML for config, Python for logic. Auto-discovery registers agents on startup – no wiring, no routing, no registration code.',
    color: 'mixed',
  },
]

export function ValueProps() {
  return (
    <section className="section section--alt">
      <div className="container">
        <h2 className="section-title">Why AgentShip?</h2>
        <p className="section-subtitle">
          Stop rebuilding infrastructure. Start shipping agents.
        </p>
        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <article key={item.title} className={`${styles.card} ${styles[item.color]}`}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
