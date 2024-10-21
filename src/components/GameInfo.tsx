import { useCallback, useContext, useEffect, useState } from "react";
import { Game, Provider } from "../models/Game";
import GameIcon from "./GameIcon";
import { GameContext } from "./state/GameContext";
import { getProvidersByIds } from "../services/game_api";
import ProviderCard from "./ProviderCard";

interface GameIconProps {
  game: Game;
}

const GameInfo: React.FC<GameIconProps> = ({ game }) => {
  const { setActiveGame, activeGame } = useContext(GameContext);

  const [providers, setProviders] = useState<Provider[]>([]);


  const fetchProvidersForGame = useCallback(
    async () => {
      const results = await getProvidersByIds(game.providers)
      setProviders(results);
      return null
    }, [setProviders, game.providers]
  );

  useEffect(
    () => {
      if (activeGame) {
        fetchProvidersForGame();
      }
    }, [activeGame, fetchProvidersForGame]
  );

  return (
    <div className="game-info flex flex-col gap-2">
      <button
        className="p-2 w-20 border border-collapse border-gray-400 rounded"
        onClick={() => { setActiveGame(null) }}>
        <span className="text-sm text-secondary game-info__title"> {'<'} Back</span>
      </button>
      <GameIcon game={game} />

      <span className="text-sm pt-5">Proveedores de juego</span>

      <div className="grid grid-flow-row grid-cols-3 gap-2">
        {providers.map(provider => (
          <ProviderCard key={provider.id} provider={provider} />
         ))}
      </div>
    </div>
  );
};


export default GameInfo