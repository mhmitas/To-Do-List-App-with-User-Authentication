import React from 'react';
import Navbar from '../components/home/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-[1440px] mx-auto px-4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;