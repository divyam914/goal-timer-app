import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders date', () => {
  const { getByText } = render(<App />);
  const date = getByText(/2020/i);
  expect(date).toBeInTheDocument();
});
