import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import fetchAllCountriesData from '../utils/fetchAllCountriesData';
import { Box } from '@mui/material';
import { convertCommaSeperatedCurrencyList } from '../utils/convertCommaSeperatedCurrencyList';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const CountryListGrid = () => {
  const [countries, setCountries] = useState<any[]>([]);
  useEffect(() => {
    fetchAllCountriesData().then(setCountries).catch(console.error);
  }, []);
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
      flex: 0.5,
    },
  ];

  return (
    <Box className='ag-theme-alpine' style={{ width: '100%', height: '90vh' }}>
      <AgGridReact
        rowData={countries}
        columnDefs={columns}
        pagination={true}
        paginationPageSize={20}
      />
    </Box>
  );
};
export default CountryListGrid;
