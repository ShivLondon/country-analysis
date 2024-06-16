import { fetchFavoriteListFromLocalStorage } from '../utils/favoriteListInLocalStorage';
import FavoriteIconButton from './FavoriteIconButton';

const FavoriteCountryCell = (
  row: any,
  handleFavoriteToggle: { (name: string): void; (name: string): void }
) => {
  return fetchFavoriteListFromLocalStorage().includes(row.data.name.common) ? (
    <FavoriteIconButton
      handleFavoriteToggle={handleFavoriteToggle}
      row={row}
      isFavorite={true}
    />
  ) : (
    <FavoriteIconButton
      handleFavoriteToggle={handleFavoriteToggle}
      row={row}
      isFavorite={false}
    />
  );
};

export default FavoriteCountryCell;
