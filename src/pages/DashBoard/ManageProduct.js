import React from 'react';
import useTools from '../../Hooks/useTools';
import ProductRow from './ProductRow';

const ManageProduct = () => {
    const [parts, setParts] = useTools();
    return (
        <div className='mt-8'>
            <h2 className='mb-4'>Manage all product</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            parts.map((part, index) => <ProductRow
                                key={part._id}
                                part={part}
                                index={index}
                            ></ProductRow>)
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;