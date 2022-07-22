import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    let errorMessage;
    const navigate = useNavigate();
    const token = useToken(user || gUser);
    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [token, navigate]);

    if (error || gError) {
        errorMessage = <p>{error?.message.split(":")[1] || gError?.message.split(":")[1]} </p>
    }
    if (loading || updating) {
        return <p className='h-screen flex justify-center items-center'>
            Check email inbox or spam folder for verify email....
        </p>;
    }
    if (gLoading) {
        return <p className='h-screen flex justify-center items-center'>
            Loading....
        </p>;
    }

    const handleRegister = async () => {
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    return (
        <div class="card-body mx-auto w-[95%] md:w-1/2 lg:w-[30%]">
            <div className='md:shadow-xl md:px-5 md:py-10 md:border rounded-xl'>
                <h3 className='text-center font-bold text-xl'>Register</h3>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input onChange={e => setName(e.target.value)} type="text" placeholder="name" class="input input-bordered focus:outline-none" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input onChange={e => setEmail(e.target.value)} type="text" placeholder="email" class="input input-bordered focus:outline-none" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <div class="flex justify-between items-center input input-bordered">
                        <input className='outline-none' onChange={e => setPassword(e.target.value)} type={show ? "text" : "password"} placeholder="password" />
                        {
                            password &&
                            <button onClick={() => setShow(!show)} className='w-10 btn btn-xs'>{show ? "hide" : "show"}</button>
                        }
                    </div>
                    <p><small className='text-xs text-red-500'>{errorMessage && errorMessage}</small></p>


                </div>
                <div class="form-control mt-6">
                    <label class="label mx-auto">
                        <p>
                            <small>Have a account? <Link className='text-blue-500' to="/login">Login now!</Link></small>
                        </p>
                    </label>
                    <button onClick={handleRegister} class="btn btn-primary">Register</button>
                </div>
                <div class="divider">OR</div>
                <div className='flex justify-center items-center'>
                    <button onClick={() => signInWithGoogle()} className='btn btn-outline btn-secondary'>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;