import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const PowerBanks = () => {
    const allProducts = useLoaderData();
    const powerBanks = allProducts.filter(product => product.category === 'Power Banks')
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                powerBanks.map(product => <Product key={product.product_id} product={product}></Product>)
                
            }
        </div>
    );
};

export default PowerBanks;