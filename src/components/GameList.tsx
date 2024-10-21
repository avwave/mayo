import React from 'react';

interface Props {
  filterValue?: string; // TypeScript prop
}

const GameList: React.FC<Props> = ({ filterValue }) => {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world! {filterValue}
    </h1>
  );
};

export default GameList;
