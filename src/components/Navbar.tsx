import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme.hook';
import ThemeSwitcher from './ThemeSwitcher';

interface MenuItem {
    label: string;
    icon: string;
    items?: MenuItem[];
    command?: () => void;
    template?: (item: MenuItem) => JSX.Element;
}

function Navbar() {
    const { currentTheme } = useTheme();

    const leftItems: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            template: (item: MenuItem) => (
                <Link to="/" className="p-menuitem-link" style={{ color: currentTheme.color }}>
                    <i className={item.icon}></i>
                    {item.label}
                </Link>
            )
        }
    ];

    const rightItems: MenuItem[] = [
        {
            label: 'Theme Switcher',
            icon: 'pi pi-cog',
            template: () => (
                <ThemeSwitcher />
            )
        }
    ];

    const endTemplate = () => (
        <div className="navbar-right">
            {rightItems.map((item, index) => (
                <div key={index} className="p-menuitem">
                    {item.template?.(item)}
                </div>
            ))}
        </div>
    );

    return <Menubar
        model={leftItems as any}
        end={endTemplate}
        style={{ background: currentTheme.background, color: currentTheme.color }}
    />
}

export default Navbar;
