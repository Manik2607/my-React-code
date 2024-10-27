import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css'; // Optional CSS for styling

// Home Component
const Home = () => {
    return (
        <div className="page">
            <h2>Welcome to Our Travel Website</h2>
            <p>Your adventure begins here!</p>
        </div>
    );
};

// Destination Component
const Destination = () => {
    return (
        <div className="page">
            <h2>Explore Our Destinations</h2>
            <p>Discover the best places to visit around the world.</p>
        </div>
    );
};

// About Component
const About = () => {
    return (
        <div className="page">
            <h2>About Us</h2>
            <p>We are passionate about travel and helping you find the best experiences.</p>
        </div>
    );
};

// Contact Component
const Contact = () => {
    return (
        <div className="page">
            <h2>Contact Us</h2>
            <p>Reach out for any inquiries or support.</p>
        </div>
    );
};

// NavBar Component
const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>Travel Website</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/destination">Destination</Link></li>
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
                    <Route path="/destination" component={Destination} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="*" component={Home} /> {/* Redirect to Home for invalid paths */}
                </Switch>
            </div>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
