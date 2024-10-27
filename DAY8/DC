import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Optional: Add your CSS styles here

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ id: null, title: '', content: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentNote({ ...currentNote, [name]: value });
  };

  const addNote = () => {
    if (!currentNote.title || !currentNote.content) return;

    setNotes([...notes, { ...currentNote, id: Date.now() }]);
    resetForm();
  };

  const editNote = (note) => {
    setCurrentNote(note);
    setIsEditing(true);
  };

  const updateNote = () => {
    setNotes(notes.map(note => (note.id === currentNote.id ? currentNote : note)));
    resetForm();
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const resetForm = () => {
    setCurrentNote({ id: null, title: '', content: '' });
    setIsEditing(false);
  };

  useEffect(() => {
    // This effect will be called when a note is being edited
    if (isEditing) {
      document.title = "Editing Note";
    } else {
      document.title = "Sticky Notes";
    }
  }, [isEditing]);

  return (
    <div className="app">
      <h1>Sticky Notes</h1>
      <div className="form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={currentNote.title}
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          placeholder="Content"
          value={currentNote.content}
          onChange={handleInputChange}
        />
        {isEditing ? (
          <button onClick={updateNote}>Update Note</button>
        ) : (
          <button onClick={addNote}>Save Note</button>
        )}
        <button onClick={resetForm}>Cancel</button>
      </div>
      <div className="notes-grid">
        {notes.map(note => (
          <div key={note.id} className="note">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => editNote(note)}>Edit</button>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
