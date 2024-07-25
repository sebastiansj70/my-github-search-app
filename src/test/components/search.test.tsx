import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from '../../components/Search';
import { ThemeProvider } from '../../context/theme.context';

const mockOnSearch = jest.fn();
const mockSetLoading = jest.fn();
const mockSetQuery = jest.fn();

const renderSearchComponent = (props = {}) => {
    const defaultProps = {
        onSearch: mockOnSearch,
        loading: false,
        setLoading: mockSetLoading,
        query: '',
        setQuery: mockSetQuery,
        ...props,
    };

    return render(
        <ThemeProvider>
            <Search {...defaultProps} />
        </ThemeProvider>
    );
};

describe('Search Component', () => {
    it('should render the search input and button', () => {
        renderSearchComponent();
        expect(screen.getByPlaceholderText('Buscar')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Buscar/i })).toBeInTheDocument();
    });

    it('should call setQuery when input value changes', () => {
        renderSearchComponent();
        const input = screen.getByPlaceholderText('Buscar');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(mockSetQuery).toHaveBeenCalledWith('test');
    });

    it('should call onSearch when search button is clicked', () => {
        renderSearchComponent();
        const button = screen.getByRole('button', { name: /Buscar/i });
        fireEvent.click(button);
        expect(mockOnSearch).toHaveBeenCalled();
    });

    it('should render the loading state correctly', () => {
        renderSearchComponent({ loading: true });
        const button = screen.getByRole('button', { name: /Buscar/i });
        expect(button).toHaveClass('p-button-loading');
    });

    it('should apply current theme styles', () => {
        const mockUseTheme = jest.fn().mockReturnValue({
            currentTheme: {
                color: 'red',
                backgroundButton: 'blue',
            },
        });
        jest.mock('../../hooks/useTheme.hook', () => ({
            useTheme: mockUseTheme,
        }));

        renderSearchComponent();
        expect(screen.getByText('Buscador')).toHaveStyle('color: black');
        expect(screen.getByRole('button', { name: /Buscar/i })).toHaveStyle('background: rgb(52, 94, 55)');
    });
});
