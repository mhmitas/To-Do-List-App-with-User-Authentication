import React from 'react';
import Navbar from '../components/home/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className=' max-w-[1440px] mx-auto'>
            <Navbar></Navbar>
            <div className='max-w-[1440px] mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;