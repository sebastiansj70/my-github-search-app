import React, { createContext, useContext, useState, ReactNode } from "react";

export const GithubContext = createContext<any>(undefined)

export const GithubProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [users, setUsers] = useState()
    const [repos, setRepos] = useState()

    return (
        <GithubContext.Provider
            value={{
                users,
                setUsers,
                repos,
                setRepos
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export const useGithubContext = (): {
    users: any,
    setUsers: Function,
    repos: any,
    setRepos: Function
} => useContext(GithubContext)