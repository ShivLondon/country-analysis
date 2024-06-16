import { useState } from 'react';
import CountryListGrid from './components/CountryListGrid';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';

const App = () => {
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const handleFavoriteValueChange = (event: {
    target: { checked: boolean };
  }) => {
    setFavoritesOnly(event.target.checked);
  };
  return (
    <Box>
      <Typography variant='h2' component='h2' align='center' color={'blue'}>
        Country Analysis
      </Typography>
      <Box style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <FormControlLabel
          label='Favorites Only'
          control={<Checkbox onChange={handleFavoriteValueChange} />}
        />
      </Box>
      <CountryListGrid favoritesOnly={favoritesOnly} />
    </Box>
  );
};

export default App;
