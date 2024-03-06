function Rating({ rating }) {
    return (
        <>
            <h3>{rating.rating}</h3>
            <p>{rating.userId.firstName}</p>
        </>
    );
}

export default Rating;