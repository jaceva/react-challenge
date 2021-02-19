import React from 'react';

export const Tile = ({ tile }) => {
  return (
    <div>
      {Object.values(tile).map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  );
};
