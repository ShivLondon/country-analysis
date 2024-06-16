import { useState } from 'react';
import CountryListGrid from './components/CountryListGrid';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import ExternalFilter from './components/ExternalFilter';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
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
      <Box
        sx={{
          paddingLeft: '20px',
          marginBottom: '10px',
        }}>
        <ExternalFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FormControlLabel
          label='Favorites Only'
          control={<Checkbox onChange={handleFavoriteValueChange} />}
        />
        <CountryListGrid
          favoritesOnly={favoritesOnly}
          searchTerm={searchTerm}
        />
      </Box>
    </Box>
  );
};

export default App;
