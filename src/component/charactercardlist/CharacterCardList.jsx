import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import CharacterCard from '../charactercard/CharacterCard'; // Create CharacterCard component
import './CharacterCardList.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';


const CharacterCardList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Use memo to cache the results of the `searchResults` variable
  const memoizedSearchResults = useMemo(() => {
    return searchResults;
  }, [searchResults]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
        setCharacters(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching character data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]); // Fetch data when the currentPage changes

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
      );

      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching character data:', error);
    }

    setIsLoading(false);
  };

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='character-card-list'>
      <h1>Rick & Morty Character Profiles</h1>

      <div className="character_card_container">
        <div className="search-bar">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Search for characters by name"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="pagination">
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            <BsArrowLeftShort style={{fontSize: '30px'}}/>
          </button>
          <button onClick={() => paginate(currentPage + 1)} disabled={characters.length === 0}>
            <BsArrowRightShort style={{fontSize: '30px'}}/>
          </button>
        </div>
      </div>

      <div className="character-grid">
        {(searchQuery
          ? memoizedSearchResults
          : characters
        ).map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      {loading && <p>Loading...</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default CharacterCardList;
