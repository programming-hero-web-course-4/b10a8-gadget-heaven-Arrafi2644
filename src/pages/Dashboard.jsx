import React from 'react';
import DashBanner from '../components/DashBanner';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <DashBanner></DashBanner>
            <div className='max-w-7xl w-11/12 mx-auto'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;