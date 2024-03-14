import { useState, useEffect } from 'react';
import { List, ListItem, Box } from '@mui/material';
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
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {ratings.length > 0 ? (
                ratings.map((rating, index) => (
                    <Box key={`rating_${rating.ratingId}`} sx={{ borderBottom: index !== ratings.length ? '.1rem solid #e0e0e0' : 'none' }}>
                        <ListItem>
                            <UserRating rating={rating} />
                        </ListItem>
                    </Box>  
                ))
            ) : (
                <ListItem>
                    <h3>No ratings found for this product.</h3>
                </ListItem>
            )}
        </List>
    );
}

export default RatingList;