import React from 'react';
import { showFormattedDate } from '../utils/data';

export default function NoteItemContent({ title, createdAt, body }) {
  return (
    <>
      <h2 className="card-title">{title}</h2>
      <p className="text-xs">{showFormattedDate(createdAt)}</p>
      <p>{body}</p>
    </>
  );
}
