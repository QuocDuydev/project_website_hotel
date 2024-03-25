import axios from 'axios';

const baseURL = 'http://localhost:8000/api';

export const getRoom = async (token) => {
    try {
        const response = await axios.get(`${baseURL}/rooms/`);
        return response.data;

    } catch (error) {
        console.error("Error fetching hotel data:", error);
        throw error;
    }
};
export const getRoominHotel = async (hotelId, token) => {
    try {
        const response = await axios.get(`${baseURL}/hotels/${hotelId}/rooms/`);
        return response.data;

    } catch (error) {
        console.error("Error fetching hotel data:", error);
        throw error;
    }
};
export const getRoomdetailinHotel = async (hotelId, roomId, token) => {
    try {
        const response = await axios.get(`${baseURL}/hotels/${hotelId}/rooms/${roomId}`);
        return response.data;

    } catch (error) {
        console.error("Error fetching hotel data:", error);
        throw error;
    }
};