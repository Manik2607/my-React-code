import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css'; // Assuming you have this CSS file for styles

// NavBar Component
const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>Music World</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/singers">Singers</Link></li>
                <li><Link to="/albums">Albums</Link></li>
            </ul>
        </nav>
    );
};

// Home Component
const Home = () => {
    return (
        <div className="home">
            <h2>Welcome to Music World!</h2>
            <p>Your go-to place for everything music!</p>
        </div>
    );
};

// Singers Component
const Singers = () => {
    const singers = [
        { name: 'Adele', year: 2008 },
        { name: 'Ed Sheeran', year: 2011 },
        { name: 'Beyoncé', year: 2003 },
        { name: 'Drake', year: 2009 }
    ];

    return (
        <div className="singers">
            <h2>Singers</h2>
            <ul>
                {singers.map((singer, index) => (
                    <li key={index}>{singer.name} - {singer.year}</li>
                ))}
            </ul>
        </div>
    );
};

// Albums Component
const Albums = () => {
    const albums = [
        { name: '30', singer: 'Adele' },
        { name: 'Equals', singer: 'Ed Sheeran' },
        { name: 'Renaissance', singer: 'Beyoncé' },
        { name: 'Certified Lover Boy', singer: 'Drake' }
    ];

    return (
        <div className="albums">
            <h2>Albums</h2>
            <ul>
                {albums.map((album, index) => (
                    <li key={index}>{album.name} - {album.singer}</li>
                ))}
            </ul>
        </div>
    );
};

// App Component
const App = () => {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/singers" component={Singers} />
                    <Route path="/albums" component={Albums} />
                </Switch>
            </div>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
