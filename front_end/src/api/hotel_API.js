import axios from 'axios';

const baseURL = 'http://localhost:8000/api';


export const getHotel = async () => {
    try {
        const response = await axios.get(`${baseURL}/hotels/`);
        return response.data;

    } catch (error) {
        console.error("Error fetching hotel data:", error);
        throw error;
    }
};

export const getHoteldetail = async (hotelId) => {
    try {
        const response = await axios.get(`${baseURL}/hotels/${hotelId}/`);
        return response.data;

    } catch (error) {
        console.error("Error fetching hotel data:", error);
        throw error;
    }
};

export const deleteHotel = async (hotelId, token) => {
    try {
        const response = await axios.delete(`${baseURL}/hotels/${hotelId}/`, {
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


