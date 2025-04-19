'use client';

import { useState } from 'react';
// import RichTextEditor from '@/components/';
import styles from './reply.module.css';

export default function ReplyPopup() {
  const [message, setMessage] = useState('');

  return (
    <div className={styles.replyPopup}>
      <h3>Reply</h3>
      {/* <RichTextEditor value={message} onChange={setMessage} /> */}
      <div className={styles.buttonsRow}>
        <button onClick={() => console.log(message)}>Send</button>
        <button onClick={() => setMessage('')}>Cancel</button>
      </div>
    </div>
  );
}
