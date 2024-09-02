import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

const FruitSurvey = () => {
  const [name, setName] = useState('');
  const [favoriteFruit, setFavoriteFruit] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && favoriteFruit) {
      alert(`Hello, ${name}! Your favorite fruit is ${favoriteFruit}.`);
    } else {
      alert('Please fill out all the fields.');
    }
  };

  return (<>
  <h1>Enter Your name Favourite fruit : </h1>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)}
        data-testid="name"
      />
      <Autocomplete
        options={['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry']}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Favorite Fruit"
            variant="outlined"
            data-testid="autocomplete"
          />
        )}
        value={favoriteFruit}
        onChange={(event, newValue) => setFavoriteFruit(newValue)}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        data-testid="button"
      >
        Submit
      </Button>
    </form>
    </>
  );
};

export default FruitSurvey;