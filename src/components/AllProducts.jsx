import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const AllProducts = () => {

    const allProducts = useLoaderData();

    return (
        <div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    allProducts.map(product => <Product product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;