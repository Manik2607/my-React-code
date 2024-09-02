import React from 'react';
import './App.css'

const D2PAH = () => {
    const retrieveData = () => {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        console.log("Name : ",name);
        console.log("Email : ",email);
        console.log("Message : ",message);
    }

    return(
        <div className="form">
            <input id="name" type="text" placeholder="Name" required></input>
            <input id="email" type="email" placeholder="Email" required></input>
            <textarea id="message" placeholder='message' required></textarea>
            <button onClick={retrieveData}>Submit</button>
        </div>
    );
}

export default D2PAH;
