import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    expect(screen.getByText('Country Analysis')).toBeInTheDocument();
  });
  it("renders CountryListGrid component and it's columns", () => {
    render(<App />);
    const currenciesColumnInCountryListGrid = screen.getByText(/Currencies/i);
    expect(currenciesColumnInCountryListGrid).toBeInTheDocument();
    const languagesColumnInGrid = screen.getByText(/languages/i);
    expect(languagesColumnInGrid).toBeInTheDocument();
  });
});
