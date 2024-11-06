import React from 'react';

const ErrorPage = () => {
    return (
        <div className=' h-screen flex flex-col justify-center items-center w-full'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-950'>Status: 404</h2>
            <p className='text-lg'>Page Not Found</p>
        </div>
    );
};

export default ErrorPage;