import CountryListGrid from './components/CountryListGrid';
import { Box, Typography } from '@mui/material';

const App = () => {
  return (
    <Box>
      <Typography variant='h2' component='h2' align='center' color={'blue'}>
        Country Analysis
      </Typography>
      <CountryListGrid />
    </Box>
  );
};

export default App;
