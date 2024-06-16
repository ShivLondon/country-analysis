import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CountryDetails from '../CountryDetails';

describe('CountryDetails', () => {
  const mockSetOpen = jest.fn();
  const mockCountryDetails = {
    name: { common: 'Test Country' },
    capital: 'Test Capital',
    population: 123456,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders country name in the AppBar', () => {
    render(
      <CountryDetails
        open={true}
        setOpen={mockSetOpen}
        countryDetails={mockCountryDetails}
      />
    );

    const appBarTitle = screen.getByText('Test Country');
    expect(appBarTitle).toBeInTheDocument();
  });

  test('renders country details list', () => {
    render(
      <CountryDetails
        open={true}
        setOpen={mockSetOpen}
        countryDetails={mockCountryDetails}
      />
    );

    const capitalItem = screen.getByText('CAPITAL');
    const capitalValue = screen.getByText('Test Capital');
    const populationItem = screen.getByText('POPULATION');
    const populationValue = screen.getByText('123456');

    expect(capitalItem).toBeInTheDocument();
    expect(capitalValue).toBeInTheDocument();
    expect(populationItem).toBeInTheDocument();
    expect(populationValue).toBeInTheDocument();
  });

  test('calls setOpen with false when close button is clicked', () => {
    render(
      <CountryDetails
        open={true}
        setOpen={mockSetOpen}
        countryDetails={mockCountryDetails}
      />
    );

    const closeButton = screen.getByLabelText('close');
    fireEvent.click(closeButton);

    expect(mockSetOpen).toHaveBeenCalledWith(false);
  });

  test('does not render non-primitive values', () => {
    const countryDetailsWithObject = {
      ...mockCountryDetails,
      additionalInfo: { key: 'value' },
    };

    render(
      <CountryDetails
        open={true}
        setOpen={mockSetOpen}
        countryDetails={countryDetailsWithObject}
      />
    );

    const additionalInfoItem = screen.queryByText('ADDITIONALINFO');
    expect(additionalInfoItem).not.toBeInTheDocument();
  });

  test('dialog is closed when open is false', () => {
    render(
      <CountryDetails
        open={false}
        setOpen={mockSetOpen}
        countryDetails={mockCountryDetails}
      />
    );

    const dialog = screen.queryByRole('dialog');
    expect(dialog).not.toBeInTheDocument();
  });
});
