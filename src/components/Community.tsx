import styles from './Community.module.css'

const CHANNELS = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>,
    title: 'GitHub Issues',
    desc: 'Bug reports & feature requests',
    href: 'https://github.com/Agent-Ship/agent-ship/issues',
    action: 'Open Issues',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
    title: 'Discussions',
    desc: 'Ask questions & share ideas',
    href: 'https://github.com/Agent-Ship/agent-ship/discussions',
    action: 'Join Discussion',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>,
    title: 'Documentation',
    desc: 'Guides, API reference & tutorials',
    href: 'https://docs.agent-ship.dev/',
    action: 'Read Docs',
  },
]

const RESOURCES = [
  { title: 'Quick Start', desc: 'From zero to running agent in 3 commands', href: 'https://docs.agent-ship.dev/en/latest/user-guides/getting-started/quickstart.html' },
  { title: 'Architecture', desc: 'How AgentShip is structured under the hood', href: 'https://docs.agent-ship.dev/en/latest/index.html#architecture' },
  { title: 'Agent Patterns', desc: 'Single agent, orchestrator, and tool patterns', href: 'https://docs.agent-ship.dev/en/latest/building-agents.html' },
  { title: 'Agent Config', desc: 'YAML config reference for engines, streaming, memory', href: 'https://docs.agent-ship.dev/en/latest/user-guides/building-agents/agent-configuration.html' },
  { title: 'Postman Collection', desc: 'Ready-to-use API collection for testing', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/postman' },
  { title: 'Articles', desc: 'Blog posts on agentic AI patterns and design', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/articles' },
]

export function Community() {
  return (
    <section id="community" className="section section--alt">
      <div className="container">
        <h2 className="section-title">Community & Resources</h2>
        <p className="section-subtitle">
          Whether you're just getting started or debugging a complex deployment,
          our community is open to everyone.
        </p>

        <div className={styles.grid}>
          {CHANNELS.map((c) => (
            <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <div className={styles.cardIcon}>{c.icon}</div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
              <span className={styles.cardAction}>
                {c.action}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L8 4m3 3L8 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </a>
          ))}
        </div>

        <h3 className={styles.resourcesHeading}>Guides & References</h3>
        <div className={styles.resourcesGrid}>
          {RESOURCES.map((r) => (
            <a key={r.title} href={r.href} target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
              <h4 className={styles.resourceTitle}>{r.title}</h4>
              <p className={styles.resourceDesc}>{r.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
