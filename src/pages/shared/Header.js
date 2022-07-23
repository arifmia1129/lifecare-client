import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsPhoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <p className='h-screen flex justify-center items-center'>Loading...</p>;
    }
    return (
        <div className='sticky top-0 z-20'>
            <div className='bg-primary lg:flex justify-around items-center p-5'>
                <div className='lg:flex items-center'>
                    <p className='flex items-center text-white  mx-1'>
                        <span className='mx-1'><AiFillPhone /></span>
                        <span className='mx-1'>+8809649676331</span>
                    </p>
                    <p className='hidden lg:block text-white border-r-2 mx-1 h-5'>
                    </p>
                    <p className='flex items-center text-white mx-1'>
                        <span className='mx-1'><BsPhoneFill /></span>
                        <span className='mx-1'>+8801849676331</span>
                    </p>
                    <p className='hidden lg:block text-white border-r-2 mx-1 h-5'>
                    </p>
                    <p className='flex items-center text-white mx-1'>
                        <span className='mx-1'><MdEmail /></span>
                        <a target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=+arif.vtti@gmail.com">Email</a>
                    </p>
                </div>
                <div className='flex items-center my-5 lg:my-0'>
                    <div className='mr-3 flex items-center'>
                        {
                            !user && <>
                                <p className='text-white mx-1'>
                                    <Link to="/login" className='mx-1'>Login</Link>
                                </p>
                                <p className=' text-white border-r-2 mx-1 h-5'>
                                </p>
                                <p className='text-white mx-1'>
                                    <Link to="/register" className='mx-1'>Register</Link>
                                </p>
                            </>
                        }
                        {
                            user && <p className='text-white mx-1 border-2 rounded-lg p-1'>
                                {user?.displayName}
                            </p>
                        }
                    </div>
                    <div className='ml-3 flex items-center'>
                        <p className='text-white mx-1'>
                            <a target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=+arif.vtti@gmail.com"><AiFillYoutube /></a>
                        </p>
                        <p className='text-white mx-1'>
                            <a target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=+arif.vtti@gmail.com"><AiFillFacebook /></a>
                        </p>
                        <p className='text-white mx-1'>
                            <a target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=+arif.vtti@gmail.com"><AiFillInstagram /></a>
                        </p>
                        <p className='text-white mx-1'>
                            <a target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=+arif.vtti@gmail.com"><AiFillLinkedin /></a>
                        </p>
                        {
                            user && <button onClick={() => signOut(auth)} className='mx-3 text-white border p-1 rounded-xl'>Sign out</button>
                        }
                    </div>
                </div>
                <div>
                    <Link className='font-bold text-xl bg-white p-2 rounded-lg' to="appointment">Appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;