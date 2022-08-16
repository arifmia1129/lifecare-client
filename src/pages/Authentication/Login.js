import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const location = useLocation();
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
    const from = location.state?.from?.pathname || "/";
    const token = useToken(user || gUser);
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from]);

    const handleLogin = () => {
        localStorage.removeItem("token");
        signInWithEmailAndPassword(email, password);
    }
    const handlePasswordReset = async () => {
        await sendPasswordResetEmail(email);
        if (email) {
            toast.success("Check inbox or spam folder!");
        }
    }

    if (error || gError || rError) {
        errorMessage = <p>{error?.message.split(":")[1] || gError?.message.split(":")[1] || rError?.message.split(":")[1]} </p>
    }
    if (loading || gLoading || sending) {
        return <p className='h-screen flex justify-center items-center'>Loading...</p>;
    }


    return (
        <div className="card-body mx-auto w-[95%] md:w-1/2 lg:w-[30%]">
            <div className='md:shadow-xl md:px-5 md:py-10 md:border rounded-xl'>
                <h3 className='text-center font-bold text-xl'>Login</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input autoComplete={false} onChange={e => setEmail(e.target.value)} type="text" placeholder="email" className="input input-bordered focus:outline-none" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="flex justify-between items-center input input-bordered">
                        <input className='outline-none' onChange={e => setPassword(e.target.value)} type={show ? "text" : "password"} placeholder="password" />
                        {
                            password &&
                            <button onClick={() => setShow(!show)} className='w-10 btn btn-xs'>{show ? "hide" : "show"}</button>
                        }
                    </div>
                    <p><small className='text-xs text-red-500'>{errorMessage && errorMessage}</small></p>
                    <label className="label">
                        <button onClick={handlePasswordReset} className='text-xs'>Forgot password?</button>
                    </label>

                </div>
                <div className="form-control mt-6">
                    <label className="label mx-auto">
                        <p>
                            <small>New to Life Care? <Link className='text-blue-500' to="/register">Register now!</Link></small>
                        </p>
                    </label>
                    <button onClick={handleLogin} className="btn btn-primary">Login</button>
                </div>
                <div className="divider">OR</div>
                <div className='flex justify-center items-center'>
                    <button onClick={() => {
                        localStorage.removeItem("token");
                        signInWithGoogle();
                    }} className='btn btn-outline btn-primary'>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;