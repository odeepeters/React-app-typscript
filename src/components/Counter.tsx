// Counter.tsx
import React, { Component } from 'react';

// Define the state interface for the Counter component
interface CounterState {
    count: number; // The count state must be a number
}

// Class component with typed state
class Counter extends Component<{}, CounterState> {
    // Initialize the state with the default count value
    state: CounterState = {
        count: 0,
    };

    // Method to increment the count
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    // Render method to display the UI
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

// Export the Counter component
export default Counter;
