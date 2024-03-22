import axios from 'axios';

const baseURL = 'http://localhost:8000/api';

export const getBooking = async (token) => {
    try {
        const response = await axios.get(`${baseURL}/list-booking/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching booking data:", error);
        throw error;
    }
};
export const postBooking = async (token) => {
    try {
        const response = await axios.post(`${baseURL}/bookings/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching booking data:", error);
        throw error;
    }
};

export const deleteBooking = async (bookingId, token) => {
    try {
        const response = await axios.delete(`${baseURL}/bookings/${bookingId}/`, {
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