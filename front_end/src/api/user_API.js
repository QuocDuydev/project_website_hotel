import axios from 'axios';

const baseURL = 'http://localhost:8000/apis';

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