import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <div style={{ backgroundColor: '#343a40', color: 'white', padding: '10px', fontSize: '24px' }}>
                    Welcome to the Clock App
                </div>
                <div style={{ marginTop: '20px', fontSize: '18px' }}>
                    <p>Current Time</p>
                    <p>{this.state.time.toLocaleTimeString()}</p>
                </div>
            </div>
        );
    }
}

export default Clock;
