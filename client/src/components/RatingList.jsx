import { useState, useEffect } from 'react';
import UserRating from './UserRating';
import { getAllRatings } from '../services/ProductService';

function RatingList({ productId }) {
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        const fetchRatings = async () => {
            const data = await getAllRatings(productId);
            if(data) {
                setRatings(data);
            } else {
                console.log("No ratings found for this product.");
            }
        };

        fetchRatings();
    }, [productId]);

    return (
        <ul>
            {ratings.length > 0 ? (
                ratings.map((rating) => (
                    <li key={`rating_${rating.ratingId}`}>
                        <UserRating rating={rating} />
                    </li>
                ))
            ) : (
                <h3>No ratings found for this product.</h3>
            )}
        </ul>
    );
}

export default RatingList;