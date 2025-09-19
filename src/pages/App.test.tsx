import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '@/pages/App';

describe('App', () => {
  it('renders Vite + React + Tailwind heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', {
      name: /vite \+ react \+ tailwind/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders count button with initial value of 0', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();
  });

  it('increments count when button is clicked', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });

    fireEvent.click(button);

    expect(
      screen.getByRole('button', { name: /count is 1/i })
    ).toBeInTheDocument();
  });

  it('renders Vite and React logos with correct alt text', () => {
    render(<App />);
    const viteLogo = screen.getByAltText(/vite logo/i);
    const reactLogo = screen.getByAltText(/react logo/i);

    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  it('renders edit instruction text', () => {
    render(<App />);
    const editText = screen.getByText(/edit/i);
    expect(editText).toBeInTheDocument();
  });
});
