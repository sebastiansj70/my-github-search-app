import React, { createContext, ReactNode, useState } from 'react'
import theme from '../styles/theme'
import { ThemeContextProps } from '../types/theme.interface';


export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	
    const [themeName, setThemeName] = useState('light');
	const currentTheme = themeName === 'light' ? theme.light : theme.dark;

	const toggleTheme = () => {
		setThemeName((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{ theme: themeName, toggleTheme, currentTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};