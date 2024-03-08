// import MeanRating from './MeanRating';
import MeanRating from './MeanRating';
import UserRating from './UserRating';

function RatingList() {

    const ratings = [
        {   
            "productId": 3,
            "rating": 5,
            "createdAt": "2024-03-01T14:57:20.000Z",
            "user": {
                "firstName": "Tomatförsäljaren"
            }
        },
        {   
            "productId": 3,
            "rating": 5,
            "createdAt": "2024-03-01T14:57:30.000Z",
            "user": {
                "firstName": "Tomatförsäljaren"
            }
        },
        {   
            "productId": 3,
            "rating": 5,
            "createdAt": "2024-03-01T15:11:25.000Z",
            "user": {
                "firstName": "Dillförsäljaren"
            }
        },
        {
            "rating": 3.5,
            "createdAt": "2024-03-06T13:01:11.000Z",
            "user": {
                "firstName": "Dillförsäljaren"
            }
        },
        {
            "rating": 3.8,
            "createdAt": "2024-03-06T13:01:23.000Z",
            "user": {
                "firstName": "CrazyCatLady"
            }
        },
        {
            "rating": 4.1,
            "createdAt": "2024-03-06T13:00:41.000Z",
            "user": {
                "firstName": "CrazyCatLady"
            }
        },
        {
            "rating": 3.2,
            "createdAt": "2024-03-06T13:00:59.000Z",
            "user": {
                "firstName": "Dillförsäljaren"
            }
        }
    ]

    return (
        <ul>
            {ratings?.length > 0 ? (
                ratings.map((rating) => (
                    <li key = {`ratings_${rating.ratingId}`}>
                        <UserRating rating={rating} />
                        <MeanRating ratings={ratings} productId={rating.productId} />
                    </li>
                ))
            ) : ( 
                <h3>No users found</h3> 
            )}
        </ul>
    );
}

export default RatingList;