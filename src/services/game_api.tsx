import { Game, GameProvider } from "../models/Game";
import { FavoritesService } from "./localFavorites";


const mock_games: Game[] = [
  {
    "id": 1,
    "name": "Sugar Rush",
    "img": "/mayo/assets/games/vs20cm.webp.png",
    "description": "Embark on a thrilling adventure with the sweetest rush in town!",
    "is_starred": false,
    "providers": [
      "EM",
      "EVO",
      "HAB"
    ]
  },
  {
    "id": 2,
    "name": "Shaolin Crew",
    "img": "/mayo/assets/games/expanse_shaolincrew.webp.png",
    "description": "Join the elite group of martial artists as they take on their most epic battles yet!",
    "is_starred": true,
    "providers": [
      "HAB",
    ]
  },
  {
    "id": 3,
    "name": "Big Bad Wolf",
    "img": "/mayo/assets/games/ptn_bbwl.webp.png",
    "description": "Don't let the cute face fool you, for beneath lies a wolf of steel and cunning.",
    "is_starred": false,
    "providers": [
      "EM", "HAB"
    ]
  },
  {
    "id": 4,
    "name": "Book of Egypt",
    "img": "/mayo/assets/games/expanse_bookofegypt.webp.png",
    "description": "Unlock the secrets of ancient Egypt with this mystical book that holds the keys to unimaginable power!",
    "is_starred": false,
    "providers": [
      "EM"
    ]
  },
  {
    "id": 5,
    "name": "Pirates Power",
    "img": "/mayo/assets/games/expanse_piratespower.webp.png",
    "description": "Set sail on the high seas with these swashbuckling pirates as they seek to conquer all in their path!",
    "is_starred": false,
    "providers": [
      "EM"
    ]
  },
  {
    "id": 6,
    "name": "Crocodile Blitz XTREME FB",
    "img": "/mayo/assets/games/ptn_gpas_cblitzfb_pop.webp.png",
    "description": "Buckle up for a wild ride as you join this fearless crocodile on its most extreme adventures yet!",
    "is_starred": false,
    "providers": [
      "EM"
    ]
  },
  {
    "id": 7,
    "name": "Anaconda Wild 2 Powerplay Jackpot",
    "img": "/mayo/assets/games/gpas_awild2pp_pop.webp.png",
    "description": "Witness the might of the anaconda in all its glory as it unleashes its fury upon the jungle, and claim your share of the jackpot!",
    "is_starred": false,
    "providers": [
      "EM"
    ]
  },
  {
    "id": 8,
    "name": "Maya Jackpot",
    "img": "/mayo/assets/games/sw_myjp.webp.png",
    "description": "Step into the world of ancient Mayan civilization where myth and magic come alive to guide you towards fortune!",
    "is_starred": false,
    "providers": [
      "EM"
    ]
  },
  {
    "id": 9,
    "name": "Beach Life",
    "img": "/mayo/assets/games/bl.webp.png",
    "description": "Escape to a tranquil paradise where the rhythm of the waves and the warmth of the sun will transport you to an idyllic life by the beach!",
    "is_starred": false,
    "providers": [
      "EM"
    ]
  },
  {
    "id": 10,
    "name": "Inca Jackpot",
    "img": "/mayo/assets/games/sw_ijp.webp.png",
    "description": "Explore the mystical realms of ancient Peru as you search for hidden treasures within the ruins of this enigmatic civilization.",
    "is_starred": false,
    "providers": [
      "EM"
    ]
  },
  {
    "id": 11,
    "name": "Pride of Persia",
    "img": "/mayo/assets/games/gpas_etpop_pop.webp.png",
    "description": "Step into the opulent world of Persia where royalty and nobility vie for dominance in a game of power, wealth, and intrigue!",
    "is_starred": false,
    "providers": [
      "EM"
    ]
  },
  {
    "id": 12,
    "name": "Azteca Bonus Lines Powerplay Jackpot",
    "img": "/mayo/assets/games/ptn_gpas_azbolipp_pop.webp.png",
    "description": "Journey through the heart of Mexico as you unlock the secrets of the ancient Aztecs and claim your reward in this thrilling jackpot adventure!",
    "is_starred": false,
    "providers": [
      "EM"
    ]
  }
]

export async function searchGames(gameName?: string, providers?: string[]): Promise<Game[]> {
  try {
    let filtered: Game[] = mock_games
    if (providers && providers.length > 0) {
      filtered
        = mock_games.filter((game: Game) => game.providers.some((provider: string) => providers.includes(provider)));
    }
    if (gameName) {
      if (filtered && filtered.length > 0) {
        filtered = filtered.filter((game: Game) => game.name.toLowerCase().includes(gameName.toLowerCase()));
      } else {
        filtered = mock_games.filter((game: Game) => game.name.toLowerCase().includes(gameName.toLowerCase()));
      }
    }

    const service = new FavoritesService()


    const mappedForFavorites = filtered.map((game: Game) => {
      const hasFavorite = service.hasFavorite(`${game.id}`)
      return {
        ...game,
        is_starred: hasFavorite
      }
    })

    return mappedForFavorites

  } catch (error) {
    console.log('Error', error);
    return []
  }
}

export async function saveFavorite(game: Game): Promise<void> {
  const service = new FavoritesService()
  service.createFavorite(`${game.id}`)
}

export async function removeFavorite(game: Game): Promise<void> {
  const service = new FavoritesService()
  service.deleteFavorite(`${game.id}`)
}

const mock_game_providers: GameProvider[] = [
  {
    'id': 'EM',
    'name': 'EM',
    'img': '/mayo/assets/gameproviders/EM.png',
    'count': 842,
  },
  {
    'id': 'EVO',
    'name': 'EVO',
    'img': '/mayo/assets/gameproviders/EVO.png',
    'count': 118,
  },
  {
    'id': 'EXPANSE',
    'name': 'EXPANSE',
    'img': '/mayo/assets/gameproviders/EXPANSE.png',
    'count': 421,
  },
  {
    'id': 'EZG',
    'name': 'EZG',
    'img': '/mayo/assets/gameproviders/EZG.png',
    'count': 913,
  },
  {
    'id': 'GAMEART',
    'name': 'GAMEART',
    'img': '/mayo/assets/gameproviders/GAMEART.png',
    'count': 63,
  },
  {
    'id': 'HAB',
    'name': 'HAB',
    'img': '/mayo/assets/gameproviders/HAB.png',
    'count': 982,
  },
  {
    'id': 'HACKSAW',
    'name': 'HACKSAW',
    'img': '/mayo/assets/gameproviders/HACKSAW.png',
    'count': 219,
  },
  {
    'id': 'INBET',
    'name': 'INBET',
    'img': '/mayo/assets/gameproviders/INBET.png',
    'count': 811,
  },
  {
    'id': 'MPLAY',
    'name': 'MPLAY',
    'img': '/mayo/assets/gameproviders/MPLAY.png',
    'count': 361,
  },
  {
    'id': 'NETENT',
    'name': 'NETENT',
    'img': '/mayo/assets/gameproviders/NETENT.png',
    'count': 940,
  },
  {
    'id': 'PGSOFT',
    'name': 'PGSOFT',
    'img': '/mayo/assets/gameproviders/PGSOFT.png',
    'count': 278,
  },
  {
    'id': 'PNG',
    'name': 'PNG',
    'img': '/mayo/assets/gameproviders/PNG.png',
    'count': 193,
  },
  {
    'id': 'PP',
    'name': 'PP',
    'img': '/mayo/assets/gameproviders/PP.png',
    'count': 823,
  },
  {
    'id': 'PRAGMATICPLAY',
    'name': 'PRAGMATICPLAY',
    'img': '/mayo/assets/gameproviders/PRAGMATICPLAY.png',
    'count': 649,
  },
  {
    'id': 'PS',
    'name': 'PS',
    'img': '/mayo/assets/gameproviders/PS.png',
    'count': 127,
  },
  {
    'id': 'PT',
    'name': 'PT',
    'img': '/mayo/assets/gameproviders/PT.png',
    'count': 819,
  },
  {
    'id': 'REDTIGER',
    'name': 'REDTIGER',
    'img': '/mayo/assets/gameproviders/REDTIGER.png',
    'count': 527,
  },
  {
    'id': 'RELAX',
    'name': 'RELAX',
    'img': '/mayo/assets/gameproviders/RELAX.png',
    'count': 394,
  },
]

export async function searchProvider(provider?: string): Promise<GameProvider[]> {
  try {
    let filtered = []
    if (provider) {
      filtered = mock_game_providers.filter((game: GameProvider) => game.name.toLowerCase().includes(provider.toLowerCase()));
    }
    else {
      filtered = mock_game_providers
    }

    return Promise.resolve(filtered);

  } catch (error) {
    console.log('Error', error);
    return []
  }
}

export async function getProvidersByIds(ids?: string[]): Promise<GameProvider[]> {
  try {

    const filtered = mock_game_providers.filter((game: GameProvider) => ids?.includes(game.id));

    return Promise.resolve(filtered);

  } catch (error) {
    console.log('Error', error);
    return []
  }
}