import styles from './Footer.module.css'

const COLS = {
  Project: [
    { label: 'Documentation', href: 'https://docs.agent-ship.dev/' },
    { label: 'GitHub', href: 'https://github.com/harshuljain13/ship-ai-agents' },
    { label: 'Issues', href: 'https://github.com/harshuljain13/ship-ai-agents/issues' },
    { label: 'License (MIT)', href: 'https://github.com/harshuljain13/ship-ai-agents/blob/main/ai/ai-ecosystem/LICENSE' },
  ],
  Resources: [
    { label: 'Quick Start', href: 'https://docs.agent-ship.dev/en/latest/user-guides/getting-started/quickstart.html' },
    { label: 'Architecture', href: 'https://docs.agent-ship.dev/en/latest/index.html#architecture' },
    { label: 'Postman Collection', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/postman' },
    { label: 'Articles', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/articles' },
  ],
  Community: [
    { label: 'Contributing', href: 'https://github.com/harshuljain13/ship-ai-agents/blob/main/ai/ai-ecosystem/CODE_OF_CONDUCT.md' },
    { label: 'Discord', href: 'https://discord.gg/zCEtKH2P' },
  ],
}

export function Footer() {
  const yr = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoAgent}>Agent</span>
            <span className={styles.logoShip}>Ship</span>
          </div>
          <p className={styles.tagline}>
            Build and deploy AI agents<br />in minutes, not weeks.
          </p>
        </div>

        {/* Columns */}
        <div className={styles.columns}>
          {Object.entries(COLS).map(([heading, links]) => (
            <div key={heading} className={styles.col}>
              <h4 className={styles.colTitle}>{heading}</h4>
              <ul className={styles.list}>
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className={styles.link}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {yr} AgentShip. All rights reserved.</span>
        <div className={styles.bottomLinks}>
          <a href="https://github.com/harshuljain13/ship-ai-agents" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License</a>
        </div>
      </div>
    </footer>
  )
}
