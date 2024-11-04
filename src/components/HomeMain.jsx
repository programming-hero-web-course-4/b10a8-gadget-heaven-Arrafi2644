import React from 'react';
import Categories from './Categories';
import { Outlet } from 'react-router-dom';

const HomeMain = () => {
    return (
        <div className='mt-[180px] md:mt-[300px] lg:mt-[500px] mb-12 md:mb-16 lg:mb-24'>
            <h2 className='font-bold text-center text-2xl md:text-3xl text-gray-950'>Explore Cutting-Edge Gadgets</h2>

             <div className='grid grid-cols-5 gap-6 mt-8-'>
               <div className='col-span-1 border p-6 rounded-2xl bg-white'>
                 
                <Categories></Categories>
               </div>
               <div className='col-span-4 bg-white p-6 rounded-xl border'>
                   <Outlet></Outlet>
               </div>
             </div>
        </div>
    );
};

export default HomeMain;