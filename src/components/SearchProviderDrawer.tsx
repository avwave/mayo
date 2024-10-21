import React, { useCallback, useContext, useEffect, useState } from 'react';
import { GameContext } from './state/GameContext';
import { GameProvider, Provider } from '../models/Game';
import { searchProvider } from '../services/game_api';

interface Props {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
}

const SearchProviderDrawer: React.FC<Props> = ({ isOpen, setIsOpen }) => {

  const { filterProviders, setFilterProviders } = useContext(GameContext);


  const [providers, setProviders] = useState<GameProvider[]>([]);

  const [loading, setLoading] = useState(false);

  const fetchProviders = useCallback(
    async () => {
      try {
        setLoading(true)
        const allProviders = await searchProvider()
        setProviders(allProviders)

      } catch (error) {

      } finally {
        setLoading(false);
      }
      return null
    }, []
  );


  useEffect(
    () => {
      fetchProviders();
    }, [fetchProviders]
  );

  const toggleFilterProvider = useCallback(
    (provider:GameProvider) => {
      if (filterProviders.includes(`${provider.id}`)) {
        setFilterProviders([])
      } else {
      setFilterProviders([provider.id])
      }
      
      return null
    }, []
  );
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main
      className={`
        search-provider
        fixed
        overflow-hidden
        z-30
        inset-0
        transform ease-in-out
        ${isOpen
          ? " transition-opacity opacity-100 duration-500 translate-y-0  "
          : " transition-all delay-500 opacity-0 translate-y-full"}
      `
      }
    >
      <section
        className={
          " h-[300px] max-h-lg bottom-0 absolute bg-white w-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-y-0 " : " translate-y-full ")
        }
      >
        <div className='grid grid-flow-row grid-cols-2 gap-2 p-2 overflow-y-auto'>
          {providers.map(provider => (
            <img
              key={provider.id}
              src={provider.img}
              alt={provider.name}
              className={`
                w-full 
                h-[50px] 
                pointer 
                object-contain 
                p-1 
                bg-stone-300
                ${filterProviders.includes(`${provider.id}`) ? 'border border-primary' : ''}`}
              onClick={() => toggleFilterProvider(provider)}
            />
          ))
          }
        </div>
      </section>
      <section
        className="
        h-screen w-full cursor-pointer
        bg-gray-900
        bg-opacity-50
        "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default SearchProviderDrawer;
