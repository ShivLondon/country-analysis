import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExternalFilter from '../ExternalFilter';

describe('ExternalFilter', () => {
  const setSearchTermMock = jest.fn();

  it('should render the TextField with the correct label and placeholder', () => {
    render(<ExternalFilter searchTerm='' setSearchTerm={setSearchTermMock} />);

    const textField = screen.getByLabelText(
      'Search by Name, Population, Language, or Currency'
    );
    expect(textField).toBeInTheDocument();
    expect(textField).toHaveAttribute('placeholder', 'Ex: United Kindom');
  });

  it('should call setSearchTerm with the correct value when input changes', () => {
    render(<ExternalFilter searchTerm='' setSearchTerm={setSearchTermMock} />);

    const textField = screen.getByLabelText(
      'Search by Name, Population, Language, or Currency'
    );
    fireEvent.change(textField, { target: { value: 'France' } });

    expect(setSearchTermMock).toHaveBeenCalledWith('France');
  });

  it('should render the TextField with the correct value from searchTerm prop', () => {
    render(
      <ExternalFilter searchTerm='Germany' setSearchTerm={setSearchTermMock} />
    );

    const textField = screen.getByLabelText(
      'Search by Name, Population, Language, or Currency'
    );
    expect(textField).toHaveValue('Germany');
  });
});
