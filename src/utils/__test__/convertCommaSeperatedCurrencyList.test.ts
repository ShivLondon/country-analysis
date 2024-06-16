import { convertCommaSeperatedCurrencyList } from '../convertCommaSeperatedCurrencyList';

describe('getCurrencyNames', () => {
  test('provide an array with name and their symbols in the parenthesis', () => {
    const currenciesObj = {
      GBP: { name: 'British Pound', symbol: '£' },
      EUR: { name: 'Euro', symbol: '€' },
    };
    const result = convertCommaSeperatedCurrencyList(currenciesObj);
    expect(result).toEqual(['British Pound (£)', 'Euro (€)']);
  });

  test('returns an empty array when given an empty object', () => {
    const currenciesObj = {};
    const result = convertCommaSeperatedCurrencyList(currenciesObj);
    expect(result).toEqual([]);
  });
});
