import React from 'react';

const ManageOrderRow = ({ index, order }) => {

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.tool}</td>
            <td><button className='btn btn-xs btn-success'>Shipped</button></td>
            <td><button className='btn btn-xs '>Cancel order</button></td>

        </tr>
    );
};

export default ManageOrderRow;