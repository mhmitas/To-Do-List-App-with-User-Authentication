import React from 'react';
//import reactLogo from './assets/react.svg'
import calenderLogo from '../../assets/calendar.png';
import bg_image from '../../assets/blue-smooth.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
    const currentDate = new Date().toDateString();

    return (
        <div className='flex flex-col justify-between min-h-[calc(100vh-70px)] bg-cover p-4'>
            <section className=''>
                <div className='space-y-2 my-8 '>
                    <div className='text-3xl font-semibold '>T O D O</div>
                    <p>{currentDate}</p>
                </div>
                <section className='flex items-center justify-center '>
                    <div className='text-center shadow-xl space-y-3 rounded-md p-10 pt-3'>
                        <img className='w-52' src={calenderLogo} alt="" />
                        <h3 className='text-2xl font-semibold'>Focus on your day</h3>
                        <p>Get thinks done with TODO, <br />a list that refreshes every day</p>
                        <br />
                        <Link className='btn' to="/tasks">
                            <button>Add a task</button>
                        </Link>
                    </div>
                </section>
            </section>

        </div>
    );
};

export default Home;