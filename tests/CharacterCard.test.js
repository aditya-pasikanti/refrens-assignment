import React from 'react';
import { render, screen, waitForElementToBeInTheDOM } from '@testing-library/react';
import CharacterCard from '../src/component/charactercard/CharacterCard';

const character = {
  id: 1,
  name: 'Rick Sanchez',
  image: 'rick.png',
  species: 'Human',
  gender: 'Male',
  origin: {
    name: 'Earth Dimension C-137',
  },
  location: {
    name: 'Citadel of Ricks',
  },
  episodes: [
    'Pilot',
    'Lawnmower Dog',
    'Meeseeks and Destroy',
  ],
};

test('renders the character information correctly', async () => {
  render(<CharacterCard character={character} />);

  // Wait for the character card element to be rendered before accessing it.
  const characterCardElement = await waitForElementToBeInTheDOM('.character-card');

  // Check if character name is in the rendered component
  expect(characterCardElement).toHaveTextContent('Rick Sanchez');

  // Check if species, gender, origin, location, and chapters are in the rendered component
  expect(characterCardElement).toHaveTextContent('Species: Human');
  expect(characterCardElement).toHaveTextContent('Status: Alive');
  expect(characterCardElement).toHaveTextContent('Origin: Earth Dimension C-137');
  expect(characterCardElement).toHaveTextContent('Location: Citadel of Ricks');
  expect(characterCardElement).toHaveTextContent('Episodes: Pilot, Lawnmower Dog, Meeseeks and Destroy');
});
