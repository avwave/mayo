import React, { useCallback, useEffect, useState } from 'react';
import { Game } from '../models/Game';
import { searchGames } from '../services/game_api';

interface Props {
  filterValue?: string; // TypeScript prop
}

const GameList: React.FC<Props> = ({ filterValue }) => {

  const [games, setGames] = useState<Game[]>([]);

  const fetchGames = useCallback(
    async () => {
      const data:Game[] = await searchGames(filterValue)
      setGames(data);
      return null
    }, [filterValue]
  );

  useEffect(
    () => {
      fetchGames();
    }, [filterValue, fetchGames]
  );


  return (
    <pre>
      <code>
        {JSON.stringify(games, undefined, 2)}
      </code>
    </pre>
  );
};

export default GameList;
