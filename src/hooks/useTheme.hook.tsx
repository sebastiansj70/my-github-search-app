import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';
import { ThemeContextProps } from '../types/theme.interface';

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};