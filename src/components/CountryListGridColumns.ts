import { Country } from '../types/country';
import { convertCommaSeperatedCurrencyList } from '../utils/convertCommaSeperatedCurrencyList';
import { CountryFlagRenderer } from './CountryFlagRenderer';
import FavoriteCountryCell from './FavoriteCountryCell';

const CountryListGridColumns = (
  handleFavoriteToggle: { (countryCode: string): void },
  onRowClickCountryDetails: (params: any) => void
) => {
  return [
    {
      headerName: 'Country',
      field: 'name.common',
      filter: true,
      floatingFilter: true,
      flex: 1.5,
      onCellClicked: onRowClickCountryDetails,
    },
    {
      headerName: 'Flag',
      field: 'name.flags.svg',
      flex: 0.5,
      cellRenderer: CountryFlagRenderer,
      onCellClicked: onRowClickCountryDetails,
    },
    {
      headerName: 'Population',
      field: 'population',
      filter: true,
      floatingFilter: true,
      flex: 1,
      onCellClicked: onRowClickCountryDetails,
    },
    {
      headerName: 'Languages',
      valueGetter: (params: any) =>
        Object.values(params.data.languages || {}).join(', '),
      filter: true,
      floatingFilter: true,
      flex: 2,
      onCellClicked: onRowClickCountryDetails,
    },
    {
      headerName: 'Currencies',
      valueGetter: (params: any) =>
        convertCommaSeperatedCurrencyList(params.data.currencies || {}),
      filter: true,
      floatingFilter: true,
      flex: 2,
      onCellClicked: onRowClickCountryDetails,
    },
    {
      headerName: 'Favorite',
      cellRenderer: (params: any) =>
        FavoriteCountryCell(params, handleFavoriteToggle),
      flex: 0.5,
    },
  ];
};
export default CountryListGridColumns;
