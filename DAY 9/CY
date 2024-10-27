import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css'; // Optional CSS for styling

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        terms: false,
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        terms: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const validateForm = () => {
        const newErrors = {
            name: '',
            email: '',
            password: '',
            terms: '',
        };

        if (!formData.name) {
            newErrors.name = 'Name is required.';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid.';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required.';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long.';
        }

        if (!formData.terms) {
            newErrors.terms = 'You must accept the terms and conditions.';
        }

        setErrors(newErrors);
        return Object.values(newErrors).every((error) => !error);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Registration successful!');
            // Here you would typically send the form data to your server.
            console.log(formData);
            // Reset form after submission
            setFormData({
                name: '',
                email: '',
                password: '',
                terms: false,
            });
        }
    };

    return (
        <div className="registration-form">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                        />
                        I accept the terms and conditions
                    </label>
                    {errors.terms && <span className="error">{errors.terms}</span>}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

// App Component
const App = () => {
    return (
        <div className="App">
            <RegistrationForm />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
