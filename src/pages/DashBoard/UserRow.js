import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }

        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success(`successfully make an admin`)
            })
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs'>Make admin</button>}</td>
            <td><button className='btn btn-xs'>Delete User</button></td>
        </tr>
    );
};

export default UserRow;