import { render, screen } from '@testing-library/react';
import App from '../App';

it('Deve ter o heading"App" na tela', () => {
  render(<App />);
  const AppText = screen.getByRole('heading', { name: /App/i });
  expect(AppText).toBeInTheDocument();
});
