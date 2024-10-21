import React, { useContext, useState } from 'react';
import Footer from './Footer';
import GameInfo from './GameInfo';
import GameList from './GameList';
import Header from './Header';
import SearchBarComponent from './Search';
import { GameContext } from './state/GameContext';
import SubHeader from './SubHeader';
import Toolbar from './Toolbar';
import UserCard from './UserCard';

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
