import React from 'react'
import { Card } from 'primereact/card';
import { useTheme } from '../hooks/useTheme.hook';
import '../styles/cardSelection.css'

interface CardSelectionProps {
    title: string;
    description: string;
    onClick: () => void;
}

const CardSelection: React.FC<CardSelectionProps> = ({ title, description, onClick }) => {
    const { currentTheme } = useTheme();

    return (
        <div className="card" onClick={onClick}>
            <Card
                title={title}
                className="card-content"
                style={{ background: currentTheme.backgroundCard, color: currentTheme.color }}
            >
                <p className="m-0" style={{ color: currentTheme.color }}>
                    {description}
                </p>
            </Card>
        </div>
    )
}

export default CardSelection