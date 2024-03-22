import axios from 'axios';

const baseURL = 'http://localhost:8000/api';


export const getRoominHotel = async (hotelId, token) => {
    try {
        const response = await axios.get(`${baseURL}/hotels/${hotelId}/rooms/`);
        return response.data;

    } catch (error) {
        console.error("Error fetching hotel data:", error);
        throw error;
    }
};