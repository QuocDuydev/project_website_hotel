import axios from 'axios';

const baseURL = 'http://localhost:8000/apis';
const baseURLs = 'http://localhost:8000/api';

export const getUser = async (token) => {
    try {
        const response = await axios.get(`${baseURLs}/users/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

export const postUser = async (username, email, password) => {
    try {
        const response = await axios.post(`${baseURL}/signup/`, {
            username: username,
            email: email,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};

export const deleteUsers = async (userId, token) => {
    try {
        const response = await axios.delete(`${baseURLs}/users/${userId}/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting booking:", error);
        throw error;
    }
};
