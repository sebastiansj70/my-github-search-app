import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from '../../context/theme.context';
import Footer from '../../components/Footer';
import { useTheme } from '../../hooks/useTheme.hook';

jest.mock('../../hooks/useTheme.hook', () => ({
    useTheme: jest.fn(),
}));

const mockUseTheme = useTheme as jest.Mock;

describe('Footer Component', () => {
    beforeEach(() => {
        mockUseTheme.mockReturnValue({
            currentTheme: {
                backgroundFooter: 'black',
                color: 'white',
            },
        });
    });

    const renderFooterComponent = () => {
        return render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        );
    };

    it('should render the footer content correctly', () => {
        renderFooterComponent();
        expect(screen.getByText(/Mi Aplicación. Todos los derechos reservados/i)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Ver en GitHub/i })).toBeInTheDocument();
    });

    it('should apply current theme styles', () => {
        renderFooterComponent();
        const footer = screen.getByRole('contentinfo');
        const link = screen.getByRole('link', { name: /Ver en GitHub/i });

        expect(footer).toHaveStyle('background: black');
        expect(link).toHaveStyle('color: white');
    });
});