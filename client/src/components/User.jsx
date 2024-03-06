function User({ user }) {
    return (
        <>
            <h3>{user.firstName}</h3>
            <p>{user.email}</p>
        </>
    );
}

export default User;