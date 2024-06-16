import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders App component and title', () => {
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
  it('renders Favorites Only checkbox component', () => {
    render(<App />);
    const favoritesCheckbox = screen.getByLabelText(
      /Favorites Only/i
    ) as HTMLInputElement;
    expect(favoritesCheckbox).toBeInTheDocument();
    expect(favoritesCheckbox.checked).toBe(false);
    fireEvent.click(favoritesCheckbox);
    expect(favoritesCheckbox.checked).toBe(true);
  });
});
