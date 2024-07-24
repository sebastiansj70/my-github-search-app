import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useTheme } from '../hooks/useTheme.hook';
import '../styles/search.css'

interface SearchProps {
    onSearch: () => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    query: string;
    setQuery: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch, loading, setLoading, query, setQuery }) => {

    const { currentTheme } = useTheme();

    return (
        <div className="search-wrapper">

            <h1 style={{ color: currentTheme.color }}>Buscador</h1>
            <div className="search-container">
                <InputText
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar"
                    className="search-input"
                />
                <Button
                    className="search-button"
                    label="Buscar"
                    icon="pi pi-search"
                    onClick={onSearch}
                    style={{ background: currentTheme.backgroundButton }}
                    loading={loading}
                />
            </div>
        </div>
    )
}

export default Search
