import React from 'react';
//import reactLogo from './assets/react.svg'
import calenderLogo from '../../assets/calendar.png'
import { Link } from 'react-router-dom';

const Home = () => {
    const currentDate = new Date().toDateString();

    return (
        <div className='flex flex-col justify-between min-h-[calc(100vh-64px)] '>
            <section className=''>
                <div className='space-y-2 my-8 '>
                    <div className='text-3xl font-semibold'>T O D O</div>
                    <p>{currentDate}</p>
                </div>
                <section className='flex items-center justify-center '>
                    <div className='text-center shadow-xl space-y-3 bg-[#292929] bg-opacity-60 rounded-md p-10 pt-3'>
                        <img className='w-52' src={calenderLogo} alt="" />
                        <h3 className='text-2xl font-semibold'>Focus on your day</h3>
                        <p>Get thinks done with TODO, <br />a list that refreshes every day</p>
                        <br />
                        <Link to="/tasks">
                            <button className='my-btn'>Add a task</button>
                        </Link>
                    </div>
                </section>
            </section>
            {/* <div className='p-4 my-4'>
                <input
                    className='w-full bg-[#292929] bg-opacity-60 p-3 rounded-md border border-[#5b68f5]'
                    type="text"
                    placeholder="Add a task"
                />
            </div> */}
        </div>
    );
};

export default Home;