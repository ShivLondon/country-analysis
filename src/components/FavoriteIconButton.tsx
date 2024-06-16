export default function FavoriteIconButton({
  handleFavoriteToggle,
  row,
  isFavorite,
}: {
  readonly handleFavoriteToggle: (name: string) => void;
  readonly row: any;
  readonly isFavorite: boolean;
}) {
  return (
    <span
      onClick={() => {
        handleFavoriteToggle(row.data.name.common);
      }}
      onKeyDown={() => {}}
      role='button'
      tabIndex={0}
      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      style={{ cursor: 'pointer' }}>
      {isFavorite ? '💙' : '♡'}
    </span>
  );
}
