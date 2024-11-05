import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Chargers = () => {
    const allProducts = useLoaderData();
    const chargers = allProducts.filter(product => product.category === 'Chargers')
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                chargers.map(product => <Product key={product.product_id} product={product}></Product>)
                
            }
        </div>
    );
};

export default Chargers;