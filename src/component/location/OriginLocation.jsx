import React from 'react';

const OriginLocation = ({ origin, currentLocation }) => {
  return (
    <div className="location-info">
      <div>
        <p>Origin Location - {origin.name}</p>
        {/* Add more origin location details as needed */}
      </div>
      <div>
        <p>Current Location - {currentLocation.name}</p>
        {currentLocation.dimension && (
          <p>Dimension: {currentLocation.dimension}</p>
        )}
        {currentLocation.residents && (
          <p>Residents: {currentLocation.residents.length}</p>
        )}
        {/* Add more current location details as needed */}
      </div>
    </div>
  );
};

export default OriginLocation;
