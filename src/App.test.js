// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OutlineFork title', () => {
    render(<App />);
    const titleElement = screen.getByText(/OutlineFork/i);
    expect(titleElement).toBeInTheDocument();
});
