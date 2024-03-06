import Rating from './Rating';

function RatingList() {

    const ratings = [
        {
            "ratingId": 1,
            "productId": 1,
            "userId": 1,
            "rating": 4.1,
            "createdAt": "2024-03-01T14:54:03.000Z",
            "updatedAt": "2024-03-01T14:54:03.000Z"
        },
        {
            "ratingId": 2,
            "productId": 2,
            "userId": 1,
            "rating": 3.5,
            "createdAt": "2024-03-01T14:54:42.000Z",
            "updatedAt": "2024-03-01T14:54:42.000Z"
        },
        {
            "ratingId": 3,
            "productId": 3,
            "userId": 3,
            "rating": 5,
            "createdAt": "2024-03-06T08:21:23.000Z",
            "updatedAt": "2024-03-06T08:21:23.000Z"
        }
    ]
    return (
        <ul>
            {ratings?.length > 0 ? (
                ratings.map((rating) => (
                    <li key = {`ratings_${rating.ratingId}`}>
                        <Rating rating={rating} />
                    </li>
                ))
            ) : ( 
                <h3>No users found</h3> 
            )}
        </ul>
    );
}

export default RatingList;