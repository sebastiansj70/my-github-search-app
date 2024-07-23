export interface Theme {
	theme: string;
	color: string;
	background: string;
	icon: string;
	iconOutline: string;
	backgroundTabBar: string;
	primary: string;
	warning: string;
	titleColor: string;
	backgroundHeader: string;
	backgroundButton: string;
	colorTextButton: string;
}

export interface ThemeContextProps {
	theme: string;
	toggleTheme: () => void;
	currentTheme: Theme;
}