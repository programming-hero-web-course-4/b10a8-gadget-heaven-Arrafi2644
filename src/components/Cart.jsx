// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { getProductsFromLocal, handleGetProductsFromLocal, handleRemoveProductFromLocal } from '.';
import CartProduct from './CartProduct';

const Cart = () => {
 
    const [products, setProducts] = useState([]);

   useEffect(()=>{
       const cartList = handleGetProductsFromLocal();
       setProducts(cartList)

   }, [])

   const handleRemoveProduct = (product) => {
    handleRemoveProductFromLocal(product)
    const cartList = handleGetProductsFromLocal();
    setProducts(cartList)
   }

   const handleShort = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price)
    setProducts(sortedProducts)
   }

    const allPrices =  products.map(p => p.price);
    // console.log(allPrices);
    
    const totalPrice = allPrices.reduce((prev, current) => prev + current, 0)
//    console.log(totalPrice);

    return (
        <div className='my-8'>
            <div className='flex justify-between items-center mb-8'>
                <div><h2 className='text-xl md:text-2xl font-bold'>Cart</h2></div>
                <div className='flex gap-4 items-center'>
                    <h3 className='text-xl md:text-2xl font-bold'>Total Price: $ {totalPrice}</h3>
                    <button onClick={handleShort} className="btn btn-outline rounded-3xl text-[#9538E2] hover:bg-[#9538E2] hover:text-white">Sort by Price</button>
                    <button className="btn active rounded-3xl">Purchase</button>
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                {
                    products.map(item => <CartProduct key={item.product_id} item={item} handleRemoveProduct={handleRemoveProduct}></CartProduct>)
                }
            </div>
        </div>
    );
};

export default Cart;