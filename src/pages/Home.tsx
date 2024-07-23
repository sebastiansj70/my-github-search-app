import React from 'react';
import CardSelection from '../components/CardSelection';
import '../styles/home.css'

const Home: React.FC = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>HOme page</p>
            <div className="card-container" style={{
                display: 'flex', justifyContent: 'center', gap: '2vmin'
            }}>
                <CardSelection
                    title="Búsqueda de usuarios"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"
                    onClick={() => { }}
                />

                <CardSelection
                    title="Búsqueda de repositorios"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"
                    onClick={() => { }}
                />
            </div>
        </div >
    );
};

export default Home;
