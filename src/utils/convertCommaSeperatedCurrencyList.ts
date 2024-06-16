export const convertCommaSeperatedCurrencyList = (currenciesObj: {
  [x: string]: { name: string; symbol: string };
}) => {
  const currencyNames = [];
  for (const currencyCode in currenciesObj) {
    if (currenciesObj.hasOwnProperty(currencyCode)) {
      currencyNames.push(
        currenciesObj[currencyCode].name +
          ` (${currenciesObj[currencyCode].symbol})`
      );
    }
  }
  return currencyNames;
};
