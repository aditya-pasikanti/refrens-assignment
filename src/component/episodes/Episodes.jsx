

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Episodes.css'

const Episodes = ({ episodeURLs }) => {
  const [episodesData, setEpisodesData] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const episodeDataArray = await Promise.all(
          episodeURLs.map((url) => axios.get(url).then((response) => response.data))
        );

        setEpisodesData(episodeDataArray);
      } catch (error) {
        console.error('Error fetching episode data:', error);
      }
    };

    fetchEpisodes();
  }, [episodeURLs]);

  useEffect(() => {
    // Set the initially selected episode when data is available
    if (episodesData.length > 0) {
      setSelectedEpisode(episodesData[0]);
    }
  }, [episodesData]);

  return (
    <div className="episode-list">
      <p>Episodes - </p>
      <div className="dropdown">
        <button className="dropdown-button">
          {selectedEpisode ? (
            <>
              {selectedEpisode.name} - {selectedEpisode.air_date}
            </>
          ) : (
            'No Episodes'
          )}
        </button>
        <div className="dropdown-content">
          {episodesData.slice(1).map((item, index) => (
            <div className="dropdown-item">
              {item.name} - {item.air_date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Episodes;
