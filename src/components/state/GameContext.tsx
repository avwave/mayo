import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { Game } from "../../models/Game";
import { searchGames } from "../../services/game_api";

export const GameContext = createContext<{
  searchTerm: string,
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
  filterProviders: string[],
  setFilterProviders: React.Dispatch<React.SetStateAction<string[]>>,
  games: Game[] | null, // Adding 'null' to denote that it can be null as well
  reload: () => void;
  activeGame: Game | null,
  setActiveGame: React.Dispatch<React.SetStateAction<Game | null>>,

}>({ searchTerm: '', setSearchTerm: () => { }, games: [], reload: () => { }, activeGame: null, setActiveGame: () => { }, filterProviders: [], setFilterProviders: () => { } });


export const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [games, setGames] = useState<Game[]>([]);

  const [activeGame, setActiveGame] = useState<Game | null>(null);

  const [filterProviders, setFilterProviders] = useState<string[]>([]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(
    () => {
      async function initAsync() {
        try {
          const results = await searchGames('', [])
          setGames(results)
          setActiveGame(null)
        } catch (error) {
          console.error(error)
          setGames([])
        }
      }
      initAsync()
    }, []
  );


  const doSearchGames = useCallback(
    async (term: string) => {
      try {
        const results = await searchGames(term, filterProviders)
        setGames(results)
        setActiveGame(null)
      } catch (error) {
        console.error(error)
        setGames([])
      }
    }, [setGames, filterProviders]
  );

  useEffect(
    () => {
      doSearchGames(searchTerm)
    }, [searchTerm, doSearchGames]
  );


  const reload = useCallback(
    async () => {
      try {
        const results = await searchGames(searchTerm)
        setGames(results)
        setActiveGame(null)
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
    reload,
    activeGame,
    setActiveGame,
    setFilterProviders,
    filterProviders
  }}>
    {children}
  </GameContext.Provider>

}