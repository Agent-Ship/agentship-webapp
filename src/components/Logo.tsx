/*
 * The AgentShip mark and wordmark, from the brand kit.
 *
 * The geometry is the kit's `logo/svg/agentship-mark-on-dark.svg` verbatim: five
 * 20x15 containers (rx 3) on a 96-unit grid in rows of 1, 2 and 3, over a hull.
 * The top container is the accent; everything else is `currentColor`, so one
 * component serves both themes instead of swapping two PNGs.
 *
 * Do not redraw, recolour, rotate or rearrange it, and do not set the wordmark
 * in another typeface — "Agent" is weight 500 and "Ship" is weight 800 of
 * Bricolage Grotesque, one word.
 */
import styles from './Logo.module.css'

/** The mark alone. `size` is the rendered edge in px. */
export function Mark({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 96 96"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="AgentShip"
    >
      <rect x="38" y="10" width="20" height="15" rx="3" fill="var(--as-accent)" />
      <rect x="26" y="29" width="20" height="15" rx="3" fill="currentColor" />
      <rect x="50" y="29" width="20" height="15" rx="3" fill="currentColor" />
      <rect x="14" y="48" width="20" height="15" rx="3" fill="currentColor" />
      <rect x="38" y="48" width="20" height="15" rx="3" fill="currentColor" />
      <rect x="62" y="48" width="20" height="15" rx="3" fill="currentColor" />
      <path
        d="M6 67 H90 L79 84 H17 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** The wordmark alone: one word, "Agent" at 500 and "Ship" at 800. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`${styles.wordmark} ${className ?? ''}`}>
      <span className={styles.agent}>Agent</span>
      <span className={styles.ship}>Ship</span>
    </span>
  )
}

/**
 * The horizontal lockup: mark plus wordmark, with the kit's clearspace between
 * them. `markSize` scales the mark; the wordmark follows via `fontSize`.
 */
export function Logo({
  markSize = 26,
  fontSize = '1.2rem',
  className,
}: {
  markSize?: number
  fontSize?: string
  className?: string
}) {
  return (
    <span className={`${styles.lockup} ${className ?? ''}`} style={{ fontSize }}>
      <Mark size={markSize} className={styles.lockupMark} />
      <Wordmark />
    </span>
  )
}
