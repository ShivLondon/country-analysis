const fetchAllCountriesData = async () => {
  try {
    const response = await fetch(
      'https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,languages,independent,status,unMember,region,subregion,landlocked,area,ccn3'
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};
export default fetchAllCountriesData;
