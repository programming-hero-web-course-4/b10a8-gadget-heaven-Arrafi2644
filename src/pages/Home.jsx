import React from 'react';
import HomeBanner from '../components/HomeBanner';
import HomeMain  from "../components/HomeMain";
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div className='max-w-7xl w-11/12 mx-auto'>
            <HomeBanner></HomeBanner>
            <Outlet>
                
            </Outlet>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    );
};

export default Home;