import React from 'react';
// import NoteItemAction from './NoteItemAction';
import NoteItemContent from './NoteItemContent';

export default function NoteItem({ archive, onDelete, title, createdAt, body, id, onArchive }) {
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <div className="card-body">
        <NoteItemContent title={title} createdAt={createdAt} body={body} />
        {/* <NoteItemAction id={id} onDelete={onDelete} archive={archive} onArchive={onArchive} /> */}
        <div className="card-actions justify-end">
          <button className="btn btn-error text-white mt-3" onClick={() => onDelete(id)}>
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
