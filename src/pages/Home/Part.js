import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Part = ({ part }) => {
    const navigate = useNavigate();
    const { id } = useParams()
    const { _id, name, about, picture, price, minimumQuantity, availableQuantity } = part;
    const handleBuyTools = id => {
        console.log(id)
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card lg:max-w-lg shadow-xl">
            <figure><img className='w-1/2' src={picture} alt="tools" /></figure>
            <div className="card-body">
                <h2 className="text-2xl text-center">{name}</h2>
                <h3 className="text-xl">Price: $ {price}</h3>
                <h3 className="text-xl">MinimumQuantity: {minimumQuantity}</h3>
                <h3 className="text-xl">AvailableQuantity: {availableQuantity}</h3>
                <p>{about}</p>
                <div className="card-actions justify-end">
                    <button
                        part={part}
                        onClick={() => handleBuyTools(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;