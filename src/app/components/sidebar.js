'use client'
import styles from './sidebar.module.css'
import { usePathname } from 'next/navigation'
import {
  Inbox as InboxIcon,
  Star as StarIcon,
  Send as SendIcon,
  FileText as DraftIcon,
  MessageCircle as SpamIcon,
  Trash2 as TrashIcon,
} from 'lucide-react'
import Link from 'next/link'
import { mailData } from '@/app/mail/data';

// Dynamic counts for each folder
const counts = {
  inbox: mailData.length,
  starred: 0,
  sent: 0,
  drafts: 0,
  spam: 0,
  trash: 0,
}

const items = [
  { href: '/mail/inbox',  icon: <InboxIcon />,  label: 'Inbox',  count: counts.inbox  },
  { href: '/mail/starred',icon: <StarIcon />,   label: 'Starred', count: counts.starred },
  { href: '/mail/sent',   icon: <SendIcon />,   label: 'Sent',    count: counts.sent    },
  { href: '/mail/drafts', icon: <DraftIcon />,  label: 'Drafts',  count: counts.drafts  },
  { href: '/mail/spam',   icon: <SpamIcon />,   label: 'Spam',    count: counts.spam    },
  { href: '/mail/trash',  icon: <TrashIcon />,  label: 'Trash',   count: counts.trash   },
]

export default function Sidebar() {
  const pathname = usePathname()
  const activeItem = items.find(item => item.href === pathname)

  return (
    <aside className={styles.sidebar}>
      {/* Section heading based on active route */}
      {activeItem && (
        <h2 className={styles.sectionHeading}>{activeItem.label}</h2>
      )}

      <nav className={styles.nav}>
        {items.map(({ href, icon, label, count }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`${styles.link} ${isActive ? styles.active : ''}`}
            >
              {/* <div className={styles.row}> */}
              {/* Icon and label */}
              <div className={styles.icon}>{icon}</div>
              <span className={styles.label}>{label}</span>
              <span className={styles.count}>{count}</span>
              {/* </div> */}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}