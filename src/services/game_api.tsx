import { Game } from "../models/Game";

export async function searchGames(gameName: string): Promise<Game[]> {
  try {
    const response = await fetch('./mock_data.json')
    const json = await response.json()
    const filtered = json.filter((game: Game) => game.name.toLowerCase().includes(gameName.toLowerCase()));
    return filtered
  } catch (error) {
    console.log('Error', error);
    return []
  } 
}