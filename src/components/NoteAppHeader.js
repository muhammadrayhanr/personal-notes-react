/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function NoteAppHeader() {
  return (
    <>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost normal-case text-3xl">
          NotesApp<span className="text-xl animate-ping">.</span>
        </a>
      </div>
    </>
  );
}

export default NoteAppHeader;
