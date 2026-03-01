import { useState, useCallback } from 'react'
import styles from './QuickStart.module.css'

type Setup = 'Docker' | 'Local'

const SETUP_OPTIONS: Setup[] = ['Docker', 'Local']
const PKG_MAP: Record<Setup, string[]> = {
  Docker: ['make', 'docker compose'],
  Local: ['make', 'pipenv'],
}

const COMMANDS: Record<Setup, Record<string, string>> = {
  Docker: {
    make: `git clone https://github.com/Agent-Ship/agent-ship.git
cd agent-ship
make docker-setup`,
    'docker compose': `git clone https://github.com/Agent-Ship/agent-ship.git
cd agent-ship
cp env.example .env   # Add your API keys
docker compose up --build`,
  },
  Local: {
    make: `git clone https://github.com/Agent-Ship/agent-ship.git
cd agent-ship
make setup
make dev`,
    pipenv: `git clone https://github.com/Agent-Ship/agent-ship.git
cd agent-ship
pipenv install --dev
cp env.example .env   # Add your API keys
pipenv run uvicorn src.service.main:app --reload --port 7001`,
  },
}

const TIPS: Record<Setup, string> = {
  Docker: 'Hot-reload enabled — edit code in src/ and changes auto-reload.',
  Local: 'Requires Python 3.13+ and pipenv. Run "pip install pipenv" if needed.',
}

export function QuickStart() {
  const [setup, setSetup] = useState<Setup>('Docker')
  const [pkg, setPkg] = useState('make')
  const [copied, setCopied] = useState(false)

  const handleSetup = (s: Setup) => { setSetup(s); setPkg(PKG_MAP[s][0]) }
  const command = COMMANDS[setup][pkg] || ''

  const copy = useCallback(() => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [command])

  return (
    <section id="quickstart" className="section">
      <div className="container--narrow">
        <h2 className="section-title">Quick Start</h2>
        <p className="section-subtitle">
          Select your preferences and run the install command.{' '}
          <strong>Docker</strong> is the smoothest path.
        </p>

        {/* Hints */}
        <div className={styles.hints}>
          <span>Python 3.13+ recommended</span>
          <span>Docker recommended</span>
          <span><a href="https://docs.agent-ship.dev/en/latest/user-guides/getting-started/quickstart.html" target="_blank" rel="noopener noreferrer">Full guide</a></span>
        </div>

        {/* Selectors */}
        <div className={styles.selectors}>
          <div className={styles.row}>
            <span className={styles.label}>Setup</span>
            <div className={styles.pills}>
              {SETUP_OPTIONS.map((s) => (
                <button key={s} className={setup === s ? styles.pillActive : styles.pill} onClick={() => handleSetup(s)}>{s}</button>
              ))}
            </div>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Tool</span>
            <div className={styles.pills}>
              {PKG_MAP[setup].map((p) => (
                <button key={p} className={pkg === p ? styles.pillActive : styles.pill} onClick={() => setPkg(p)}>{p}</button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.cmdLabel}>Run this Command:</div>

        <div className={styles.codeWrap}>
          <pre className={styles.code}><code>{command}</code></pre>
          <button className={styles.copyBtn} onClick={copy} title="Copy to clipboard">
            {copied ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8l3 3 5-6" stroke="var(--brand-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M3 11V3a1.5 1.5 0 011.5-1.5H11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
            )}
          </button>
        </div>

        <p className={styles.tip}>{TIPS[setup]}</p>
      </div>
    </section>
  )
}
