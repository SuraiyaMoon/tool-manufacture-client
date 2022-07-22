import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://gentle-taiga-09287.herokuapp.com/user', {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h3>User {users.length}</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                            ></UserRow>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;