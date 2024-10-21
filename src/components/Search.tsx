import { useContext, useState } from "react";
import SearchProviderDrawer from "./SearchProviderDrawer";
import { GameContext } from "./state/GameContext";

type Props = {
  onSearchChange(value: string): void;
  searchValue: string;
};

const SearchBarComponent: React.FC<Props> = ({ onSearchChange, searchValue }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { filterProviders } = useContext(GameContext)

  return (
    <div className="py-[15px] relative flex flex-row gap-2 w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="focus:shadow-md focus:outline-none ring-offset-2 border border-primary rounded-md focus:ring-2 focus:ring-primary py-2 pl-10 w-full "
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.875 2.75C7.60087 2.75 9 4.14911 9 5.875M9.41175 9.40931L12.125 12.125M10.875 5.875C10.875 8.63644 8.63644 10.875 5.875 10.875C3.11357 10.875 0.875 8.63644 0.875 5.875C0.875 3.11357 3.11357 0.875 5.875 0.875C8.63644 0.875 10.875 3.11357 10.875 5.875Z" stroke="#888888" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>

      <button
        onClick={() => {
          setDrawerOpen(true)
        }}
        className={`
          w-11 h-10 border rounded flex items-center justify-center
          ${filterProviders.length > 0 ? 'border-primary' : 'border-secondary'}
      `}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_460)">
            <path d="M16.5098 16.0154C15.8375 16.6454 14.9335 17.0312 13.9395 17.0312C11.863 17.0312 10.1797 15.3479 10.1797 13.2715C10.1797 11.195 11.863 9.51172 13.9395 9.51172C16.0159 9.51172 17.6992 11.195 17.6992 13.2715C17.6992 13.7337 17.6158 14.1763 17.4633 14.5853L19.4128 15.9104C19.8053 16.1771 19.9072 16.7116 19.6404 17.1042C19.3736 17.4967 18.8391 17.5986 18.4466 17.3318L16.5098 16.0154ZM2.64062 2.87109C2.16602 2.87109 1.78125 2.48633 1.78125 2.01172C1.78125 1.53711 2.16602 1.15234 2.64062 1.15234H18.9297C19.4043 1.15234 19.7891 1.53711 19.7891 2.01172C19.7891 2.48633 19.4043 2.87109 18.9297 2.87109H2.64062ZM2.64062 12.6074C2.16602 12.6074 1.78125 12.2227 1.78125 11.748C1.78125 11.2734 2.16602 10.8887 2.64062 10.8887H7.54297C8.01758 10.8887 8.40234 11.2734 8.40234 11.748C8.40234 12.2227 8.01758 12.6074 7.54297 12.6074H2.64062ZM2.64062 7.74414C2.16602 7.74414 1.78125 7.35938 1.78125 6.88477C1.78125 6.41016 2.16602 6.02539 2.64062 6.02539H18.9297C19.4043 6.02539 19.7891 6.41016 19.7891 6.88477C19.7891 7.35938 19.4043 7.74414 18.9297 7.74414H2.64062ZM2.64062 17.4902C2.16602 17.4902 1.78125 17.1055 1.78125 16.6309C1.78125 16.1562 2.16602 15.7715 2.64062 15.7715H7.54297C8.01758 15.7715 8.40234 16.1562 8.40234 16.6309C8.40234 17.1055 8.01758 17.4902 7.54297 17.4902H2.64062ZM13.9395 15.3125C15.0667 15.3125 15.9805 14.3987 15.9805 13.2715C15.9805 12.1443 15.0667 11.2305 13.9395 11.2305C12.8122 11.2305 11.8984 12.1443 11.8984 13.2715C11.8984 14.3987 12.8122 15.3125 13.9395 15.3125Z" fill="#888888" />
          </g>
          <defs>
            <clipPath id="clip0_1_460">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>


      </button>
      <SearchProviderDrawer isOpen={drawerOpen} setIsOpen={setDrawerOpen} />

    </div>
  );
};

export default SearchBarComponent;
