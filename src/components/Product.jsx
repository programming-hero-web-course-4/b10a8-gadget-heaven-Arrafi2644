import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    // console.log(product);

    const {product_id, product_title, product_image, category, price, description, specification, availability, rating } = product;
    return (
        <div className='border rounded-2xl p-6 flex flex-col gap-4'>
            <img className='w-auto max-h-[200px] object-cover ' src={product_image} alt="" />
            <h2 className='text-2xl text-gray-950 font-semibold'>{product_title}</h2>
            <p className='flex-grow text-gray-500 font-medium text-xl'>Price: ${price}</p>
            <Link to={`/details/${product_id}`} ><button className='btn btn-outline h-auto min-h-max py-3 rounded-3xl border-[#9538E2] text-[#9538E2]'>View Details</button></Link>
        </div>
    );
};

export default Product;