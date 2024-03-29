import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="hero py-10 bg-primary text-white my-10 w-full">
            <div className="text-center">
                <div className='px-10'>
                    <div>
                        <h1 className="text-xl font-bold">Life Care's Health Blog</h1>
                        <p className='py-5'>We have many of blog about people health that written by our experienced doctor. We think all of blog help you for your good health.</p>
                        <Link to="/blog" className="border-2 rounded-xl px-5 py-2">View Blog</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;