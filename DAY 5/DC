import React, { Component } from 'react';
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}
class FormValidation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            errors: {
                name: '',
                email: '',
            },
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    validateForm = () => {
        const { name, email } = this.state;
        const errors = {};
        let formIsValid = true;

        if (!name) {
            formIsValid = false;
            errors.name = 'Please enter your name.';
        }

        if (!email) {
            formIsValid = false;
            errors.email = 'Please enter your email.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formIsValid = false;
            errors.email = 'Please enter a valid email address.';
        }

        this.setState({ errors });
        return formIsValid;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            alert('Form is valid and ready for submission!');
        }
    };

    render() {
        const { name, email, errors } = this.state;

        return (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <div style={{ backgroundColor: '#343a40', color: 'white', padding: '10px', fontSize: '24px' }}>
                    Form Validation
                </div>
                <form onSubmit={this.handleSubmit} style={{ marginTop: '20px', display: 'inline-block', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
                    <div>
                        <label>Name</label>
                        <br />
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            style={{ width: '300px', padding: '5px' }}
                        />
                        <br />
                        <span style={{ color: 'red' }}>{errors.name}</span>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <label>Email</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            style={{ width: '300px', padding: '5px' }}
                        />
                        <br />
                        <span style={{ color: 'red' }}>{errors.email}</span>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
function App() {
    return (
        <div >
            <ErrorBoundary>
                <FormValidation />
            </ErrorBoundary>
        </div>
    );
}

export default App;
