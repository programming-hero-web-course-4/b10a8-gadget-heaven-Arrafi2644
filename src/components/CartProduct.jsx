import React, { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
// import { handleRemoveProduct } from '.';


const CartProduct = ({item, handleRemoveProduct}) => {

    // console.log(item);
    const {product_id, product_title, product_image, category, price, description, specification, availability, rating } = item;
    const [totalPrice, setTotalPrice] = useState(0);
    
    return (
        <div className=' flex justify-between gap-8 p-8 bg-white rounded-2xl'>
            <div className='flex flex-col md:flex-row gap-8 '>
            <div className='w-[200px]'>
            <img className='max-w-[200px] max-h-[140px] object-cover' src={product_image} alt="" />
            </div>
            <div className='flex flex-col gap-4'>
            <h2 className='text-xl md:text-2xl text-gray-950 font-semibold'>{product_title}</h2>
            <p className='text-base font-medium text-gray-400'>{description}</p>
            <p className='font-bold text-gray-800'>Price: $ {price}</p>
            </div>
            </div>
            <div className='text-2xl text-red-500'>
            <button onClick={()=>handleRemoveProduct(item)}><IoCloseCircleOutline /></button>
            </div>
        </div>
    );
};

export default CartProduct;