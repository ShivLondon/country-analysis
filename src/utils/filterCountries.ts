import { Country } from '../types/country';
import { fetchFavoriteListFromLocalStorage } from './favoriteListInLocalStorage';

const filterCountries = (countries: Country[], favoritesOnly: boolean) => {
  const favorites = fetchFavoriteListFromLocalStorage();
  return countries.filter((country: { name: { common: string } }) => {
    if (favoritesOnly) {
      return favorites.includes(country.name.common);
    }
    return true;
  });
};

export default filterCountries;
