export interface Game {
  name: string;
  img: string;
  description?: string;
  id: number;
  is_starred?: boolean;
  providers: string[];
}

