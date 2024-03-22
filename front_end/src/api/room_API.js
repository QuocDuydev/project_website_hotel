import axios from 'axios';

const baseURL = 'http://localhost:8000/api';

export const getRoom = async (selectedHotelId,token) => {
    try {
        const response = await axios.get(`${baseURL}/rooms/`,{
            params: { hotel: selectedHotelId }
        });
        return response.data;

    } catch (error) {
        console.error("Error fetching hotel data:", error);
        throw error;
    }
};