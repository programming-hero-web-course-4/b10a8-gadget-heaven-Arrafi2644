import React from 'react';
import HomeBanner from '../components/HomeBanner';
import HomeMain  from "../components/HomeMain";
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='max-w-7xl w-11/12 mx-auto'>
            <HomeBanner></HomeBanner>
            <Outlet>
                
            </Outlet>
        </div>
    );
};

export default Home;