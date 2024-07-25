import React, { useEffect, useRef, useState } from 'react';
import Search from '../components/Search';
import { Toast } from 'primereact/toast';
import { useTheme } from '../hooks/useTheme.hook';
import { useGithubContext } from '../context/github.context';
import CustomCard from '../components/CustomCard';
import { fetchGithubAllRepos, fetchGithubRepos } from '../api/githubApi';
import { showToast } from '../utils/toastUtils';
import '../styles/repoSearch.css'

const RepoSearch: React.FC = () => {

    const { currentTheme } = useTheme();
    const { repos, setRepos } = useGithubContext();

    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState('');

    const toast = useRef<Toast>(null);

    const handleGetRepos = async () => {
        try {
            const repos = await fetchGithubAllRepos()
            setRepos(repos)
        } catch (error) {
            showToast(toast, 'Error al buscar repositorios.', 'error')
        }
    }

    const handleSearch = async () => {
        setLoading(true)

        try {
            if (query) {
                setRepos(undefined)
                const repos = await fetchGithubRepos(query);
                if (repos.length > 0) {
                    setRepos(repos)
                } else {
                    showToast(toast, 'No se encontró ningun repositorio', 'warn')
                }
                setQuery('')
            } else {
                showToast(toast, 'Debes agregar un valor a buscar', 'warn')
            }
        } catch (error) {
            showToast(toast, 'Error al buscar un repositorio.', 'error')
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        handleGetRepos()
    }, [])

    return (
        <div className="repo-search-container" style={{ background: currentTheme.background }}>
            <Toast ref={toast} />
            <Search
                onSearch={handleSearch}
                loading={loading}
                query={query}
                setLoading={setLoading}
                setQuery={setQuery}

            />
            <div className={`repo-list ${repos?.length === 1 ? 'single-card' : ''}`}>
                {
                    repos && repos.map((repo: any, index: string) => (
                        <CustomCard
                            key={index}
                            avatarUrl={repo.owner.avatar_url}
                            name={repo.name}
                            username={repo.full_name}
                            bio={repo.description}
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

export default RepoSearch;
