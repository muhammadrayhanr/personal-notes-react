import React, { Component } from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import { getInitialData } from '../utils/data';

export default class NoteAppBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((previous) => {
      return {
        notes: [
          ...previous.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toDateString(),
            archived: false,
          },
        ],
      };
    });
  }
  render() {
    return (
      <>
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <div className="container p-10">
            <p className="text-xl font-bold mb-5">Catatan :</p>
            <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
          </div>
        </div>
        <div className="container text-center py-3">
          <p className="text-sm">Muhammad Rayhan Rohadi, 2022</p>
        </div>
      </>
    );
  }
}
