export class FavoritesService {
  private favoritesKey = 'favorites';
  private favorites: Set<string>;

  constructor() {
    if (!localStorage.getItem(this.favoritesKey)) {
      localStorage.setItem(this.favoritesKey, JSON.stringify([]));
      this.favorites = new Set();
    } else {
      const favoritesFromLocalStorage: string[] = JSON.parse(localStorage.getItem(this.favoritesKey)!);
      this.favorites = new Set(favoritesFromLocalStorage);
    }
  }

  // Create
  createFavorite(favorite: string) {
    if (!this.favorites.has(favorite)) {
      this.favorites.add(favorite);
      localStorage.setItem(this.favoritesKey, JSON.stringify(Array.from(this.favorites)));
    } else {
      console.log('Favorite already exists');
    }
  }

  // Read
  getAll(): string[] {
    return Array.from(this.favorites);
  }

  // Delete
  deleteFavorite(favorite: string): void {
    if (this.favorites.has(favorite)) {
      this.favorites.delete(favorite);
      localStorage.setItem(this.favoritesKey, JSON.stringify(Array.from(this.favorites)));
    }
  }
  
  // Check if favorite exists
  hasFavorite(favorite: string): boolean {
    return this.favorites.has(favorite);
  }
}