import { useState, useRef, useEffect } from 'react'
import styles from './Chatbot.module.css'

const WELCOME_MESSAGE = "Hi! I'm the AgentShip assistant. How can I help you today?"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: WELCOME_MESSAGE },
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', content: text }])
    // Placeholder: echo or hook to your backend later
    setMessages((prev) => [
      ...prev,
      { role: 'assistant', content: "Thanks for your message. I'm a demo chatbot—connect me to your API to respond for real!" },
    ])
  }

  const handleClose = () => {
    setIsOpen(false)
    setIsFullScreen(false)
  }

  return (
    <div className={styles.root} aria-live="polite">
      <div
        className={`${styles.panelWrap} ${isOpen ? styles.panelOpen : ''} ${isFullScreen ? styles.fullScreen : ''}`}
        role="dialog"
        aria-label="Chat"
        aria-hidden={!isOpen}
      >
        <div className={styles.panel}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <div className={styles.avatar} aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8V4H8" />
                  <rect x="2" y="14" width="20" height="8" rx="2" />
                  <path d="M6 18V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" />
                </svg>
              </div>
              <div className={styles.headerTitle}>
                <span className={styles.badge}>AgentShip Assistant</span>
                <span className={styles.status}>
                  <span className={styles.statusDot} aria-hidden />
                  Online
                </span>
              </div>
            </div>
            <div className={styles.headerActions}>
              <button
                type="button"
                className={styles.iconBtn}
                onClick={() => setIsFullScreen((f) => !f)}
                aria-label={isFullScreen ? 'Exit full screen' : 'Full screen'}
                title={isFullScreen ? 'Exit full screen' : 'Full screen'}
              >
                {isFullScreen ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                )}
              </button>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={handleClose}
                aria-label="Close chat"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.messages}>
            {messages.map((msg, i) => (
              <div key={i} className={msg.role === 'user' ? styles.msgUser : styles.msgAssistant}>
                <div className={styles.avatarSmall} aria-hidden>
                  {msg.role === 'assistant' ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8V4H8" />
                      <rect x="2" y="14" width="20" height="8" rx="2" />
                      <path d="M6 18V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
                </div>
                <span className={styles.msgBubble}>{msg.content}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputWrap}>
              <textarea
                ref={inputRef}
                className={styles.input}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSubmit(e)
                  }
                }}
                placeholder="Ask anything..."
                rows={1}
                aria-label="Message"
              />
            </div>
            <button type="submit" className={styles.sendBtn} aria-label="Send message" disabled={!input.trim()}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {!isFullScreen && (
        <div className={styles.toggleWrap}>
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? 'Close chat' : 'Open chat'}
            aria-expanded={isOpen}
          >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 5l10 10M15 5L5 15" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
          </button>
        </div>
      )}
    </div>
  )
}
