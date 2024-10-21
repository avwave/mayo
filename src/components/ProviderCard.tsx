import { GameProvider } from "../models/Game";

type Props = {
  provider: GameProvider;
};

const ProviderCard: React.FC<Props> = ({ provider }) => {
  // Your component logic goes here, using `provider` as needed

  return (
    <div className="grid-cols-1  bg-stone-100 p-1 flex flex-col items-center justify-center">
      <img className="h-[50px] object-contain bg-stone-200" src={provider.img} alt={provider.name} />
      <span className="text-sm">{provider.name}</span>
      <span className="text-xs text-secondary">{provider.count} juegos</span>
    </div>
  );
};


export default ProviderCard;