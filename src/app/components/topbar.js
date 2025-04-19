
'use client'
import { useState } from 'react'
import styles from './topbar.module.css'
import {
  Square as SelectAllIcon,
  Download as DownloadIcon,
  Info as InfoIcon,
  Trash2 as DeleteIcon,
  RefreshCw as RefreshIcon,
  MoreVertical as MoreIcon,
  MailCheck as MarkReadIcon,
  CheckSquare as CheckedIcon,
} from 'lucide-react'

export default function Topbar() {
  const [allSelected, setAllSelected] = useState(false)

  const handleSelectAll = () => {
    setAllSelected(!allSelected)
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    checkboxes.forEach((checkbox) => {
      checkbox.checked = !allSelected
    })
  }

  return (
    <div className={styles.topbar}>
      <div className={styles.leftGroup}>
        <button className={styles.btn} onClick={handleSelectAll}>
          {allSelected ? <CheckedIcon size={18} /> : <SelectAllIcon size={18} />}
        </button>
        <button className={styles.btn}><DownloadIcon size={18} /></button>
        <button className={styles.btn}><InfoIcon size={18} /></button>
        <button className={styles.btn}><DeleteIcon size={18} /></button>
        <button className={styles.btn}><RefreshIcon size={18} /></button>
      </div>

      <div className={styles.rightGroup}>
        <button className={styles.markRead}><MarkReadIcon size={18} /> Mark all read</button>
        <button className={styles.btn}><MoreIcon size={18} /></button>
      </div>
    </div>
  )
}

