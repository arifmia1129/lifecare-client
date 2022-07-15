import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, rError] = useSendPasswordResetEmail(
        auth
    );
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    let errorMessage;
    const navigate = useNavigate();

    useEffect(() => {
        if (user || gUser) {
            navigate("/");
        }
    }, [user, gUser, navigate])

    if (error || gError || rError) {
        errorMessage = <p>{error?.message.split(":")[1] || gError?.message.split(":")[1] || rError?.message.split(":")[1]} </p>
    }
    if (loading || gLoading || sending) {
        return <p className='h-screen flex justify-center items-center'>Loading...</p>;
    }



    const handleLogin = () => {
        signInWithEmailAndPassword(email, password);
    }
    const handlePasswordReset = async () => {
        await sendPasswordResetEmail(email);
        if (email) {
            toast.success("Check inbox or spam folder!");
        }
    }
    return (
        <div class="card-body mx-auto w-[95%] md:w-1/2 lg:w-[30%]">
            <div className='md:shadow-xl md:px-5 md:py-10 md:border rounded-xl'>
                <h3 className='text-center font-bold text-xl'>Login</h3>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input autoComplete={false} onChange={e => setEmail(e.target.value)} type="text" placeholder="email" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input onChange={e => setPassword(e.target.value)} type={show ? "text" : "password"} placeholder="password" class="input input-bordered" />
                    <button onClick={() => setShow(!show)} className='w-10 btn btn-xs relative right-[-190px] md:right-[-220px] lg:right-[-220px] top-[-35px]'>{show ? "hide" : "show"}</button>
                    <p><small className='text-xs text-red-500'>{errorMessage && errorMessage}</small></p>
                    <label class="label">
                        <button onClick={handlePasswordReset} className='text-xs'>Forgot password?</button>
                    </label>

                </div>
                <div class="form-control mt-6">
                    <label class="label mx-auto">
                        <p>
                            <small>New to Life Care? <Link className='text-blue-500' to="/register">Register now!</Link></small>
                        </p>
                    </label>
                    <button onClick={handleLogin} class="btn btn-primary">Login</button>
                </div>
                <div class="divider">OR</div>
                <div className='flex justify-center items-center'>
                    <button onClick={() => signInWithGoogle()} className='btn btn-outline btn-primary'>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;