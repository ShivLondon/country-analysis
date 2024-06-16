import { convertCommaSeperatedCurrencyList } from '../../utils/convertCommaSeperatedCurrencyList';
import CountryListGridColumns from '../CountryListGridColumns';

jest.mock('../../utils/convertCommaSeperatedCurrencyList', () => ({
  convertCommaSeperatedCurrencyList: jest.fn(),
}));

jest.mock('../FavoriteCountryCell', () => jest.fn());

describe('CountryListGridColumns', () => {
  const handleFavoriteToggleMock = jest.fn();
  const onRowClickCountryDetailsMock = jest.fn();

  it('should return the correct column definitions', () => {
    const columns = CountryListGridColumns(
      handleFavoriteToggleMock,
      onRowClickCountryDetailsMock
    );

    expect(columns).toHaveLength(5);

    const [
      countryCol,
      populationCol,
      languagesCol,
      currenciesCol,
      favoriteCol,
    ] = columns;

    expect(countryCol.headerName).toBe('Country');
    expect(countryCol.field).toBe('name.common');
    expect(countryCol.filter).toBe(true);
    expect(countryCol.floatingFilter).toBe(true);
    expect(countryCol.flex).toBe(2);
    expect(countryCol.onCellClicked).toBe(onRowClickCountryDetailsMock);

    expect(populationCol.headerName).toBe('Population');
    expect(populationCol.field).toBe('population');
    expect(populationCol.filter).toBe(true);
    expect(populationCol.floatingFilter).toBe(true);
    expect(populationCol.flex).toBe(1);
    expect(populationCol.onCellClicked).toBe(onRowClickCountryDetailsMock);

    expect(languagesCol.headerName).toBe('Languages');
    expect(
      languagesCol.valueGetter &&
        languagesCol.valueGetter({
          data: { languages: { eng: 'English', fra: 'French' } },
        })
    ).toBe('English, French');
    expect(languagesCol.filter).toBe(true);
    expect(languagesCol.floatingFilter).toBe(true);
    expect(languagesCol.flex).toBe(2);
    expect(languagesCol.onCellClicked).toBe(onRowClickCountryDetailsMock);

    const mockCurrencies = { USD: { name: 'United States Dollar' } };
    (convertCommaSeperatedCurrencyList as jest.Mock).mockReturnValue(
      'United States Dollar'
    );
    expect(currenciesCol.headerName).toBe('Currencies');
    expect(
      currenciesCol.valueGetter &&
        currenciesCol.valueGetter({ data: { currencies: mockCurrencies } })
    ).toBe('United States Dollar');
    expect(currenciesCol.filter).toBe(true);
    expect(currenciesCol.floatingFilter).toBe(true);
    expect(currenciesCol.flex).toBe(2);
    expect(currenciesCol.onCellClicked).toBe(onRowClickCountryDetailsMock);

    expect(favoriteCol.headerName).toBe('Favorite');
    expect(favoriteCol.flex).toBe(0.5);
  });
});
