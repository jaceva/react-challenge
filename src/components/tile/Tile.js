import React from 'react';

export const Tile = ({tile}) => {
  return (
    <>
      {Object.values(tile).map((value, index) =>
        <p key={index}>{value}</p>
      )}
    </>
  );
};