import styles from './ValueProps.module.css'

const ITEMS = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: 'The plumbing, already wired',
    desc: '`pip install` → `agentship init` → a multi-agent spec served over REST, SSE and WebSocket, with traces that carry token counts and costs. You write the agent; the stack is there.',
    color: 'purple',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
    title: 'Your spec names no vendor',
    desc: 'One spec is compiled by an engine adapter into somebody else\'s graph, and run by a kernel that imports no vendor library. Replacing the engine is one package, not a rewrite.',
    color: 'teal',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
    title: 'Claims you can check',
    desc: 'Every engine declares its capabilities, and `agentship verify` runs an engine-by-capability grid that fails the build when a declared capability is not actually held.',
    color: 'mixed',
  },
]

export function ValueProps() {
  return (
    <section className="section section--alt">
      <div className="container">
        <h2 className="section-title">Why AgentShip?</h2>
        <p className="section-subtitle">
          It integrates what you already use rather than reimplementing it, and adds the plumbing
          none of those libraries ship.
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
