import { Game } from "../models/Game";


const mock_games: Game[] = [
  {
    "id": 1,
    "name": "Sugar Rush",
    "img": "mayo/assets/games/vs20cm.webp.png",
    "description": "Embark on a thrilling adventure with the sweetest rush in town!",
    "is_starred": false,
    "providers": [
      "gameart",
      "gamesglobal",
      "habanero"
    ]
  },
  {
    "id": 2,
    "name": "Shaolin Crew",
    "img": "mayo/assets/games/expanse_shaolincrew.webp.png",
    "description": "Join the elite group of martial artists as they take on their most epic battles yet!",
    "is_starred": true,
    "providers": [
      "gameart"
    ]
  },
  {
    "id": 3,
    "name": "Big Bad Wolf",
    "img": "mayo/assets/games/ptn_bbwl.webp.png",
    "description": "Don't let the cute face fool you, for beneath lies a wolf of steel and cunning.",
    "is_starred": false,
    "providers": [
      "gameart"
    ]
  },
  {
    "id": 4,
    "name": "Book of Egypt",
    "img": "mayo/assets/games/expanse_bookofegypt.webp.png",
    "description": "Unlock the secrets of ancient Egypt with this mystical book that holds the keys to unimaginable power!",
    "is_starred": false,
    "providers": [
      "gameart"
    ]
  },
  {
    "id": 5,
    "name": "Pirates Power",
    "img": "mayo/assets/games/expanse_piratespower.webp.png",
    "description": "Set sail on the high seas with these swashbuckling pirates as they seek to conquer all in their path!",
    "is_starred": false,
    "providers": [
      "gameart"
    ]
  },
  {
    "id": 6,
    "name": "Crocodile Blitz XTREME FB",
    "img": "mayo/assets/games/ptn_gpas_cblitzfb_pop.webp.png",
    "description": "Buckle up for a wild ride as you join this fearless crocodile on its most extreme adventures yet!",
    "is_starred": false,
    "providers": [
      "gameart"
    ]
  },
  {
    "id": 7,
    "name": "Anaconda Wild 2 Powerplay Jackpot",
    "img": "mayo/assets/games/gpas_awild2pp_pop.webp.png",
    "description": "Witness the might of the anaconda in all its glory as it unleashes its fury upon the jungle, and claim your share of the jackpot!",
    "is_starred": false,
    "providers": [
      "gameart"
    ]
  },
  {
    "id": 8,
    "name": "Maya Jackpot",
    "img": "mayo/assets/games/sw_myjp.webp.png",
    "description": "Step into the world of ancient Mayan civilization where myth and magic come alive to guide you towards fortune!",
    "is_starred": false,
    "providers": [
      "gameart"
    ]
  },
  {
    "id": 9,
    "name": "Beach Life",
    "img": "mayo/assets/games/bl.webp.png",
    "description": "Escape to a tranquil paradise where the rhythm of the waves and the warmth of the sun will transport you to an idyllic life by the beach!",
    "is_starred": false,
    "providers": [
      "gameart"
    ]
  },
  {
    "id": 10,
    "name": "Inca Jackpot",
    "img": "mayo/assets/games/sw_ijp.webp.png",
    "description": "Explore the mystical realms of ancient Peru as you search for hidden treasures within the ruins of this enigmatic civilization.",
    "is_starred": false,
    "providers": [
      "gameart"
    ]
  },
  {
    "id": 11,
    "name": "Pride of Persia",
    "img": "mayo/assets/games/gpas_etpop_pop.webp.png",
    "description": "Step into the opulent world of Persia where royalty and nobility vie for dominance in a game of power, wealth, and intrigue!",
    "is_starred": false,
    "providers": [
      "gameart"
    ]
  },
  {
    "id": 12,
    "name": "Azteca Bonus Lines Powerplay Jackpot",
    "img": "mayo/assets/games/ptn_gpas_azbolipp_pop.webp.png",
    "description": "Journey through the heart of Mexico as you unlock the secrets of the ancient Aztecs and claim your reward in this thrilling jackpot adventure!",
    "is_starred": false,
    "providers": [
      "gameart"
    ]
  }
]

export async function searchGames(gameName?: string): Promise<Game[]> {
  try {
    if (gameName) {
      const filtered = mock_games.filter((game: Game) => game.name.toLowerCase().includes(gameName.toLowerCase()));
      return filtered
    }
    else {
      return mock_games;
    }
  } catch (error) {
    console.log('Error', error);
    return []
  } 
}