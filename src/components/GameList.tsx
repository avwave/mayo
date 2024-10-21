import { useContext } from 'react';
import GameIcon from './GameIcon';
import { GameContext } from './state/GameContext';


const GameList = () => {
  const { games } = useContext(GameContext)


  return (
    <div className='w-full overflow-y-auto overflow-x-hidden'>
      <div className="grid grid-flow-row gap-2 grid-cols-3">
        {games?.map((game) => (
          <GameIcon key={game.id} game={game} />
        ))}
      </div>

    </div>
  );
};

export default GameList;
