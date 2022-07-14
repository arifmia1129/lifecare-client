import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleRegister = () => {
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div class="card-body mx-auto w-[95%] md:w-1/2 lg:w-[30%]">
            <div className='md:shadow-xl md:px-5 md:py-10 md:border rounded-xl'>
                <h3 className='text-center font-bold text-xl'>Register</h3>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input onChange={e => setName(e.target.value)} type="text" placeholder="name" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input onChange={e => setEmail(e.target.value)} type="text" placeholder="email" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input onChange={e => setPassword(e.target.value)} type={show ? "text" : "password"} placeholder="password" class="input input-bordered" />
                    <button onClick={() => setShow(!show)} className='w-10 btn btn-xs relative right-[-190px] md:right-[-220px] lg:right-[-220px] top-[-35px]'>{show ? "hide" : "show"}</button>
                    <label class="label">
                        <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                    </label>

                </div>
                <div class="form-control mt-6">
                    <label class="label mx-auto">
                        <p>
                            <small>New to Life Care? <Link className='text-blue-500' to="">Register now!</Link></small>
                        </p>
                    </label>
                    <button onClick={handleRegister} class="btn btn-primary">Login</button>
                </div>
                <div class="divider">OR</div>
                <div className='flex justify-center items-center'>
                    <button className='btn btn-outline btn-secondary'>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;