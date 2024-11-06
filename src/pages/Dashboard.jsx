import React from 'react';
import DashBanner from '../components/DashBanner';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
    return (
        <div>
            <DashBanner></DashBanner>
            <div className='max-w-7xl w-11/12 mx-auto'>
            <Outlet></Outlet>
            </div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard - Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    );
};

export default Dashboard;