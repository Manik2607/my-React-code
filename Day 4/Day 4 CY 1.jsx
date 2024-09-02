import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const books = [
  {
    title: 'The Holy Bible',
    summary: 'Religious text of Christianity, considered sacred and canonical.',
  },
  {
    title: 'Quotations from Chairman Mao',
    summary: 'Collection of statements from speeches and writings by Mao Zedong.',
  },
  {
    title: 'Harry Potter series',
    summary: 'Fantasy novels by J.K. Rowling, following the life of a young wizard.',
  },
  {
    title: 'The Lord of the Rings',
    summary: 'High-fantasy novel written by J.R.R. Tolkien, set in Middle-earth.',
  },
  {
    title: 'To Kill a Mockingbird',
    summary: 'Novel by Harper Lee, dealing with racial injustice and moral growth.',
  },
];

function MostInfluentialBooks() {
  return (<>
  <h1>Most Influential Book of all Time</h1>
    <List>
      {books.map((book, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemText primary={book.title} secondary={book.summary} />
          </ListItem>
          {index !== books.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
    </>
  );
}

export default MostInfluentialBooks;