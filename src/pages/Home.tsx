import React from 'react';
import CardSelection from '../components/CardSelection';
import '../styles/home.css'
import { useTheme } from '../hooks/useTheme.hook';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const { toggleTheme, currentTheme } = useTheme();
    const navigate = useNavigate();

    return (
        <div className="home-container" style={{ background: currentTheme.background }}>
            <h1>Home</h1>
            <div className="card-container" style={{
                display: 'flex', justifyContent: 'center', gap: '2vmin'
            }}>
                <CardSelection
                    title="Búsqueda de usuarios"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"
                    onClick={() => navigate('/search/users')}
                />

                <CardSelection
                    title="Búsqueda de repositorios"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"
                    onClick={() => navigate('/search/repos')}
                />
            </div>
        </div >
    );
};

export default Home;
