import React, { useCallback, useEffect, useState } from 'react';
import { Game } from '../models/Game';
import { searchGames } from '../services/game_api';
import GameIcon from './GameIcon';

interface Props {
  filterValue?: string; // TypeScript prop
}

const GameList: React.FC<Props> = ({ filterValue }) => {

  const [games, setGames] = useState<Game[]>([]);

  const fetchGames = useCallback(
    async () => {
      const data: Game[] = await searchGames(filterValue)
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
    <div className='w-full overflow-y-auto overflow-x-hidden'>
      <div className="grid grid-flow-row gap-2 grid-cols-3">
        {games.map((game) => (
          <GameIcon key={game.id} game={game}/>
        ))}
      </div>
      
    </div>
  );
};

export default GameList;
