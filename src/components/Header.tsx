import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import styles from './Header.module.css'

const NAV_LINKS = [
  { label: 'Docs', href: 'https://docs.agent-ship.dev/', external: true },
  { label: 'Tutorials', href: '/tutorials', external: false },
  { label: 'Roadmap', href: '/roadmap', external: false },
  { label: 'Changelog', href: '/changelog', external: false },
  { label: 'Discord', href: 'https://discord.gg/zCEtKH2P', external: true },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoAgent}>Agent</span>
          <span className={styles.logoShip}>Ship</span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {NAV_LINKS.map((l) =>
            l.external ? (
              <a key={l.label} href={l.href} className={styles.navLink}>
                {l.label}
              </a>
            ) : (
              <Link key={l.label} to={l.href} className={styles.navLink}>
                {l.label}
              </Link>
            )
          )}
          <a href="https://github.com/Agent-Ship/agent-ship" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
            GitHub
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M3.5 1h7.5v7.5M11 1L4.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </nav>

        <div className={styles.actions}>
          <button className={styles.themeBtn} onClick={toggle} aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            )}
          </button>
          <a href="#quickstart" className={styles.cta}>Get Started</a>
          <button className={styles.burger} aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
