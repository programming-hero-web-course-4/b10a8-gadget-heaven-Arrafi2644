import React, { useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5"
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { getProductsFromLocal, handleGetProductsFromLocal, handleSetProductToLocal, setProductsToLocal } from '.';



const ProductDetails = ({ currentProduct }) => {
    // console.log(currentProduct);
    const { product_id, product_title, product_image, category, price, description, specification, availability, rating } = currentProduct;
    const [cartProducts, setCartProducts] = useState([])
    const [isAddedWishlist, setIsAddedWishList] = useState(false)
    
    const favoriteProducts = getProductsFromLocal()
    console.log(favoriteProducts);

    const handleAddToCart = (product) => {
        //    handleGetProductsFromLocal();
        handleSetProductToLocal(product)

    }

    const handleWishList = (product) => {
        setProductsToLocal(product)
        setIsAddedWishList(true)
    }


    return (
        <div className='p-8 bg-white rounded-2xl max-w-7xl w-11/12 mx-auto flex flex-col lg:flex-row gap-8'>
            <div className='w-2/5 lg:w-1/3 mx-auto lg:mx-0'>
                <img className='w-full' src={product_image} alt="" />
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='text-2xl md:text-3xl font-semibold'>{product_title}</h2>
                <p className='text-lg md:text-xl font-semibold text-gray-800'>Price: ${price}</p>
                <span className='bg-green-50 w-max border-[#309C08] border-2 px-4 py-[6px] text-[#309C08] rounded-3xl'>{availability ? 'In Stock' : 'Stock out'}</span>
                <p className='text-gray-400'>{description}</p>
                <div>
                    <span className='text-lg font-semibold text-gray-950'>Specification:</span>
                    <ol className='text-gray-400 mt-3'>
                        {
                            specification.map((item, index) => <li key={index}>{index + 1}.  {item}</li>)
                        }
                    </ol>
                </div>
                <div className='flex flex-col gap-3'>
                    <span className='flex items-center gap-1 text-lg font-semibold text-gray-950'>Rating <span className='text-yellow-400'><FaStar /></span></span>
                    <div className='flex gap-3 items-center'>
                        {/* <ul className='flex'>
                            <li className='text-yellow-400'><FaStar /></li>
                            <li className='text-yellow-400'><FaStar /></li>
                            <li className='text-yellow-400'><FaStar /></li>
                            <li className='text-yellow-400'><FaStar /></li>
                            <li className=''><FaRegStar /></li>
                        </ul> */}
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-yellow-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 h-4 bg-yellow-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-yellow-400" defaultChecked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 h-4  bg-yellow-400" defaultChecked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-yellow-400" />
                        </div>
                        <button className="btn rounded-2xl h-auto min-h-fit py-2">{rating}</button>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <Link onClick={() => handleAddToCart(currentProduct)} className='btn rounded-3xl text-white bg-[#9538E2] h-auto min-h-max px-4 py-2'>Add to Cart <span className='text-lg'><IoCartOutline /></span></Link>
                    <Link> <button disabled={isAddedWishlist} onClick={() => handleWishList(currentProduct)} className="text-gray-950 border font-medium p-2 text-lg rounded-full bg-white"><IoHeartOutline /></button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;