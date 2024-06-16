import { render, screen } from '@testing-library/react';
import CountryListGrid from '../CountryListGrid';
describe('CountryListGrid', () => {
  it('renders CountryListGrid component', () => {
    render(<CountryListGrid />);
    const countryColumnInCountryListGrid = screen.getByText(/Country/i);
    expect(countryColumnInCountryListGrid).toBeInTheDocument();
    const populationColumnInGrid = screen.getByText(/Population/i);
    expect(populationColumnInGrid).toBeInTheDocument();
  });
});
