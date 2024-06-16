// filterCountries.test.ts
import filterCountries from '../filterCountries';
import { fetchFavoriteListFromLocalStorage } from '../favoriteListInLocalStorage';
import { Country } from '../../types/country';

// Mock the fetchFavoriteListFromLocalStorage function
jest.mock('../favoriteListInLocalStorage', () => ({
  fetchFavoriteListFromLocalStorage: jest.fn(),
}));

describe('filterCountries', () => {
  const countries: Country[] = [
    {
      name: { common: 'France' },
      population: 67081000,
      region: 'Europe',
    },
    {
      name: { common: 'Germany' },
      population: 83155000,
      region: 'Europe',
    },
    {
      name: { common: 'Brazil' },
      population: 211000000,
      region: 'Americas',
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return all countries if favoritesOnly is false', () => {
    (fetchFavoriteListFromLocalStorage as jest.Mock).mockReturnValue([
      'France',
      'Germany',
    ]);
    const result = filterCountries(countries, false);
    expect(result).toEqual(countries);
  });

  it('should return only favorite countries if favoritesOnly is true', () => {
    (fetchFavoriteListFromLocalStorage as jest.Mock).mockReturnValue([
      'France',
      'Germany',
    ]);
    const result = filterCountries(countries, true);
    expect(result).toEqual([
      {
        name: { common: 'France' },
        population: 67081000,
        region: 'Europe',
      },
      {
        name: { common: 'Germany' },
        population: 83155000,
        region: 'Europe',
      },
    ]);
  });

  it('should return an empty array if favoritesOnly is true and no countries are favorites', () => {
    (fetchFavoriteListFromLocalStorage as jest.Mock).mockReturnValue([]);
    const result = filterCountries(countries, true);
    expect(result).toEqual([]);
  });

  it('should return only the countries that are in the favorites list', () => {
    (fetchFavoriteListFromLocalStorage as jest.Mock).mockReturnValue([
      'Brazil',
    ]);
    const result = filterCountries(countries, true);
    expect(result).toEqual([
      {
        name: { common: 'Brazil' },
        population: 211000000,
        region: 'Americas',
      },
    ]);
  });
});
