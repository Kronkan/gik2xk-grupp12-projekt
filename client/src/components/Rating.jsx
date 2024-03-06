function Rating({ rating }) {
    return (
        <>
            <h3>{rating.rating}</h3>
            <p>{rating.user.firstName}</p>
            <p>{rating.createdAt}</p>
        </>
    );
}

export default Rating;