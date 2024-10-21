import React, { useState } from 'react';
import GameList from './GameList';
import Header from './Header';
import UserCard from './UserCard';
import SubHeader from './SubHeader';
import Toolbar from './Toolbar';
import SearchBarComponent from './Search';

const Layout: React.FC = () => {
  const [filterValue, setFilterValue] = useState('');
  const [activeTab, setActiveTab] = useState(-1);
  return (
    <div>
      <Header />
      <main className="relative p-[15px]">
        <UserCard />

        <SubHeader username='artxxxipa' />
        <Toolbar onTabChange={(tab) => {
          setActiveTab(tab);

        }} />

        {activeTab === 0 && (
          <SearchBarComponent
            onSearchChange={setFilterValue}
            searchValue={filterValue} />
        )}
        {/* <GameList filterValue={filterValue} /> */}
        {/* <GameList filterValue={filterValue}></GameList> */}
      </main>
    </div>
  );
};

export default Layout;
