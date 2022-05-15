const baseUrl = 'http://localhost:3030';

function createOptions(method = 'get', data, token=null) {
    const options = {
        method,
        headers: {},
    };
    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if (token !== null) {
        options.headers['X-Authorization'] = token;
    }
    return options;
}

async function request(url, options) {
    try {
        const response = await fetch(baseUrl + url, options);

        try {
            return await response.json();
        } catch (err) {
            return response;
        }

    } catch (err) {
        alert(err.message);

        throw err;
    }
}

export async function get(url) {
    return request(url, createOptions());
}

export async function post(url, data, token) {
    return request(url, createOptions('post', data, token));
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