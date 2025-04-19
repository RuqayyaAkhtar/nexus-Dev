// components/TextEditor.js
'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import styles from './TextEditor.module.css'; // We'll create this

const TextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World!</p>',
  });

  return (
    <div className={styles.editorContainer}>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
