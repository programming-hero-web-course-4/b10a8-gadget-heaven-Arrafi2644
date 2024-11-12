// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { getProductsFromLocal, handleGetProductsFromLocal, handleRemoveProductFromLocal } from '.';
import CartProduct from './CartProduct';
import { toast } from 'react-toastify';
import modalImage from '../assets/Group.png'
import { Link, useNavigate } from 'react-router-dom';


const Cart = () => {

    const [products, setProducts] = useState([]);
    const [isPurchase, setIsPurchase] = useState(false);

    useEffect(() => {
        const cartList = handleGetProductsFromLocal();
        setProducts(cartList)
        // console.log(products);
        if(cartList.length < 1){
            setIsPurchase(true)
        }else{
            setIsPurchase(false)
        }
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

    const navigate = useNavigate();
    const handlePurchase = () => {
        const products = [];
        setProducts(products)
         localStorage.removeItem('cart');
         setIsPurchase(true);
         navigate('/')
    }


    const price = products?.reduce((acc, current)=>{
       return acc + current.price;
    }, 0)


    // console.log(price);


    return (
        <div className='my-8'>
            <div className='flex gap-6 flex-col md:flex-row justify-between items-center mb-8'>
                <div><h2 className='text-xl md:text-2xl font-bold'>Cart</h2></div>
                <div className='flex flex-col md:flex-row gap-4 items-center'>
                    <div>
                        <h3 className='text-xl md:text-2xl font-bold'>Total Price: $ {price}</h3>
                    </div>
                    <div className='flex gap-4'>
                        <button onClick={handleShort} className="btn btn-outline rounded-3xl text-[#9538E2] hover:bg-[#9538E2] hover:text-white">Sort by Price</button>
                        <button disabled={isPurchase}   onClick={()=>{document.getElementById('my_modal_1').showModal(); }} className="btn active rounded-3xl">Purchase</button>
                        
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                {
                    products.map(item => <CartProduct key={item.product_id} item={item} handleRemoveProduct={handleRemoveProduct}></CartProduct>)
                }
            </div>

            {/* onClick={handlePurchase } */}



{/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" >open modal</button> */}
<dialog id="my_modal_1" className="modal">
  <div className="modal-box text-center flex flex-col gap-4 justify-center">
    <img className='w-16 h-16 mx-auto' src={modalImage} alt="" />
    <h3 className="font-bold text-2xl">Payment Successfully</h3>
    <hr />
    <p className="">Thanks for Purchasing</p>
    <p className="">Total: {price}</p>
    <div className="modal-action justify-center w-full">
      <form method="dialog" className='w-full'>
        {/* if there is a button in form, it will close the modal */}
        <button onClick={()=>{handlePurchase()} } className="btn w-full">Close</button>
      </form>
    </div>
  </div>
</dialog>


        </div>
    );
};

export default Cart;