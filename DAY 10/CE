import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory, useLocation } from 'react-router-dom';

// Home Component
const Home = () => (
  <div data-testid="/">
    <h1>Home</h1>
    <p>Welcome to the Travel Web Application!</p>
  </div>
);

// Destination Component
const Destination = () => (
  <div data-testid="destination">
    <h1>Destination</h1>
    <p>Discover exciting destinations!</p>
  </div>
);

// About Component
const About = () => (
  <div data-testid="about">
    <h1>About Us</h1>
    <p>Learn more about our travel services.</p>
  </div>
);

// Contact Component
const Contact = () => (
  <div data-testid="contact">
    <h1>Contact Us</h1>
    <p>Get in touch with us for any queries!</p>
  </div>
);

// Registration Form Component
const RegistrationForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    passport: '',
    travelDate: '',
    returnDate: '',
    destination: '',
    reason: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.passport) newErrors.passport = 'Passport number is required';
    if (!formData.travelDate) newErrors.travelDate = 'Travel date is required';
    if (!formData.returnDate) newErrors.returnDate = 'Return date is required';
    if (!formData.destination) newErrors.destination = 'Destination is required';
    if (!formData.reason) newErrors.reason = 'Reason for travel is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      history.push({
        pathname: '/submittedform',
        state: { formData },
      });
    }
  };

  return (
    <div data-testid="registration-form">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        {errors.name && <p>{errors.name}</p>}

        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        {errors.email && <p>{errors.email}</p>}

        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
        {errors.phone && <p>{errors.phone}</p>}

        <input name="passport" value={formData.passport} onChange={handleChange} placeholder="Passport Number" />
        {errors.passport && <p>{errors.passport}</p>}

        <input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} />
        {errors.travelDate && <p>{errors.travelDate}</p>}

        <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} />
        {errors.returnDate && <p>{errors.returnDate}</p>}

        <input name="destination" value={formData.destination} onChange={handleChange} placeholder="Destination" />
        {errors.destination && <p>{errors.destination}</p>}

        <textarea name="reason" value={formData.reason} onChange={handleChange} placeholder="Reason for Travel" />
        {errors.reason && <p>{errors.reason}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Submitted Form Component
const SubmittedForm = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div data-testid="submitted-form">
      <h1>Submitted Form Data</h1>
      {formData ? (
        <ul>
          <li><strong>Name:</strong> {formData.name}</li>
          <li><strong>Email:</strong> {formData.email}</li>
          <li><strong>Phone:</strong> {formData.phone}</li>
          <li><strong>Passport:</strong> {formData.passport}</li>
          <li><strong>Travel Date:</strong> {formData.travelDate}</li>
          <li><strong>Return Date:</strong> {formData.returnDate}</li>
          <li><strong>Destination:</strong> {formData.destination}</li>
          <li><strong>Reason:</strong> {formData.reason}</li>
        </ul>
      ) : (
        <p>No data submitted.</p>
      )}
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <nav>
        <Link to="/" data-testid="/">Home</Link>
        <Link to="/destination" data-testid="destination">Destination</Link>
        <Link to="/about" data-testid="about">About</Link>
        <Link to="/contact" data-testid="contact">Contact</Link>
        <Link to="/registration" data-testid="registration-form">Registration Form</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/destination" component={Destination} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/registration" component={RegistrationForm} />
        <Route path="/submittedform" component={SubmittedForm} />
        <Route path="*" component={() => <Redirect to="/" />} /> {/* Redirect invalid paths */}
      </Switch>
    </Router>
  );
}

export default App;
