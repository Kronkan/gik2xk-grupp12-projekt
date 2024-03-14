import { useState, useEffect } from 'react';
import { Divider } from '@mui/material';
import UserRating from './UserRating';
import { getAllRatings } from '../services/ProductService';

const style = {
    borderBottom: '1px solid',
    borderColor: 'divider',
    listStyle: 'none'
}

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
                    <li key={`rating_${rating.ratingId}`} style={style}>
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