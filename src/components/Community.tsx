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
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>,
    title: 'Discord',
    desc: 'Ask questions & share ideas',
    href: 'https://discord.gg/zCEtKH2P',
    action: 'Join Discord',
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
