import React, { useEffect, useRef } from 'react';
import Search from '../components/Search';
import '../styles/userSearch.css'
import { useTheme } from '../hooks/useTheme.hook';
import UserCard from '../components/UserCard';
import { useGithubContext } from '../context/github.context';
import { fetchGithubAllUsers } from '../api/githubApi';
import { Toast } from 'primereact/toast';
import { showToast } from '../utils/toastUtils';

const UserSearch: React.FC = () => {
    const { currentTheme } = useTheme();
    const { users, setUsers } = useGithubContext();
    const toast = useRef<Toast>(null);

    const handleGetUser = async () => {
        try {
            const users = await fetchGithubAllUsers()
            setUsers(users)
        } catch (error) {
            showToast(toast, 'Error al buscar usuarios.', 'error')
        }
    }

    useEffect(() => {
        handleGetUser()
    }, [])

    return (
        <div className="user-search-container" style={{ background: currentTheme.background }}>
            <Search />
            <div className={`user-list ${users?.length === 1 ? 'single-card' : ''}`}>
                {
                    users && users.map((user: any, index: string) => (
                        <UserCard
                            key={index}
                            avatarUrl={user.avatar_url}
                            name={user.login}
                            username={"mojombo"}
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
