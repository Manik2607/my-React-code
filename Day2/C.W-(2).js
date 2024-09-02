import React from 'react';
import './App.css';

 const D2CE2=()=>{
  const a1={
    color:'green'
  }
  const a2={
    backgroundColor:'lightblue',
    color:'darkblue',
    padding:'10px',
    border:'1px solid blue',
    borderRadius:'5px'

  }
  const a3={
    color:'darkblue',
    fontSize:'16px'
  }
  return(
    <div>
      <h1 style={a1}>Inline Style in JSX Example.</h1>
      <div style={a2}>
          <p style={a3}>This is a paragraph with Inline styles applied.</p>
      </div>
    </div>
  )
 }
export default D2CE2;
