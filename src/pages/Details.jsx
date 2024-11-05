import React from 'react';
import { Link, Outlet, useLoaderData, useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import DetailsBanner from '../components/DetailsBanner';

const Details = () => {

    const params = useParams();
    const products = useLoaderData();
    const productId = (params.productId);
    // console.log(products);
    // console.log(productId);

    const currentProduct = products.find(product => product.product_id === productId)
    // console.log(currentProduct);


    return (
        <div className='relative'>
            <DetailsBanner></DetailsBanner>

            <div className='absolute top-1/2 w-full'>
                <ProductDetails currentProduct={currentProduct}></ProductDetails>
            </div>
        </div>
    );
};

export default Details;