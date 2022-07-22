import React from 'react';

const ProductRow = ({ part, index }) => {
    const { name } = part;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td><button className='text-white btn btn-error btn-xs'>Delete</button></td>

        </tr>
    );
};

export default ProductRow;