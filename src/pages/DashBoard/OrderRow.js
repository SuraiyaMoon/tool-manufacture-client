import React from 'react';

const OrderRow = ({ order, index }) => {
    const { tool } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{tool}</td>
            <td><button className='btn btn-xs btn-success'>Pay</button></td>
            <td><button className='btn btn-xs '>Cancel order</button></td>

        </tr>
    );
};

export default OrderRow;