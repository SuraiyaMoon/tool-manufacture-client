import React from 'react';
import useOrder from '../../Hooks/useOrder';
import ManageOrderRow from './ManageOrderRow';

const ManageOrder = () => {
    const [orders] = useOrder();


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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => <ManageOrderRow
                                key={order._id}
                                order={order}
                                index={index}>
                            </ManageOrderRow>
                            )}




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;