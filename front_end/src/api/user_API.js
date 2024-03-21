import axios from 'axios';

const baseURL = 'http://localhost:8000/api';

export const postUser = async (token) => {
    try {
        const response = await axios.post(`${baseURL}/signup/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
    });
        return response.data;
    } catch (error) {
        console.error("Error fetching signup data:", error);
        throw error;
    }
};