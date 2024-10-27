// reactapp/src/App.js
import React, { useRef, useState } from 'react';
import axios from 'axios';

const App = () => {
  const inputRef = useRef(null); // Ref to manage input focus
  const [inputValue, setInputValue] = useState(''); // State to track input field value
  const [error, setError] = useState(null); // State to manage error messages
  const [successMessage, setSuccessMessage] = useState(null); // State to manage success messages

  // Function to focus the input when the button is clicked
  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setError(null); // Clear any previous error when focusing
    }
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Basic validation to check if input is empty
    if (inputValue.trim() === '') {
      setError('Input cannot be empty.');
      return;
    }

    try {
      // Attempt to submit form data to JSON Server on port 8080
      const response = await axios.post('http://localhost:8080/data', {
        input: inputValue,
      });
      
      if (response.status === 201) {
        setSuccessMessage('Form submitted successfully!');
        setInputValue(''); // Clear the input field on successful submission
      } else {
        setError('Failed to submit data.');
      }
    } catch (err) {
      if (err.message.includes('Network Error')) {
        setError('Error: JSON Server is not connected. Please start the server on port 8080.');
      } else {
        setError('An error occurred during form submission.');
      }
    }
  };

  // Key press handler for Enter key submission
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Simple Form with Focus and Error Handling</h2>

      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef} // Attach ref for focus control
          type="text"
          placeholder="Enter something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress} // Handle Enter key submission
          style={{
            padding: '10px',
            width: '300px',
            border: error ? '2px solid red' : '2px solid #ccc',
            outline: error ? 'none' : '',
          }}
        />

        <div style={{ marginTop: '20px' }}>
          <button
            type="button"
            onClick={handleFocusInput}
            style={{ padding: '10px 20px', cursor: 'pointer' }}
          >
            Focus Input
          </button>
          <button
            type="submit"
            style={{ padding: '10px 20px', cursor: 'pointer', marginLeft: '10px' }}
          >
            Submit
          </button>
        </div>
      </form>

      {/* Display error or success message */}
      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green', marginTop: '20px' }}>{successMessage}</p>}
    </div>
  );
};

export default App;
