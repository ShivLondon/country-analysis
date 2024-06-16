import { render, screen } from '@testing-library/react';
import CountryListGrid from '../CountryListGrid';
describe('CountryListGrid', () => {
  it('renders CountryListGrid component', () => {
    render(<CountryListGrid favoritesOnly={false} searchTerm='' />);
    const populationColumnInGrid = screen.getByText(/Population/i);
    expect(populationColumnInGrid).toBeInTheDocument();
  });
});
