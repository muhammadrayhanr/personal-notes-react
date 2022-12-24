import React, { Component } from 'react';

class NoteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }
  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="p-11 text-center">
        <p className="normal-case p-4 text-xl font-bold">
          <span className="animate-pulse font-bold">+</span> Tambah Catatan
        </p>
        <form onSubmit={this.onSubmitEventHandler}>
          <input type="text" placeholder="Judul catatan ..." required className="input input-bordered mb-5 input-primary w-full max-w-xl" value={this.state.title} onChange={this.onTitleChangeHandler} />
          <textarea className="textarea textarea-primary mx-auto mb-5 block w-full max-w-xl" required placeholder="Isi catatan ..." onChange={this.onBodyChangeHandler}></textarea>
          <button type="submit" className="btn btn-primary w-full max-w-xl">
            Tambah
          </button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
