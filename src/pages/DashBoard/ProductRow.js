import React from 'react';
import { toast } from 'react-toastify';
import useTools from '../../Hooks/useTools';

const ProductRow = ({ part, index }) => {
    const { name, _id } = part;
    const [parts, setParts] = useTools();


    //delete product function
    const handleProductDeleting = id => {
        const proceed = window.confirm('Are you want to proceed')
        if (proceed) {
            const url = `https://gentle-taiga-09287.herokuapp.com/tools/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const restProduct = parts.filter(part => part._id !== id)
                    setParts(restProduct)
                    toast.success('successfully deleted the product')
                })
        }

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td onClick={() => handleProductDeleting(_id)}><button className='text-white btn btn-error btn-xs'>Delete</button></td>

        </tr>
    );
};

export default ProductRow;