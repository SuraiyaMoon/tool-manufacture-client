import React, { useEffect, useState } from 'react';
import useTools from '../../Hooks/useTools';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useTools();
    return (
        <div>
            <h3 className='text-3xl text-primary font-semibold'>Our Provided Products</h3>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-8'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>

        </div>
    );
};

export default Parts;