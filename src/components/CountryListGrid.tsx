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

const CountryListGrid = ({
  favoritesOnly,
  searchTerm,
}: {
  favoritesOnly: boolean;
  searchTerm: string;
}) => {
  const [countries, setCountries] = useState<any[]>([]);
  const [, setFavorites] = useState<string[]>(
    fetchFavoriteListFromLocalStorage()
  );
  useEffect(() => {
    fetchAllCountriesData().then(setCountries).catch(console.error);
  }, []);
  const handleFavoriteToggle = (countryCode: string) => {
    toggleFavorite(countryCode);
    setFavorites(fetchFavoriteListFromLocalStorage());
  };
  const columns = [
    {
      headerName: 'Country',
      field: 'name.common',
      filter: true,
      floatingFilter: true,
      flex: 2,
    },
    {
      headerName: 'Population',
      field: 'population',
      filter: true,
      floatingFilter: true,
      flex: 1,
    },
    {
      headerName: 'Languages',
      valueGetter: (params: any) =>
        Object.values(params.data.languages || {}).join(', '),
      filter: true,
      floatingFilter: true,
      flex: 2,
    },
    {
      headerName: 'Currencies',
      valueGetter: (params: any) =>
        convertCommaSeperatedCurrencyList(params.data.currencies || {}),
      filter: true,
      floatingFilter: true,
      flex: 2,
    },
    {
      headerName: 'Favorite',
      cellRenderer: (params: any) =>
        FavoriteCountryCell(params, handleFavoriteToggle),
      flex: 0.5,
    },
  ];

  return (
    <Box className='ag-theme-alpine' style={{ width: '100%', height: '84vh' }}>
      <AgGridReact
        rowData={filterCountries(countries, favoritesOnly)}
        columnDefs={columns as ColDef<Country, any>[]}
        pagination={true}
        paginationPageSize={20}
        quickFilterText={searchTerm}
      />
    </Box>
  );
};
export default CountryListGrid;
