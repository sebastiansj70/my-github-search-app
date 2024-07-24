import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchGithubUsers = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
  return response.data.items;
};

export const fetchGithubRepos = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/search/repositories?q=${query}`);
  return response.data.items;
};
