import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css'; // Optional CSS file for styling

// Home Component
const Home = () => {
    return (
        <div className="page">
            <h2>Home Page</h2>
            <p>Welcome to the Home Page!</p>
        </div>
    );
};

// About Component
const About = () => {
    return (
        <div className="page">
            <h2>About Page</h2>
            <p>This is the About Page where you can learn more about us.</p>
        </div>
    );
};

// Contact Component
const Contact = () => {
    return (
        <div className="page">
            <h2>Contact Page</h2>
            <p>Get in touch with us through the Contact Page.</p>
        </div>
    );
};

// NavBar Component
const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>My Website</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
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
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
