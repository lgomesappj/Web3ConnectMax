// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Web3ConnectMax title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Web3ConnectMax/i);
    expect(titleElement).toBeInTheDocument();
});
