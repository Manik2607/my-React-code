import React, { useState } from 'react';

const ToDo = () => {
    // Initial list of items
    const [items, setItems] = useState([
        { id: 'li1', text: 'Task 1' },
        { id: 'li2', text: 'Task 2' },
        { id: 'li3', text: 'Task 3' }
    ]);

    // Function to remove an item from the list
    const removeItem = (id) => {
        setItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    return (
        <>
            <h1>Task List</h1>
            <ul id="listcontainer" style={{ listStyleType: 'none', padding: 0 }}>
                {items.map(item => (
                    <li key={item.id} style={{ marginBottom: '6px' }}>
                        {item.text} 
                        <button 
                            onClick={() => removeItem(item.id)} 
                            style={{ color: 'white', backgroundColor: 'red', border: 'none', padding: '8px' }}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ToDo;
