import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the character card list', async () => {
  render(<App />);

  // Wait for the character card list element to be rendered before accessing it.
  const characterCardListElement = await waitForElementToBeInTheDOM('.character-card-list');

  // Check if the character card list element is in the rendered component
  expect(characterCardListElement).toBeInTheDocument();
});
