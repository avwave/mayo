import Layout from './components/Layout';
import { GameContextProvider } from './components/state/GameContext';
import './index.css';

function App() {
  return (
    <GameContextProvider
    >
      <Layout />
    </GameContextProvider>
  )

}

export default App
