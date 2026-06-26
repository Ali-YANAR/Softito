import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SET_CONTENT, SET_FILENAME } from './store';

export default function Downloader() {
  const dispatch = useDispatch();
  const { content, filename } = useSelector((s) => s.file);

  function indir() {
    const blob = new Blob([content], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = filename + '.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => dispatch({ type: SET_CONTENT, payload: e.target.value })}
        rows={6}
        style={{ width: '100%' }}
      />
      <input
        value={filename}
        onChange={(e) => dispatch({ type: SET_FILENAME, payload: e.target.value })}
        placeholder="dosya adı"
      />
      <button onClick={indir}>İndir</button>
    </div>
  );
}
