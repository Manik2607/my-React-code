import React from 'react';

const D2CY = () => {
  return(
    <div 
        style={{display:'flex',
        flexDirection:'column',
        margin:'200px 500px',
        padding:'50px',
        backgroundColor:'lightskyblue'}}>
      <h1 style={{textAlign:'center'}}>Smile Component</h1>
      <p style={{textAlign:'center'}}>It is a functional component</p>
      <img src="https://cdn.pixabay.com/photo/2020/12/27/20/24/smile-5865208_640.png" alt="Smiling Face"
          style={{ marginLeft:'100px',width:'200px',height:'200px'}}>
      </img>
    </div>
  );
};

export default D2CY;
