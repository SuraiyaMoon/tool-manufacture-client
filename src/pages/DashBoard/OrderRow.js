import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, deletingOrder }) => {
    const { tool, price, paid, _id, transactionId, } = order;



    return (
        <tr>
            <th>{index + 1}</th>
            <td>{tool}</td>
            <td>$ {price}</td>
            <td>{(price && !paid) && <div className='flex items-center'>
                <Link to={`/dashboard/payment/${_id}`}> <button className='btn btn-xs btn-success text-white mx-8'>Pay</button></Link>
                <button onClick={() => deletingOrder(_id)} className='btn btn-xs '>Cancel order</button>

            </div>}</td>
            <td>{(price && paid) && <>
                <span className='text-success'>Paid</span>
                <p>Transaction id: {transactionId}</p>
            </>}</td>

        </tr>
    );
};

export default OrderRow;