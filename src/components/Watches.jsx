import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Watches = () => {
    const allProducts = useLoaderData();
    const watches = allProducts.filter(product => product.category === 'Smart Watches')
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                watches.map(product => <Product key={product.product_id} product={product}></Product>)
            }
        </div>
    );
};

export default Watches;