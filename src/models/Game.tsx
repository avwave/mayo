export interface Game {
  name: string;
  img: string;
  description?: string;
  id: number;
  is_starred?: boolean;
  providers: string[];
}

export interface GameProvider {
  id: string;
  name: string;
  img?: string;
  count: number;
}