import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
    fetchGithubUsers,
    fetchGithubAllUsers,
    fetchGithubRepos,
    fetchGithubAllRepos
} from '../../api/githubApi';

const mock = new MockAdapter(axios);

describe('GitHub API calls', () => {
    afterEach(() => {
        mock.reset();
    });

    it('should fetch GitHub users', async () => {
        const query = 'octocat';
        const mockResponse = { items: [{ login: 'octocat' }] };

        mock.onGet(`https://api.github.com/search/users?q=${query}`).reply(200, mockResponse);

        const users = await fetchGithubUsers(query);

        expect(users).toEqual(mockResponse.items);
    });

    it('should fetch all GitHub users', async () => {
        const mockResponse = [{ login: 'octocat' }, { login: 'hubot' }];

        mock.onGet('https://api.github.com/users').reply(200, mockResponse);

        const users = await fetchGithubAllUsers();

        expect(users).toEqual(mockResponse);
    });

    it('should fetch GitHub repositories', async () => {
        const query = 'react';
        const mockResponse = { items: [{ name: 'react' }] };

        mock.onGet(`https://api.github.com/search/repositories?q=${query}`).reply(200, mockResponse);

        const repos = await fetchGithubRepos(query);

        expect(repos).toEqual(mockResponse.items);
    });

    it('should fetch all GitHub repositories', async () => {
        const mockResponse = [{ name: 'react' }, { name: 'vue' }];

        mock.onGet('https://api.github.com/repositories').reply(200, mockResponse);

        const repos = await fetchGithubAllRepos();

        expect(repos).toEqual(mockResponse);
    });
});
