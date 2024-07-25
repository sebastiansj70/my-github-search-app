import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomCard from '../../components/CustomCard';
import { ThemeProvider } from '../../context/theme.context';
import { useTheme } from '../../hooks/useTheme.hook';

jest.mock('../../hooks/useTheme.hook', () => ({
    useTheme: jest.fn(),
}));

const mockUseTheme = useTheme as jest.Mock;

describe('CustomCard Component', () => {
    beforeEach(() => {
        mockUseTheme.mockReturnValue({
            currentTheme: {
                backgroundCard: 'gray',
                color: 'black',
            },
        });
    });

    const renderCustomCardComponent = (props: any) => {
        return render(
            <ThemeProvider>
                <CustomCard {...props} />
            </ThemeProvider>
        );
    };

    it('should render the user card with name, username, and bio', () => {
        renderCustomCardComponent({
            avatarUrl: 'https://example.com/avatar.jpg',
            name: 'John Doe',
            username: 'johndoe',
            bio: 'Software Developer',
            followers: 100,
            following: 50,
            repositories: 10
        });
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('@johndoe')).toBeInTheDocument();
        expect(screen.getByText('Software Developer')).toBeInTheDocument();
    });

    it('should render the user card stats correctly', () => {
        renderCustomCardComponent({
            avatarUrl: 'https://example.com/avatar.jpg',
            name: 'John Doe',
            username: 'johndoe',
            bio: 'Software Developer',
            followers: 100,
            following: 50,
            repositories: 10
        });
        expect(screen.getByText('100 Followers')).toBeInTheDocument();
        expect(screen.getByText('50 Following')).toBeInTheDocument();
        expect(screen.getByText('10 Repos')).toBeInTheDocument();
    });

    it('should apply current theme styles', () => {
        renderCustomCardComponent({
            avatarUrl: 'https://example.com/avatar.jpg',
            name: 'John Doe',
            username: 'johndoe',
            bio: 'Software Developer',
            followers: 100,
            following: 50,
            repositories: 10
        });
        const card = document.querySelector('.user-card');
        expect(card).toHaveStyle('background: gray');
        expect(card).toHaveStyle('color: black');
    });
});
