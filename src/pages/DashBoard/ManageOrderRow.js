import React from 'react';

const ManageOrderRow = ({ index, order }) => {
    const { paid, status } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.tool}</td>
            {
                paid ? <td><button className='btn btn-xs btn-success text-white'>{status}</button></td>
                    :
                    <>
                        <td><button className='btn btn-xs btn-success text-white'>Unpaid</button></td>

                        <td><button className='btn btn-xs text-white'>Cancel order</button></td>
                    </>
            }


        </tr>
    );
};

export default ManageOrderRow;