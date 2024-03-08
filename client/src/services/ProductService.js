import axios from './api';

export async function getAllRatings(productId) {
    try {
        const response = await axios.get(`/ratings?productId=${productId}`); // Antag en query parameter för filtrering
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
