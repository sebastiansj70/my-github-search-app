import React, { useState } from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import { useTheme } from '../hooks/useTheme.hook';
import '../styles/themeSwitcher.css'

const ThemeSwitcher: React.FC = () => {
    const { toggleTheme, currentTheme } = useTheme();

    const handleThemeChange = () => {
        toggleTheme();
    };

    return (
        <div className="theme-switcher" style={{ background: currentTheme.backgroundHeader }}>
            <InputSwitch
                checked={currentTheme.theme === 'light' ? true : false}
                onChange={handleThemeChange}
            />
            <span style={{ color: currentTheme.titleColor }}
            >{currentTheme.theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
        </div>
    );
};

export default ThemeSwitcher;
