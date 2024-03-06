import User from "./User";

function UserList() {
    const users =
    [
        {
            "userId": 1,
            "firstName": "Tomatförsäljaren",
            "lastName": "Stabforsmo Norell",
            "email": "thsta@du.se",
            "password": "Bajshög3456",
            "createdAt": "2024-03-01T14:54:03.000Z",
            "updatedAt": "2024-03-01T14:54:03.000Z"
        },
        {
            "userId": 2,
            "firstName": "Dillförsäljaren",
            "lastName": "Fille Lindgren Dewari",
            "email": "filil@du.se",
            "password": "dillsås3456",
            "createdAt": "2024-03-01T14:54:42.000Z",
            "updatedAt": "2024-03-01T14:54:42.000Z"
        },
        {
            "userId": 3,
            "firstName": "CrazyCatLady",
            "lastName": "Tlili",
            "email": "motli@du.se",
            "password": "Shiela<3VixieYAY",
            "createdAt": "2024-03-06T08:21:23.000Z",
            "updatedAt": "2024-03-06T08:21:23.000Z"
        }
    ]

    return (
        <ul>
            {users?.length > 0 ? (
                users.map((user) => (
                    <li key = {`users_${user.userId}`}>
                        <User user={user} />
                    </li>
                ))
            ) : ( 
                <h3>No users found</h3> 
            )}
        </ul>
    );
}

export default UserList;