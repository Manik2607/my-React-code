import React, { useState, useRef } from 'react';

// Higher-Order Function (HOF) for input validation
const withValidation = (Component) => {
  return ({ validate, ...props }) => {
    const [error, setError] = useState('');

    const validateInput = (value) => {
      const validationError = validate(value);
      setError(validationError);
      return validationError;
    };

    return (
      <div>
        <Component {...props} validateInput={validateInput} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  };
};

// Reusable Input Component with Validation
const InputField = ({ label, validateInput, inputRef }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    validateInput(e.target.value);
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <label>{label}</label>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        style={{ marginLeft: '10px' }}
      />
    </div>
  );
};

// Wrapped Input Components with Validation Logic
const ValidatedInputField = withValidation(InputField);

const App = () => {
  const [formValues, setFormValues] = useState({});
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();

  // Validation functions
  const validateName = (value) => (value ? '' : 'Name is required');
  const validateEmail = (value) =>
    value.includes('@') ? '' : 'Invalid email address';
  const validateAge = (value) =>
    value && !isNaN(value) && value > 0 ? '' : 'Age must be a valid number';

  const handleSubmit = (e) => {
    e.preventDefault();

    const validations = [
      { ref: nameRef, validate: validateName, field: 'name' },
      { ref: emailRef, validate: validateEmail, field: 'email' },
      { ref: ageRef, validate: validateAge, field: 'age' },
    ];

    let hasError = false;
    const values = {};
    for (let { ref, validate, field } of validations) {
      const value = ref.current.value;
      const error = validate(value);
      values[field] = value;
      if (error) {
        ref.current.focus();
        hasError = true;
        break;
      }
    }

    if (!hasError) setFormValues(values);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>React Form with HOF Validation and Refs</h2>
      <form onSubmit={handleSubmit}>
        <ValidatedInputField
          label="Name:"
          validate={validateName}
          inputRef={nameRef}
        />
        <ValidatedInputField
          label="Email:"
          validate={validateEmail}
          inputRef={emailRef}
        />
        <ValidatedInputField
          label="Age:"
          validate={validateAge}
          inputRef={ageRef}
        />
        <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
      </form>

      {Object.keys(formValues).length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Form Values:</h3>
          <pre>{JSON.stringify(formValues, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
