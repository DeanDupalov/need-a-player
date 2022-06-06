const baseUrl = 'http://localhost:3030';

function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}

function createOptions(method = 'get', data) {
    const options = {
        method,
        headers: {},
    };
    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const user = getUserData();

    if (user !== null) {
        options.headers['Authorization-token'] = user.accessToken;
    }

    return options;
}

async function request(url, options) {
    try {
        
        const response = await fetch(baseUrl + url, options);
        
        if (response.ok !== true) {
            if (response.status === 403) {
                localStorage.removeItem('user');
            }
            const error = await response.json();
            throw new Error(error.message);
        }
    
        try {
            return await response.json();
        } catch (err) {
            return response;
        }

    } catch (err) {

        throw err;
    }
}

export async function get(url) {
    return request(url, createOptions());
}

export async function post(url, data) {
    return request(url, createOptions('post', data));
}


export async function put(url, data) {
    return request(url, createOptions('put', data));
}

export async function del(url) {
    return request(url, createOptions('delete'));
}

export async function register(email, password) {
    const result = await post('/users/register', { email, password });

    return result;
}

export async function login(email, password) {
    const result = await post('/users/login', { email, password });

    return result;
}

export async function logout() {
    const result = await get('/users/logout');

    return result;
}