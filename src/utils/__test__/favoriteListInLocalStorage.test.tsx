import {
  fetchFavoriteListFromLocalStorage,
  toggleFavorite,
} from '../favoriteListInLocalStorage';

const FAVORITES_COUNTRIES_KEY = 'favoriteCountries';

describe('favoriteListInLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('fetchFavoriteListFromLocalStorage', () => {
    it('should return an empty array if no favorites are stored', () => {
      expect(fetchFavoriteListFromLocalStorage()).toEqual([]);
    });

    it('should return the list of favorite countries from localStorage', () => {
      const favorites = ['USA', 'FRA'];
      localStorage.setItem(FAVORITES_COUNTRIES_KEY, JSON.stringify(favorites));
      expect(fetchFavoriteListFromLocalStorage()).toEqual(favorites);
    });
  });

  describe('toggleFavorite', () => {
    it('should add a country to the favorites list if it is not already in the list', () => {
      toggleFavorite('USA');
      expect(fetchFavoriteListFromLocalStorage()).toEqual(['USA']);
    });

    it('should remove a country from the favorites list if it is already in the list', () => {
      localStorage.setItem(FAVORITES_COUNTRIES_KEY, JSON.stringify(['USA']));
      toggleFavorite('USA');
      expect(fetchFavoriteListFromLocalStorage()).toEqual([]);
    });

    it('should not remove other countries when toggling a favorite', () => {
      localStorage.setItem(
        FAVORITES_COUNTRIES_KEY,
        JSON.stringify(['USA', 'FRA'])
      );
      toggleFavorite('USA');
      expect(fetchFavoriteListFromLocalStorage()).toEqual(['FRA']);
    });

    it('should handle multiple additions and removals', () => {
      toggleFavorite('USA');
      toggleFavorite('FRA');
      expect(fetchFavoriteListFromLocalStorage()).toEqual(['USA', 'FRA']);

      toggleFavorite('USA');
      expect(fetchFavoriteListFromLocalStorage()).toEqual(['FRA']);

      toggleFavorite('FRA');
      expect(fetchFavoriteListFromLocalStorage()).toEqual([]);
    });
  });
});
