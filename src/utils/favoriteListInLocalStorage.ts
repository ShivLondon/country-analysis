const FAVORITES_COUNTRIES_KEY = 'favoriteCountries';

export const fetchFavoriteListFromLocalStorage = (): string[] => {
  const favoriteList = localStorage.getItem(FAVORITES_COUNTRIES_KEY);
  return favoriteList ? JSON.parse(favoriteList) : [];
};
export const toggleFavorite = (countryCode: string) => {
  let favoriteList = fetchFavoriteListFromLocalStorage();
  if (favoriteList.includes(countryCode)) {
    favoriteList = favoriteList.filter(code => code !== countryCode);
  } else {
    favoriteList.push(countryCode);
  }
  localStorage.setItem(FAVORITES_COUNTRIES_KEY, JSON.stringify(favoriteList));
};
