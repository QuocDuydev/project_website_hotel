import axios from 'axios';

const baseURL = 'http://localhost:8000/api';


export const getHotel = async (token) => {
    try {
        const response = await axios.get(`${baseURL}/hotels/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;

    } catch (error) {
        console.error("Error fetching hotel data:", error);
        throw error;
    }
};

