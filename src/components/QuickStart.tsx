import { useState, useCallback } from 'react'
import styles from './QuickStart.module.css'

type Setup = 'uv' | 'docker' | 'pip'

const SETUP_OPTIONS: Setup[] = ['uv', 'docker', 'pip']

const COMMANDS: Record<Setup, string> = {
  uv: `# 1. Install AgentShip\nuv pip install "agentship[starter]"\n\n# 2. Initialize project\nagentship init my-project\ncd my-project\n\n# 3. Create an agent\nagentship new-agent --engine langgraph --template single triage\n\n# 4. Serve\nagentship serve\n\n# → API at http://localhost:7001\n# → Studio at http://localhost:8123 (langgraph dev)`,
  docker: `# 1. Clone the backend repo\ngit clone https://github.com/Agent-Ship/agent-ship.git\ncd agent-ship\n\n# 2. Set up (creates .env, builds, starts containers)\nmake docker-setup\nmake docker-up\n\n# → API at http://localhost:7001\n# → Studio at http://localhost:8123`,
  pip: `# 1. Clone the backend repo\ngit clone https://github.com/Agent-Ship/agent-ship.git\ncd agent-ship\n\n# 2. Install deps\ncp env.example .env   # Add your API keys\n\n# 3. Start\nmake docker-up\n\n# → API at http://localhost:7001\n# → Studio at http://localhost:8123`,
}

const TIPS: Record<Setup, string> = {
  uv: 'Requires Python 3.13+. `agentship[starter]` includes core + service + CLI + langgraph + memory + observability + MCP.',
  docker: 'Hot-reload enabled – edit agents/ and changes auto-reload. Requires Docker Desktop.',
  pip: 'Requires Python 3.13+. Uses docker-compose for PostgreSQL. Fastest path for first-time setup.',
}

function highlightBash(code: string) {
  return code.split('\n').map((line, i) => {
    const trimmed = line.trimStart()
    const indent = line.slice(0, line.length - trimmed.length)
    const isComment = trimmed.startsWith('#')
    
    return (
      <span key={i}>
        <span className={styles.hlIndent}>{indent}</span>
        {isComment ? (
          <span className={styles.hlComment}>{trimmed}</span>
        ) : trimmed === '' ? (
          ''
        ) : (
          <>
            <span className={styles.hlPrompt}>$ </span>
            <span className={styles.hlCmd}>{trimmed.slice(2)}</span>
          </>
        )}
        {'\n'}
      </span>
    )
  })
}

export function QuickStart() {
  const [setup, setSetup] = useState<Setup>('uv')
  const [copied, setCopied] = useState(false)

  const command = COMMANDS[setup] || ''

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
          `pip install` → `agentship init` → a working agent in an afternoon.{' '}
          <strong>uv</strong> is the recommended path.
        </p>

        <div className={styles.hints}>
          <span>Python 3.13+ required</span>
          <span>uv recommended</span>
          <span><a href="https://docs.agent-ship.dev/capabilities/foundation.html" target="_blank" rel="noopener noreferrer">Full guide</a></span>
        </div>

        <div className={styles.pills}>
          {SETUP_OPTIONS.map((s) => (
            <button key={s} className={setup === s ? styles.pillActive : styles.pill} onClick={() => setSetup(s)}>
              {s === 'uv' ? 'uv' : s === 'docker' ? 'Docker' : 'pip'}
            </button>
          ))}
        </div>

        <div className={styles.cmdLabel}>Run this:</div>

        <div className={styles.codeWrap}>
          <div className={styles.codeHeader}>
            <span className={styles.codeTitle}>Terminal</span>
          </div>
          <pre className={styles.code}><code>{highlightBash(command)}<span className={styles.hlSuccess}>✓ API running at http://localhost:7001</span></code></pre>
          <button className={styles.copyBtn} onClick={copy} title="Copy to clipboard">
            {copied ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8l3 3 5-6" stroke="#5CCFC0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
