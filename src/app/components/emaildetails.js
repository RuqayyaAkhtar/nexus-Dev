// src/app/components/EmailDetail.js
'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import styles from './emaildetails.module.css';
import { HiOutlineArrowTurnUpLeft } from "react-icons/hi2";
import { HiOutlineArrowTurnUpRight } from "react-icons/hi2";
import {
  Trash2, Bold, Italic,
  AlignLeft, AlignCenter, AlignRight,
  List, ListOrdered,
  Link as LinkIcon, Image as ImageIcon,
  MoreHorizontal, Send, X
} from 'lucide-react';

export default function EmailDetail({ email }) {
  const [showReply, setShowReply] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const editorRef = useRef(null);

  useEffect(() => {
    if (showReply) {
      setTimeout(() => editorRef.current?.focus(), 0);
      updateCharCount();
    }
  }, [showReply]);

  const updateCharCount = () => {
    setCharCount(editorRef.current?.innerText.length || 0);
  };

  const exec = (command, value = null) => {
    document.execCommand(command, false, value);
    updateCharCount();
  };

  const createLink = () => {
    const url = prompt('Enter URL');
    url && exec('createLink', url);
  };

  const insertImage = () => {
    const url = prompt('Enter image URL');
    url && exec('insertImage', url);
  };

  return (
    <div className={styles.detail}>
      {/* — Mail Info — */}
      <div className={styles.mailInfo}>
        <div className={styles.senderInfo}>
          <div className={styles.imageDiv}>
            <Image src={email.avatar} alt="" className={styles.avatar} />
            <h3 className={styles.senderName}>{email.name}</h3>
          </div>
          <div className={styles.mainInfo}>
            <div className={styles.metaInfo}>
              <p><span>Name:</span> {email.name}</p>
              <p><span>Company:</span> {email.company}</p>
              <p><span>Email:</span> {email.email}</p>
              <p><span>Contact:</span> {email.contact}</p>
              <p><span>Business:</span> {email.business}</p>
            </div>
          </div>
        </div>

        <div className={styles.subjectBlock}>
          <p className={styles.subjectLabel}>
            <strong>Subject:</strong> <span>{email.subject}</span>
          </p>
          <p className={styles.detailLabel}><strong>Details:</strong></p>
          <p className={styles.detailText}>{email.message}</p>
          <p className={styles.footerTag}>@{email.name.replace(/\s/g, '').toLowerCase()}</p>
        </div>
      </div>

      {/* — Actions — */}
      <div className={styles.actions}>
        <button className={styles.replyBtn} onClick={() => setShowReply(true)}>
          <HiOutlineArrowTurnUpLeft className={styles.iconss} />
          Reply Email
        </button>
        <button className={styles.forwardBtn}>
          Forward <HiOutlineArrowTurnUpRight className={styles.iconss} /></button>
      </div>

      {/* — Reply Popup — */}
      {showReply && (
        <div className={styles.replyPopup}>
          <div className={styles.replyHeader}>
            <span>Type Reply :</span>
            <X className={styles.closeIcon} onClick={() => {
              setShowReply(false);
              editorRef.current.innerHTML = '';
              setCharCount(0);
            }} />
          </div>

          <div className={styles.replyBox}>
            <div
              ref={editorRef}
              className={styles.editor}
              contentEditable
              suppressContentEditableWarning
              onInput={updateCharCount}
              onFocus={updateCharCount}
              placeholder="Write a Note..."
            />
            <Trash2 className={styles.trashIcon} onClick={() => {
              editorRef.current.innerHTML = '';
              updateCharCount();
            }} />
            <div className={styles.charCount}>{charCount}/5000</div>
          </div>

          <div className={styles.toolbar}>
            <select defaultValue="option1" onChange={e => exec('fontName', e.target.value)} className={styles.dropdown}>
              <option value="option1">Aeonik Pro</option>
              <option value="option2">Arial</option>
              <option value="option3">Times New Roman</option>
              <option value="option4">Courier New</option>
            </select>
            <select defaultValue="option3" className={styles.dropdown}>
              <option value="option1">14 px</option>
              <option value="option2">16 px</option>
              <option value="option3" selected>18 px</option>
            </select>

            <button className={styles.btns} onClick={() => exec('bold')}><Bold className={styles.toolIcon} /></button>
            <button className={styles.btns} onClick={() => exec('italic')}><Italic className={styles.toolIcon} /></button>
            <button className={styles.btns} onClick={() => exec('justifyLeft')}><AlignLeft className={styles.toolIcon} /></button>
            <button className={styles.btns} onClick={() => exec('justifyCenter')}><AlignCenter className={styles.toolIcon} /></button>
            <button className={styles.btns} onClick={() => exec('justifyRight')}><AlignRight className={styles.toolIcon} /></button>
            <button className={styles.btns} onClick={() => exec('insertUnorderedList')}><List className={styles.toolIcon} /></button>
            <button className={styles.btns} onClick={() => exec('insertOrderedList')}><ListOrdered className={styles.toolIcon} /></button>
            <button className={styles.btns} onClick={createLink}><LinkIcon className={styles.toolIcon} /></button>
            <button className={styles.btns} onClick={insertImage}><ImageIcon className={styles.toolIcon} /></button>
            <button className={styles.btns}><MoreHorizontal className={styles.toolIcon} /></button>
            <div className={styles.replyActions}>
              <button className={styles.cancelBtn} onClick={() => {
                setShowReply(false);
                editorRef.current.innerHTML = '';
                setCharCount(0);
              }}>Cancel</button>
              <button className={styles.sendBtn} onClick={() => {
                // todo: hook up your API send
                console.log(editorRef.current.innerHTML);
              }}>
                <Send className={styles.sendIcon} /> Send
              </button>
            </div>
          </div>


        </div>
      )}
    </div>
  );
}
