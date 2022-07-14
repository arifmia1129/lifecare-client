import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsPhoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 z-20'>
            <div className='bg-primary md:flex justify-around p-3'>
                <div className='md:flex items-center'>
                    <p className='flex items-center text-white  mx-1'>
                        <span className='mx-1'><AiFillPhone /></span>
                        <span className='mx-1'>+8809649676331</span>
                    </p>
                    <p className='hidden md:block text-white border-r-2 mx-1 h-5'>
                    </p>
                    <p className='flex items-center text-white mx-1'>
                        <span className='mx-1'><BsPhoneFill /></span>
                        <span className='mx-1'>+8801849676331</span>
                    </p>
                    <p className='hidden md:block text-white border-r-2 mx-1 h-5'>
                    </p>
                    <p className='flex items-center text-white mx-1'>
                        <span className='mx-1'><MdEmail /></span>
                        <a target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=+arif.vtti@gmail.com">Email</a>
                    </p>
                </div>
                <div className='flex items-center'>
                    <div className='mr-3 flex items-center'>
                        <p className='text-white mx-1'>
                            <Link to="/login" className='mx-1'>Login</Link>
                        </p>
                        <p className=' text-white border-r-2 mx-1 h-5'>
                        </p>
                        <p className='text-white mx-1'>
                            <Link to="/register" className='mx-1'>Register</Link>
                        </p>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;