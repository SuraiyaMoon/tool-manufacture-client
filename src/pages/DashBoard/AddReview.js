import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';



const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // fetch('http://localhost:5000/service')
    //     .then(res => res.json())

    const imageStorageKey = '1cb41f882b6d2bb9352a1f97c6742796';

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
                    const review = {
                        name: data.name,
                        email: data.email,
                        clientReview: data.review,
                        country: data.country,
                        img: img
                    }
                    fetch('http://localhost:5000/review', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast('Review added');
                                reset();
                            }
                            else {
                                toast.error('failed to added')
                            }
                        })

                }
            })
    }

    return (
        <div className='card w-96 bg-base-100  flex justify-center items-center'>
            <h2 className='text-xl'>Add a Review</h2>


            <form className='justify-center' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name", {
                        required: {
                            value: true,
                            message: "Name is required"
                        }
                    })} type="text" placeholder="Write your name" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", {
                        required: {
                            value: true,
                            message: "Email is required"
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid Email'
                        }
                    })} type="email" placeholder="Enter your email address" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 ">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <textarea {...register("review", {
                        required: {
                            value: true,
                            message: "Write Your review"
                        }
                    })} type="text" placeholder="Write Your review" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.review.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Country</span>
                    </label>
                    <input {...register("country", {
                        required: {
                            value: true,
                            message: "Write Your Country Name"
                        }
                    })} type="text" placeholder="Write Your review" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.country?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.country.message}</span>}
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

export default AddReview;