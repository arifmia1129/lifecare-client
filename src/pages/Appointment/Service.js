import React from 'react';
import { useForm } from 'react-hook-form';

const Service = ({ setService, setServiceStatus }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        setService(data);
        setServiceStatus(true);
    };
    return (
        <div className='my-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Please select service</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10 md:px-10 border-b py-5'>
                    <div>
                        <label class="label">
                            <span class="label-text font-bold text-primary">Branch</span>
                        </label>
                        <select {...register("branch", {
                            required: {
                                value: true,
                                message: "Branch is required"
                            }
                        })} defaultValue="" class="select select-bordered w-64">
                            <option disabled value="">Branch</option>
                            <option value="Gobindaganj">Gobindaganj</option>
                            <option value="Kochashahar">Kochashahar</option>
                        </select>
                        <label class="label">
                            <span class="label-text-alt text-red-500">
                                {errors.branch?.type === 'required' && errors.branch.message}
                            </span>
                        </label>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text font-bold text-primary">Department</span>
                        </label>
                        <select {...register("department", {
                            required: {
                                value: true,
                                message: "Department is required"
                            }
                        })} defaultValue="" class="select select-bordered w-64">
                            <option disabled value="">Department</option>
                            <option value="Psychologist">Psychologist</option>
                            <option value="Counselor">Counselor</option>
                            <option value="ENT">ENT</option>
                            <option value="Sexual">Sexual</option>
                        </select>
                        <label class="label">
                            <span class="label-text-alt text-red-500">
                                {errors.department?.type === 'required' && errors.department.message}
                            </span>
                        </label>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text font-bold text-primary">Session length</span>
                        </label>
                        <select {...register("session", {
                            required: {
                                value: true,
                                message: "Session length is required"
                            }
                        })} defaultValue="" class="select select-bordered w-64">
                            <option disabled value="">Length</option>
                            <option value="10">10 min</option>
                            <option value="15">15 min</option>
                        </select>
                        <label class="label">
                            <span class="label-text-alt text-red-500">
                                {errors.session?.type === 'required' && errors.session.message}
                            </span>
                        </label>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text font-bold text-primary">Consultant</span>
                        </label>
                        <select {...register("consultant", {
                            required: {
                                value: true,
                                message: "Consultant is required"
                            }
                        })} defaultValue="" class="select select-bordered w-64">
                            <option disabled value="">Consultant</option>
                            <option value="Binu">Dr. Binu</option>
                            <option value="Arif">Dr. Arif</option>
                        </select>
                        <label class="label">
                            <span class="label-text-alt text-red-500">
                                {errors.consultant?.type === 'required' && errors.consultant.message}
                            </span>
                        </label>
                    </div>
                </div>
                <input className="btn btn-primary mt-5 px-5" value="Next" type="submit" />
            </form>

        </div>
    );
};

export default Service;