import { server } from './axios-server'

export const getUserInfo = user => server.get(`/users/${user}`);
export const getUserRepos = user => server.get(`/users/${user}/repos`);