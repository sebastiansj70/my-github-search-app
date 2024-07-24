import React, { useEffect, useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useTheme } from '../hooks/useTheme.hook';
import '../styles/search.css'
import {  fetchGithubUsers } from '../api/githubApi';
import { useGithubContext } from '../context/github.context';
import { Toast } from 'primereact/toast';
import { showToast } from '../utils/toastUtils';

const Search: React.FC = () => {
    const [query, setQuery] = useState('');
    const { currentTheme } = useTheme();
    const { setUsers } = useGithubContext();
    const [loading, setLoading] = useState(false)
    const toast = useRef<Toast>(null);

    const handleSearch = async () => {
        setLoading(true)
        try {
            if (query) {
                setUsers(undefined)
                const user = await fetchGithubUsers(query);
                if (user.length > 0) {
                    setUsers(user)
                } else {
                    showToast(toast, 'No se encontró ningun usuario', 'warn')
                }
                setQuery('')
            } else {
                showToast(toast, 'Debes agregar un valor a buscar', 'warn')
            }
        } catch (error) {
            showToast(toast, 'Error a buscar un usuario.', 'error')
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="search-wrapper">
            <Toast ref={toast} />
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
                    onClick={handleSearch}
                    style={{ background: currentTheme.backgroundButton }}
                    loading={loading}
                />
            </div>
        </div>
    )
}

export default Search
