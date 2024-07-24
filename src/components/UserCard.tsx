import React from 'react';
import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import '../styles/userCard.css'
import { useTheme } from '../hooks/useTheme.hook';

interface UserCardProps {
    avatarUrl: string;
    name: string;
    username: string;
    bio: string;
    followers: number;
    following: number;
    repositories: number;
}


const UserCard: React.FC<UserCardProps> = ({ avatarUrl, name, username, bio, followers, following, repositories }) => {
    const { currentTheme } = useTheme();

    return (
        <Card className="user-card" style={{background: currentTheme.backgroundCard, color: currentTheme.color}}>
            <div className="user-card-header">
                <Avatar image={avatarUrl} shape="circle" size="large" className="user-card-avatar" />
                <div className="user-card-info" >
                    <h2>{name}</h2>
                    <h3>@{username}</h3>
                </div>
            </div>
            <p className="user-card-bio">{bio}</p>
            <div className="user-card-stats">
                <span>
                    <i className="pi pi-star" /> {followers} Followers
                </span>
                <span>
                    <i className="pi pi-user" /> {following} Following
                </span>
                <span>
                    <i className="pi pi-book" /> {repositories} Repos
                </span>
            </div>
        </Card>
    );
};

export default UserCard