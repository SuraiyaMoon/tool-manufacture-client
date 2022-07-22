import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index }) => {
    const { tool, price, paid, _id } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{tool}</td>
            <td>$ {price}</td>
            <td>{(price && !paid) && <Link to={`/dashboard/payment/${_id}`}> <button className='btn btn-xs btn-success text-white'>Pay</button></Link>}</td>
            <td>{(price && paid) && <span className='text-success'>Paid</span>}</td>
            <td><button className='btn btn-xs '>Cancel order</button></td>

        </tr>
    );
};

export default OrderRow;