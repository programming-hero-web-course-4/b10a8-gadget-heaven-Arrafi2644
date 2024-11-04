import React from 'react';
import HomeBanner from '../components/HomeBanner';
import HomeMain  from "../components/HomeMain";
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Outlet>
                
            </Outlet>
        </div>
    );
};

export default Home;