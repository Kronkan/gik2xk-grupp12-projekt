import axios from './api';

export async function getCart(userId) {
    try {
        const response = await axios.get(`/user/${userId}/getCart`);
        if(response.status === 200) return response.data;
        else {
            console.log(response.data);
            return null;
        } 
    } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
    }
}


export async function login(email, password) {
    try {
        const response = await axios.post(`/user/login`, { email, password });
        if (response.status === 200) 
            return response.data;
        else {
            console.log(response.data); 
            return null; 
        }
    } catch (e) {
        e?.response ? console.log(e.response.data) : console.log(e)
    }
}


export async function getById(userId) {
    try {
        const response = await axios.get(`/user/${userId}`);
        if(response.status === 200) return response.data;
        else {
            console.log(response.data);
            return null;
        }
    } catch (e) {
        e?.response ? console.log(e.response.data) : console.log(e);
    }
}


export async function getAll() {
    try {
        const response = await axios.get('/user');

    if(response.status === 200) return response.data;
    else {
        console.log(response.data);
        return [];
    }
    } catch (e) {
        e?.response ? console.log(e.response.data) : console.log(e);
    }
}


export async function create(user) {
    try {
        const response = await axios.post('/user', user);
        if (response.status === 200) return response.data;
        else {
            console.log(response.data);
            return null;
        }  
    } catch (e) {
        e?.response ? console.log(e.response.data) : console.log(e);
    } 
}


export async function update(user) {
    try {
        const response = await axios.put(`/user/${user.userId}`, user)
        if(response.status === 200) return response.data;
        else {
            console.log(response.data);
            return null;
        }
    } catch (e) {
        e?.response ? console.log(e.response.data) : console.log(e);
    }
}


export async function remove(userId) {
    try {
        const response = await axios.delete(`/user`, { data: { userId } });
        if(response.status === 200) return response.data;
        else {
            console.log(response.data);
            return null;
        }
    } catch (e) {
        e?.response ? console.log(e.response.data) : console.log(e);
    }
}

