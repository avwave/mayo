import React, { useContext } from 'react';
import { Game } from '../models/Game';
import { GameContext } from './state/GameContext';
import { removeFavorite, saveFavorite } from '../services/game_api';


interface Props {
  game: Game;
}

const GameIcon: React.FC<Props> = ({ game }) => {

  const { reload, setActiveGame } = useContext(GameContext)
  return (
    <div
      className="game-container 
      grid-cols-1 
      relative 
      [clipPath:content-box]
      max-w-[100px]
      aspect-square
      "
      onClick={() => setActiveGame(game)}
    >
      <div
        className=" absolute 
      bg-black 
      bg-opacity-50 
      h-[100px] w-[100px]
      rotate-45
      translate-x-[80px]
      -translate-y-[50px]
      "
      />
      <button className='absolute right-[3px] top-[3px]'
        onClick={async () => {
          if (game.is_starred) {
            await removeFavorite(game);
          } else {
            await saveFavorite(game);
          }
          reload()
        }}
      >
        {game.is_starred ? (
          <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_100)">
              <g clipPath="url(#clip1_1_100)">
                <path d="M15.2784 5.60319C15.624 5.65754 15.7968 5.79643 15.7968 6.01986C15.7968 6.15271 15.7166 6.29764 15.5561 6.45464L12.1962 9.66116L12.9922 14.1901C12.9984 14.2324 13.0015 14.2928 13.0015 14.3713C13.0015 14.4981 12.9691 14.6053 12.9043 14.6928C12.8395 14.7804 12.7454 14.8242 12.622 14.8242C12.5048 14.8242 12.3814 14.788 12.2518 14.7155L8.0959 12.5778L3.94001 14.7155C3.80426 14.788 3.68085 14.8242 3.56978 14.8242C3.4402 14.8242 3.34301 14.7804 3.27822 14.6928C3.21343 14.6053 3.18103 14.4981 3.18103 14.3713C3.18103 14.3351 3.1872 14.2747 3.19955 14.1901L3.99555 9.66116L0.626416 6.45464C0.472152 6.2916 0.39502 6.14667 0.39502 6.01986C0.39502 5.79643 0.567796 5.65754 0.913348 5.60319L5.55979 4.94196L7.64236 0.820595C7.7596 0.573011 7.91078 0.449219 8.0959 0.449219C8.28101 0.449219 8.43219 0.573011 8.54943 0.820595L10.632 4.94196L15.2784 5.60319Z" fill="#FFD703" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1_100">
                <rect width="15.4018" height="14.375" fill="white" transform="translate(0.730957 0.445312)" />
              </clipPath>
              <clipPath id="clip1_1_100">
                <rect width="15.4018" height="14.375" fill="white" transform="translate(0.730957 0.445312)" />
              </clipPath>
            </defs>
          </svg>

        ) : (
          <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_88)">
              <path d="M11.821 13.2466L11.1545 9.43324L13.9868 6.74302L10.0808 6.18143L8.33149 2.72129L6.58213 6.18143L2.67616 6.74302L5.50845 9.43324L4.83278 13.2466L8.33149 11.4441L11.821 13.2466ZM15.514 5.78288C15.8596 5.83723 16.0324 5.97612 16.0324 6.19955C16.0324 6.3324 15.9522 6.47732 15.7917 6.63433L12.4318 9.84084L13.2278 14.3698C13.234 14.4121 13.2371 14.4725 13.2371 14.551C13.2371 14.8529 13.1106 15.0039 12.8576 15.0039C12.7404 15.0039 12.617 14.9676 12.4874 14.8952L8.33149 12.7575L4.17561 14.8952C4.03986 14.9676 3.91645 15.0039 3.80538 15.0039C3.67579 15.0039 3.57861 14.9601 3.51382 14.8725C3.44902 14.785 3.41663 14.6778 3.41663 14.551C3.41663 14.5147 3.4228 14.4544 3.43514 14.3698L4.23115 9.84084L0.862012 6.63433C0.707747 6.47129 0.630615 6.32636 0.630615 6.19955C0.630615 5.97612 0.803391 5.83723 1.14894 5.78288L5.79539 5.12165L7.87795 1.00028C7.9952 0.752698 8.14637 0.628906 8.33149 0.628906C8.51661 0.628906 8.66779 0.752698 8.78503 1.00028L10.8676 5.12165L15.514 5.78288Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_1_88">
                <rect width="15.4018" height="14.375" fill="white" transform="translate(0.630859 0.625)" />
              </clipPath>
            </defs>
          </svg>

        )}
      </button>
      <img src={`${game.img}`} alt={game.name} />
    </div>
  );
};

export default GameIcon;
