import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { Game } from "../../models/Game";
import { searchGames } from "../../services/game_api";

export const GameContext = createContext<{
  searchTerm: string,
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
  games: Game[] | null, // Adding 'null' to denote that it can be null as well
  reload: () => void;
}>({ searchTerm: '', setSearchTerm: () => { }, games: [], reload: () => { } });


export const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [games, setGames] = useState<Game[]>([]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(
    () => {
      async function initAsync() {
        try {
          const results = await searchGames()
          setGames(results)
        } catch (error) {
          console.error(error)
          setGames([])
        }
      }
      initAsync()
    }, []
  );


  const reload = useCallback(
    async () => {
      try {
        const results = await searchGames(searchTerm)
        setGames(results)
      } catch (error) {
        console.error(error)
        setGames([])
      }
    }, [searchTerm]
  );

  return <GameContext.Provider value={{
    searchTerm,
    setSearchTerm,
    games,
    reload
  }}>
    {children}
  </GameContext.Provider>

}