import Rating from './Rating';

function RatingList() {

    const ratings = [
        {
            "rating": 5,
            "createdAt": "2024-03-01T14:57:20.000Z",
            "user": {
                "firstName": "Tomatförsäljaren"
            }
        },
        {
            "rating": 5,
            "createdAt": "2024-03-01T14:57:30.000Z",
            "user": {
                "firstName": "Tomatförsäljaren"
            }
        },
        {
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