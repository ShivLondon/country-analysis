import { Box } from '@mui/material';

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
    <Box
      onClick={() => {
        handleFavoriteToggle(row.data.name.common);
      }}
      onKeyDown={() => {}}
      role='button'
      tabIndex={0}
      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      sx={{ cursor: 'pointer' }}>
      {isFavorite ? '💙' : '♡'}
    </Box>
  );
}
