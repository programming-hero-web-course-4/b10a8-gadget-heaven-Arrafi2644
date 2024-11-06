import React, { useEffect, useState } from 'react';
import { getProductsFromLocal, removeProductFromLocal } from '.';
import CartProduct from './CartProduct';

const WishList = () => {
    const [wishProducts, setWishProducts] = useState([])
    // const [isAddedWishlist, setIsAddedWishList] = useState(true)

    useEffect(() => {
        const products = getProductsFromLocal();
        setWishProducts(products);

    }, [])

    const handleRemoveProduct = (product) => {
        removeProductFromLocal(product);
        const wishlist = getProductsFromLocal();
        setWishProducts(wishlist)
    }

    return (
        <div>
            <div className='my-8'><h2 className='text-xl md:text-2xl text-center md:text-left font-bold'>WishList</h2></div>
            <div className='flex flex-col gap-6 mb-8'>
                {
                    wishProducts.map(item => <CartProduct key={item.product_id} item={item} handleRemoveProduct={handleRemoveProduct}></CartProduct>)
                }
            </div>
        </div>
    );
};

export default WishList;