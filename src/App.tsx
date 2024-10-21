import { useState } from 'react';
import Layout from './components/Layout'
import { GameContextProvider } from './components/state/GameContext'
import './index.css'
import { Game } from './models/Game';

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const [games, _setGames] = useState<Game[]>([]);

  return (
    <GameContextProvider
      value={{
        searchTerm,
        setSearchTerm,
        games,
        reload: () => { },
      }}
    >
      <Layout />
    </GameContextProvider>
  )

}

export default App
