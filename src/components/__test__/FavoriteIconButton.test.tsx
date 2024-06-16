import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FavoriteIconButton from '../FavoriteIconButton';

describe('FavoriteIconButton', () => {
  const handleFavoriteToggleMock = jest.fn();
  const rowMock = { data: { name: { common: 'United Kingdom' } } };

  it('should render the component with correct icon and title when isFavorite is true', () => {
    render(
      <FavoriteIconButton
        handleFavoriteToggle={handleFavoriteToggleMock}
        row={rowMock}
        isFavorite={true}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('💙');
    expect(button).toHaveAttribute('title', 'Remove from favorites');
  });

  it('should render the component with correct icon and title when isFavorite is false', () => {
    render(
      <FavoriteIconButton
        handleFavoriteToggle={handleFavoriteToggleMock}
        row={rowMock}
        isFavorite={false}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('♡');
    expect(button).toHaveAttribute('title', 'Add to favorites');
  });

  it('should call handleFavoriteToggle with the correct argument when clicked', () => {
    render(
      <FavoriteIconButton
        handleFavoriteToggle={handleFavoriteToggleMock}
        row={rowMock}
        isFavorite={false}
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleFavoriteToggleMock).toHaveBeenCalledWith('United Kingdom');
  });
});
