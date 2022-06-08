import * as api from './api';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function create(game) {
    console.log(game);
    return api.post('/data/games', game);
}

export async function getAllGames() {
    return api.get('/data/games/lastThree');
}

export async function getEventById(id) {
    return api.get('/data/games/' + id);
}

export async function deleteEventById(id) {
    return api.del('/data/games/' + id);
}

