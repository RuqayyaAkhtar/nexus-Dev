'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Star, StarOff, MoreVertical } from 'lucide-react';
import styles from './emailcard.module.css';

export default function EmailCard({ email }) {
  const [starred, setStarred] = useState(false);

  return (
    <div className={styles.emailRow}>
      {/* 1. Checkbox */}
      <input type="checkbox" className={styles.radioo} />

      {/* 2. Star toggle */}
      <button
        className={styles.starBtn}
        onClick={() => setStarred(!starred)}
        aria-label="Star email"
      >
        {starred
          ? <Star fill="gold" stroke="gold" size={18} className={styles.starIcon}/>
          : <StarOff size={18} className={styles.starIcon}/>}
      </button>

      {/* 3. Sender & Subject */}
      <Link href={`/mail/email/${email.id}`} className={styles.emailLink}>
        <div className={styles.textGroup}>
          <span className={styles.name}>{email.name}</span>
          <span className={styles.subject}>{email.subject}</span>
        </div>
      </Link>

      {/* 4. Time */}
      <span className={styles.time}>{email.time}</span>

      {/* 5. More menu */}
      <button className={styles.moreBtn} aria-label="More actions">
        <MoreVertical size={18} />
      </button>
    </div>
  );
}
