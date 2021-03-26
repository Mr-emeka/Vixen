import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCard from '../../../../components/custom/MovieCard';


test('renders learn react link', () => {
    render(<MovieCard name="" url="" premiered="" genres={[]} idx={1} />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
