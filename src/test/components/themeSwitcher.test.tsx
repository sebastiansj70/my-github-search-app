import React from 'react';
import { render, screen } from '@testing-library/react';
import { useTheme } from '../../hooks/useTheme.hook';
import ThemeSwitcher from '../../components/ThemeSwitcher';


jest.mock('../../hooks/useTheme.hook');

describe('ThemeSwitcher', () => {
    const mockToggleTheme = jest.fn();
    const mockUseTheme = useTheme as jest.Mock;

    beforeEach(() => {
        mockUseTheme.mockReturnValue({
            toggleTheme: mockToggleTheme,
            currentTheme: {
                backgroundHeader: 'black',
                theme: 'light',
                titleColor: 'white',
            },
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render correctly with the current theme', () => {
        render(<ThemeSwitcher />);

        const inputSwitch = screen.getByRole('checkbox');
        const spanElement = screen.getByText('Dark Mode');

        expect(inputSwitch).toBeInTheDocument();
        expect(spanElement).toBeInTheDocument();
        expect(spanElement).toHaveStyle('color: white');
    });

    it('should display "Light Mode" when theme is dark', () => {
        mockUseTheme.mockReturnValue({
            toggleTheme: mockToggleTheme,
            currentTheme: {
                backgroundHeader: 'black',
                theme: 'dark',
                titleColor: 'white',
            },
        });

        render(<ThemeSwitcher />);

        const spanElement = screen.getByText('Light Mode');
        expect(spanElement).toBeInTheDocument();
    });
});
