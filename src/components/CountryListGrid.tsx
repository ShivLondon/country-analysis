import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import fetchAllCountriesData from '../utils/fetchAllCountriesData';
import { Box } from '@mui/material';
import { convertCommaSeperatedCurrencyList } from '../utils/convertCommaSeperatedCurrencyList';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {
  fetchFavoriteListFromLocalStorage,
  toggleFavorite,
} from '../utils/favoriteListInLocalStorage';
import filterCountries from '../utils/filterCountries';
import { ColDef } from 'ag-grid-community';
import { Country } from '../types/country';
import FavoriteCountryCell from './FavoriteCountryCell';
import CountryDetails from './CountryDetails';
import CountryListGridColumns from './CountryListGridColumns';

const CountryListGrid = ({
  favoritesOnly,
  searchTerm,
}: {
  favoritesOnly: boolean;
  searchTerm: string;
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [, setFavorites] = useState<string[]>(
    fetchFavoriteListFromLocalStorage()
  );
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | {}>({});
  useEffect(() => {
    fetchAllCountriesData().then(setCountries).catch(console.error);
  }, []);
  const handleFavoriteToggle = (countryCode: string) => {
    toggleFavorite(countryCode);
    setFavorites(fetchFavoriteListFromLocalStorage());
  };
  const onRowClickCountryDetails = (params: any) => {
    setSelectedCountry(params.data);
    setOpen(true);
  };

  return (
    <>
      <Box className='ag-theme-alpine' sx={{ width: '100%', height: '84vh' }}>
        <AgGridReact
          rowData={filterCountries(countries, favoritesOnly)}
          columnDefs={
            CountryListGridColumns(
              handleFavoriteToggle,
              onRowClickCountryDetails
            ) as ColDef[]
          }
          pagination={true}
          paginationPageSize={20}
          quickFilterText={searchTerm}
        />
      </Box>
      <CountryDetails
        open={open}
        setOpen={setOpen}
        countryDetails={selectedCountry}
      />
    </>
  );
};
export default CountryListGrid;
