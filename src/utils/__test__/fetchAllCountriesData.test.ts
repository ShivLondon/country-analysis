import fetchAllCountriesData from '../fetchAllCountriesData';

global.fetch = jest.fn();

describe('fetchAllCountriesData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch and return countries data successfully', async () => {
    const mockCountriesData = [
      {
        name: { common: 'France' },
        capital: ['Paris'],
        currencies: { EUR: { name: 'Euro', symbol: '€' } },
        population: 67081000,
        languages: { fra: 'French' },
        independent: true,
        status: 'officially-assigned',
        unMember: true,
        region: 'Europe',
        subregion: 'Western Europe',
        landlocked: false,
        area: 551695,
        ccn3: '250',
      },
    ];

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockCountriesData,
    });

    const data = await fetchAllCountriesData();
    expect(data).toEqual(mockCountriesData);
    expect(fetch).toHaveBeenCalledWith(
      'https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,languages,independent,status,unMember,region,subregion,landlocked,area,ccn3'
    );
  });

  it('should throw an error if the network response is not ok', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    await expect(fetchAllCountriesData()).rejects.toThrow(
      'Network response was not ok'
    );
    expect(fetch).toHaveBeenCalledWith(
      'https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,languages,independent,status,unMember,region,subregion,landlocked,area,ccn3'
    );
  });

  it('should throw an error if fetch fails', async () => {
    const mockError = new Error('Fetch failed');

    (fetch as jest.Mock).mockRejectedValueOnce(mockError);

    await expect(fetchAllCountriesData()).rejects.toThrow('Fetch failed');
    expect(fetch).toHaveBeenCalledWith(
      'https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,languages,independent,status,unMember,region,subregion,landlocked,area,ccn3'
    );
  });
});
