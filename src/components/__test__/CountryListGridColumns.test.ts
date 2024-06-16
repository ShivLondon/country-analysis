import CountryListGridColumns from '../CountryListGridColumns';
import { convertCommaSeperatedCurrencyList } from '../../utils/convertCommaSeperatedCurrencyList';
import { CountryFlagRenderer } from '../CountryFlagRenderer';
import FavoriteCountryCell from '../FavoriteCountryCell';

jest.mock('../../utils/convertCommaSeperatedCurrencyList', () => ({
  convertCommaSeperatedCurrencyList: jest.fn(),
}));

jest.mock('../CountryFlagRenderer', () => jest.fn());
jest.mock('../FavoriteCountryCell', () => jest.fn());

describe('CountryListGridColumns', () => {
  const handleFavoriteToggleMock = jest.fn();
  const onRowClickCountryDetailsMock = jest.fn();

  it('should return the correct column definitions', () => {
    const columns = CountryListGridColumns(
      handleFavoriteToggleMock,
      onRowClickCountryDetailsMock
    );

    expect(columns).toHaveLength(6);

    const [
      countryCol,
      flagCol,
      populationCol,
      languagesCol,
      currenciesCol,
      favoriteCol,
    ] = columns;

    expect(countryCol.headerName).toBe('Country');
    expect(countryCol.field).toBe('name.common');
    expect(countryCol.filter).toBe(true);
    expect(countryCol.floatingFilter).toBe(true);
    expect(countryCol.flex).toBe(1.5);
    expect(countryCol.onCellClicked).toBe(onRowClickCountryDetailsMock);

    expect(flagCol.headerName).toBe('Flag');
    expect(flagCol.field).toBe('name.flags.svg');
    expect(flagCol.flex).toBe(0.5);
    expect(flagCol.cellRenderer).toBe(CountryFlagRenderer);
    expect(flagCol.onCellClicked).toBe(onRowClickCountryDetailsMock);

    expect(populationCol.headerName).toBe('Population');
    expect(populationCol.field).toBe('population');
    expect(populationCol.filter).toBe(true);
    expect(populationCol.floatingFilter).toBe(true);
    expect(languagesCol.headerName).toBe('Languages');
    const mockParamsLanguages = {
      data: { languages: { eng: 'English', fra: 'French' } },
    };
    expect(
      languagesCol.valueGetter && languagesCol.valueGetter(mockParamsLanguages)
    ).toBe('English, French');
    expect(languagesCol.filter).toBe(true);
    expect(languagesCol.floatingFilter).toBe(true);
    expect(languagesCol.flex).toBe(2);
    expect(languagesCol.onCellClicked).toBe(onRowClickCountryDetailsMock);

    const mockParamsCurrencies = {
      data: { currencies: { USD: { name: 'United States Dollar' } } },
    };
    (convertCommaSeperatedCurrencyList as jest.Mock).mockReturnValue(
      'United States Dollar'
    );
    expect(currenciesCol.headerName).toBe('Currencies');
    expect(
      currenciesCol.valueGetter &&
        currenciesCol.valueGetter(mockParamsCurrencies)
    ).toBe('United States Dollar');
    expect(currenciesCol.filter).toBe(true);
    expect(currenciesCol.floatingFilter).toBe(true);
    expect(currenciesCol.flex).toBe(2);
    expect(currenciesCol.onCellClicked).toBe(onRowClickCountryDetailsMock);
    expect(favoriteCol.headerName).toBe('Favorite');
    expect(favoriteCol.flex).toBe(0.5);
  });
});
