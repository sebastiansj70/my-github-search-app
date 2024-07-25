
import React from 'react';
import './App.css';
import { ThemeProvider } from './context/theme.context';
import { GithubProvider } from './context/github.context';
import RoutesApp from './Routes';


function App() {
    return (
        <ThemeProvider>
            <GithubProvider>
                <RoutesApp />
            </GithubProvider>
        </ThemeProvider>
    );
}

export default App;
