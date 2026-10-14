import { Logo } from './Logo'
import styles from './Footer.module.css'

/* Every link here points at Agent-Ship/agent-ship. The previous set pointed at
   harshuljain13/ship-ai-agents, which is not where this project lives, and
   described the licence as MIT, which it is not — it is Apache 2.0. */
const REPO = 'https://github.com/Agent-Ship/agent-ship'

const COLS = {
  Project: [
    { label: 'Documentation', href: 'https://docs.agent-ship.dev/' },
    { label: 'GitHub', href: REPO },
    { label: 'Issues', href: `${REPO}/issues` },
    { label: 'PyPI', href: 'https://pypi.org/project/agentship-sdk/' },
    { label: 'License (Apache 2.0)', href: `${REPO}/blob/main/LICENSE` },
  ],
  Resources: [
    { label: 'Quick start', href: `${REPO}#quick-start` },
    { label: 'Capability guides', href: `${REPO}/tree/main/docs/capabilities` },
    { label: 'Examples', href: `${REPO}/tree/main/examples` },
    { label: 'Postman collection', href: `${REPO}/tree/main/postman` },
    { label: 'Changelog', href: `${REPO}/blob/main/docs/CHANGELOG.md` },
  ],
  Community: [
    { label: 'Contributing', href: `${REPO}/blob/main/CONTRIBUTING.md` },
    { label: 'Code of conduct', href: `${REPO}/blob/main/CODE_OF_CONDUCT.md` },
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
            <Logo markSize={24} fontSize="1.15rem" />
          </div>
          <p className={styles.tagline}>
            Production plumbing for AI agents,<br />without the rewrite.
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
        <span>© {yr} AgentShip contributors. Apache 2.0.</span>
        <div className={styles.bottomLinks}>
          <a href={REPO} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener noreferrer">Apache License 2.0</a>
        </div>
      </div>
    </footer>
  )
}
