// Greeting.tsx
import React from 'react';

// Define the props interface for the Greeting component
interface GreetingProps {
    name: string; // The name prop must be a string
}

// Functional component with typed props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}!</div>;
};

// Export the Greeting component
export default Greeting;
