import React from 'react';

const ErrorMessage = ({ text1 = "Wrong credentials", text2 = "Invalid username or password" }) => {
    return (
        <div className='min-h-4 bg-error bg-opacity-10 border-error border p-1 text-center'>
            <p><strong>{text1}</strong></p>
            <p>{text2}</p>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, esse!</p> */}
        </div>
    );
};

export default ErrorMessage;