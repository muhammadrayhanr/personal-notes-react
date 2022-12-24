import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete }) {
  return notes.length > 0 ? (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
      ))}
    </div>
  ) : (
    <p className="text-center p-5 animate-pulse">Tidak ada catatan</p>
  );
}

export default NoteList;
