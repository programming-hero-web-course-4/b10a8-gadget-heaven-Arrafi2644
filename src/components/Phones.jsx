import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Phones = () => {
    const allProducts = useLoaderData([]);
    const phones = allProducts.filter(product => product.category === 'Phones')
    console.log(phones);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                phones.map(product => <Product key={product.product_id} product={product}></Product>)
            }
        </div>
    );
};

export default Phones;