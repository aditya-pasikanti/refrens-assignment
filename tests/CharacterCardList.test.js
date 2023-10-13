import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterCardList from '../src/component/charactercardlist/CharacterCardList';

const characters = [
  {
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
  },
  {
    id: 2,
    name: 'Morty Smith',
    image: 'morty.png',
    species: 'Human',
    gender: 'Male',
    origin: {
      name: 'Earth Dimension C-137',
    },
    location: {
      name: 'Earth Dimension C-137',
    },
    episodes: [
      'Pilot',
      'Lawnmower Dog',
      'Meeseeks and Destroy',
    ],
  },
];

test('renders the character card list correctly', async () => {
  render(<CharacterCardList characters={characters} />);

  // Wait for the character card list element to be rendered before accessing it.
  const characterCardListElement = await screen.waitForElementToBeInTheDOM('.character-card-list');

  // Check if the character card list element is in the rendered component
  expect(characterCardListElement).toBeInTheDocument();

  // Check if the character card list element contains all of the expected character names.
  characters.forEach((character) => {
    expect(characterCardListElement).toHaveTextContent(character.name);
  });
});
