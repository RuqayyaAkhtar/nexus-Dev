'use client'
import { useState } from 'react'
import styles from './sidebar.module.css'
import { usePathname } from 'next/navigation'
import {
  Menu as MenuIcon,
  Inbox as InboxIcon,
  Star as StarIcon,
  Send as SendIcon,
  FileText as DraftIcon,
  MessageCircle as SpamIcon,
  Trash2 as TrashIcon,
} from 'lucide-react'
import Link from 'next/link'
import { mailData } from '@/app/mail/data'

export default function Sidebar() {
  const pathname = usePathname()
  const items = [
    { href: '/mail/inbox',  icon: <InboxIcon />,  label: 'Inbox',  count: mailData.length },
    { href: '/mail/starred',icon: <StarIcon />,   label: 'Starred', count: 0 },
    { href: '/mail/sent',    icon: <SendIcon />,   label: 'Sent',    count: 0 },
    { href: '/mail/drafts',  icon: <DraftIcon />,  label: 'Drafts',  count: 0 },
    { href: '/mail/spam',    icon: <SpamIcon />,   label: 'Spam',    count: 0 },
    { href: '/mail/trash',   icon: <TrashIcon />,  label: 'Trash',   count: 0 },
  ]
  const active = items.find(i => i.href === pathname)
  const [expanded, setExpanded] = useState(false)

  return (
    <aside className={`${styles.sidebar} ${expanded ? styles.expanded : ''}`}>
      <nav className={styles.nav}>
      <button
        className={styles.toggleBtn}
        onClick={() => setExpanded(e => !e)}
        aria-label="Toggle sidebar"
      >
        <MenuIcon size={20} />
      </button>
        {items.map(({ href, icon, label, count }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.link} ${pathname === href ? styles.active : ''}`}
          >
            <div className={styles.icon}>{icon}</div>
            <span className={styles.label}>{label}</span>
            <span className={styles.count}>{count}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
