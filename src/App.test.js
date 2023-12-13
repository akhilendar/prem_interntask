import { render, screen } from '@testing-library/react';
import LandingPage from './components/LandingPage'

test('renders existing text in LandingPage', () => {
  render(<LandingPage />);
  const existingText = screen.getAllByRole(/button/i);
  expect(existingText).toBeInTheDocument();
});
