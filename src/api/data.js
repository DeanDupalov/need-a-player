import * as api from './api';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function create(game) {
    return api.post('/data/games', game);
}