import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardSelection from '../../components/CardSelection';
import { ThemeProvider } from '../../context/theme.context';
import { useTheme } from '../../hooks/useTheme.hook';

jest.mock('../../hooks/useTheme.hook', () => ({
    useTheme: jest.fn(),
}));

const mockUseTheme = useTheme as jest.Mock;

describe('CardSelection Component', () => {
    beforeEach(() => {
        mockUseTheme.mockReturnValue({
            currentTheme: {
                backgroundCard: 'gray',
                color: 'black',
            },
        });
    });

    const renderCardSelectionComponent = (props: any) => {
        return render(
            <ThemeProvider>
                <CardSelection {...props} />
            </ThemeProvider>
        );
    };

    it('should render the card with title and description', () => {
        renderCardSelectionComponent({ title: 'Test Title', description: 'Test Description', onClick: jest.fn() });
        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Test Description')).toBeInTheDocument();
    });

    it('should call onClick when the card is clicked', () => {
        const mockOnClick = jest.fn();
        renderCardSelectionComponent({ title: 'Test Title', description: 'Test Description', onClick: mockOnClick });
        const card = screen.getByText('Test Title').closest('.card');
        fireEvent.click(card!);
        expect(mockOnClick).toHaveBeenCalled();
    });

    it('should apply current theme styles', () => {
        renderCardSelectionComponent({ title: 'Test Title', description: 'Test Description', onClick: jest.fn() });
        const cardContent = screen.getByText('Test Title').closest('.card-content');
        const description = screen.getByText('Test Description');

        expect(cardContent).toHaveStyle('background: gray');
        expect(cardContent).toHaveStyle('color: black');
        expect(description).toHaveStyle('color: black');
    });
});