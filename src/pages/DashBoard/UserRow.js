import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://gentle-taiga-09287.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }

        })

            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }

                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {

                    toast.success(`successfully make an admin`)
                }
                else {

                }
                console.log(data)

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