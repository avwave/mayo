import React, { useContext, useState } from 'react';
import GameList from './GameList';
import Header from './Header';
import UserCard from './UserCard';
import SubHeader from './SubHeader';
import Toolbar from './Toolbar';
import SearchBarComponent from './Search';
import Footer from './Footer';
import { GameContext } from './state/GameContext';
import GameInfo from './GameInfo';

const Layout: React.FC = () => {
  const [activeTab, setActiveTab] = useState(-1);

  const { searchTerm, setSearchTerm, activeGame } = useContext(GameContext)

  return (
    <div>
      <Header />
      <main className="relative p-[15px] mb-[60px]">
        <UserCard />

        <SubHeader username='artxxxipa' />
        <Toolbar onTabChange={(tab) => {
          setActiveTab(tab);

        }} />

        {activeTab === 0 && (
          <SearchBarComponent
            onSearchChange={setSearchTerm}
            searchValue={searchTerm} />
        )}
        {activeGame ?
          <GameInfo game={activeGame} />
          : <GameList />}

      </main>
      <Footer
        onTabChange={(tab) => {
          console.log('onFooterTabChange', tab);
        }}
      />
    </div>
  );
};

export default Layout;
