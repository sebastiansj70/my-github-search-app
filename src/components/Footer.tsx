import React from 'react';
import '../styles/footer.css'
import { useTheme } from '../hooks/useTheme.hook';

const Footer: React.FC = () => {
    const { currentTheme } = useTheme();
    return (
        <footer className="footer" style={{ background: currentTheme.backgroundFooter }}>
            <div className="footer-content">
                <p>&copy; 2024 Mi Aplicación. Todos los derechos reservados.</p>
                <a href="https://github.com/sebastiansj70/my-github-search-app" target="_blank" rel="noopener noreferrer"
                style={{color: currentTheme.color}}>
                    Ver en GitHub
                </a>
            </div>
        </footer>
    );
};

export default Footer;
