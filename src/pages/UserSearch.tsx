import React, { useEffect, useRef, useState } from 'react';
import Search from '../components/Search';
import '../styles/userSearch.css'
import { useTheme } from '../hooks/useTheme.hook';
import CustomCard from '../components/CustomCard';
import { useGithubContext } from '../context/github.context';
import { fetchGithubAllUsers, fetchGithubUsers } from '../api/githubApi';
import { Toast } from 'primereact/toast';
import { showToast } from '../utils/toastUtils';


const UserSearch: React.FC = () => {
    const { currentTheme } = useTheme();
    const { users, setUsers } = useGithubContext();
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState('');

    const toast = useRef<Toast>(null);

    const handleGetUser = async () => {
        try {
            const users = await fetchGithubAllUsers()
            setUsers(users)
        } catch (error) {
            showToast(toast, 'Error al buscar usuarios.', 'error')
        }
    }


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

    useEffect(() => {
        handleGetUser()
    }, [])

    return (
        <div className="user-search-container" style={{ background: currentTheme.background }}>
            <Toast ref={toast} />
            <Search
                onSearch={handleSearch}
                loading={loading}
                query={query}
                setLoading={setLoading}
                setQuery={setQuery}

            />
            <div className={`user-list ${users?.length === 1 ? 'single-card' : ''}`}>
                {
                    users && users.map((user: any, index: string) => (
                        <CustomCard
                            key={index}
                            avatarUrl={user.avatar_url}
                            name={user.login}
                            username={user.login}
                            bio={user.url}
                            followers={23965}
                            following={23965}
                            repositories={11}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default UserSearch;
