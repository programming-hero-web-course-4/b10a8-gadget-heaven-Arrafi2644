import React from 'react';
import { Link, Outlet, useLoaderData, useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';

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
            <div className="py-8 bg-[#9538E2] mb-[460px] ">
                <div className="w-11/12 md:h-4/5 lg:w-3/5 mx-auto text-white text-center ">
                    <h2 className=" font-bold text-2xl md:3xl mb-4">Dashboard</h2>
                    <p className="pb-[200px]">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>

            </div>
            <div className='absolute top-1/2 w-full'>
                <ProductDetails currentProduct={currentProduct}></ProductDetails>

            </div>
        </div>
    );
};

export default Details;