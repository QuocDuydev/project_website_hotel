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
        console.error("Error fetching hotel detail data:", error);
        throw error;
    }
};
export const postHotel = async (token, hotelData) => {
    try {
        const formData = new FormData();
        Object.keys(hotelData).forEach(key => {
            formData.append(key, hotelData[key]);
        });

        const response = await axios.post(`${baseURL}/hotels/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error posting hotel data:", error);
        throw error;
    }
};

export const putHotel = async (hotelId, token, hotelData) => {
    try {
        const formData = new FormData();
        Object.keys(hotelData).forEach(key => {
            formData.append(key, hotelData[key]);
        });

        const response = await axios.put(`${baseURL}/hotels/${hotelId}/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error putting hotel data:", error);
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
        console.error("Error deleting hotel:", error);
        throw error;
    }
};


