import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';



const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    //img key for uploading
    const imageStorageKey = '1cb41f882b6d2bb9352a1f97c6742796';


    //form submitting
    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        img: img,
                        availableQuantity: data.availableQuantity,
                        minimumQuantity: data.minimumQuantity,
                        about: data.about
                    }
                    fetch('https://gentle-taiga-09287.herokuapp.com/tool', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast('Product added');
                                reset();
                            }
                            else {
                                toast.error('failed to added')
                            }

                        })

                }
            })
        console.log(data)
    }

    return (
        <div className='card w-96 bg-base-100  flex justify-center items-center'>
            <h2 className='text-xl'>Add a Product</h2>


            <form className='justify-center' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input {...register("name", {
                        required: {
                            value: true,
                            message: "Name is required"
                        }
                    })} type="text" placeholder="Write product name" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input {...register("price", {
                        required: {
                            value: true,
                            message: "Write product price"
                        }
                    })} type="number" placeholder="Write Product price" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.price.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Purchase minimumQuantity</span>
                    </label>
                    <input {...register("minimumQuantity", {
                        required: {
                            value: true,
                            message: "Write minimumQuantity"
                        }
                    })} type="number" placeholder="Write Product minimumQuantity" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.minimumQuantity?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.minimumQuantity.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product availableQuantity</span>
                    </label>
                    <input {...register("availableQuantity", {
                        required: {
                            value: true,
                            message: "Write minimumQuantity"
                        }
                    })} type="number" placeholder="Write Product minimumQuantity" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.availableQuantity.message}</span>}
                    </label>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register("about", {
                        required: {
                            value: true,
                            message: "Write Product description"
                        }
                    })} type="text" placeholder="Write Product description " className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.about?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.about.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input {...register("image", {
                        required: {
                            value: true,
                            message: "Image is required"
                        }
                    })} type="file" placeholder="Write your name" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.image.message}</span>}
                    </label>
                </div>
                <input className='text-white btn w-full max-w-xs mt-4' value="Add" type="submit" />
            </form>

        </div>
    );
};

export default AddProduct;