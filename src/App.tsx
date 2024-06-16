import { useState } from 'react';
import CountryListGrid from './components/CountryListGrid';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import ExternalFilter from './components/ExternalFilter';

const App = () => {
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
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
        style={{
          paddingLeft: '20px',
          marginBottom: '10px',
        }}>
        <ExternalFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FormControlLabel
          label='Favorites Only'
          control={<Checkbox onChange={handleFavoriteValueChange} />}
        />
      </Box>
      <CountryListGrid favoritesOnly={favoritesOnly} searchTerm={searchTerm} />
    </Box>
  );
};

export default App;
