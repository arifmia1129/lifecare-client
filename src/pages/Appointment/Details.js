import React from 'react';
import { useForm } from 'react-hook-form';
const Details = ({ setDetails, setDetailsStatus }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setDetails(data);
        setDetailsStatus(true);
    }
    return (
        <div className='my-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Please give your information</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:px-10 border-b py-5'>
                    <div>
                        <label class="label">
                            <span class="label-text font-bold text-primary">Patient</span>
                        </label>
                        <input {...register("patient", {
                            required: {
                                value: true,
                                message: "Patient is required"
                            }
                        })} placeholder="Patient name" class="input input-bordered w-64" />
                        <label class="label">
                            <span class="label-text-alt text-red-500">
                                {errors.patient?.type === 'required' && errors.patient.message}
                            </span>
                        </label>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text font-bold text-primary">Phone</span>
                        </label>
                        <input {...register("phone", {
                            required: {
                                value: true,
                                message: "Phone is required"
                            }
                        })} placeholder="Phone number" class="input input-bordered w-64" />
                        <label class="label">
                            <span class="label-text-alt text-red-500">
                                {errors.phone?.type === 'required' && errors.phone.message}
                            </span>
                        </label>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text font-bold text-primary">Address</span>
                        </label>
                        <input {...register("address", {
                            required: {
                                value: true,
                                message: "Address is required"
                            }
                        })} placeholder="Address" class="input input-bordered w-64" />
                        <label class="label">
                            <span class="label-text-alt text-red-500">
                                {errors.address?.type === 'required' && errors.address.message}
                            </span>
                        </label>
                    </div>
                </div>
                <input className="btn btn-primary mt-5 px-5" value="Next" type="submit" />
            </form>
        </div>
    );
};

export default Details;