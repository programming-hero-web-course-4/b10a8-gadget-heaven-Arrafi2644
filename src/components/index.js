
// get 

import { json } from "react-router-dom";
import { toast } from "react-toastify";



const handleGetProductsFromLocal = () => {
    const products = localStorage.getItem('cart');
    // console.log(products);
    if (products) {
        const cartProducts = JSON.parse(products);
        // console.log(cartProducts);
        return cartProducts;
    } else {
        const cartProducts = [];
        // console.log(cartProducts);
        return cartProducts;
    }
}

// set 
const handleSetProductToLocal = (product) => {
    const cartProducts = handleGetProductsFromLocal();
    const isExist = cartProducts.find(item => item.product_id == product.product_id)
    if (isExist) {
        return toast.error("Already added this product" , {
            position: 'top-center'
        })
    }
    cartProducts.push(product)
    // console.log(cartProducts);
    localStorage.setItem('cart', JSON.stringify(cartProducts));
    toast.success("Successfully added to the cart list.", {
        position: 'top-center'
    })

}

// remove 
const handleRemoveProductFromLocal = (product) => {
    // console.log("Product removed", product);
    // const cartProducts = handleGetProductsFromLocal();
    const cartProducts = handleGetProductsFromLocal();
    const remaining = cartProducts.filter(item => item.product_id !== product.product_id)
    localStorage.setItem('cart', JSON.stringify(remaining));
    toast.warn("Successfully removed product from the cart list" , {
        position: 'top-center'
    })
}

const getProductsFromLocal = () => {
    const storedProducts = localStorage.getItem('wishlist');

    if (storedProducts) {
        const storedWishProducts = JSON.parse(storedProducts);
        return storedWishProducts;
    } else {
        const storedWishProducts = [];
        return storedWishProducts;
    }
}

const setProductsToLocal = (product) => {
    const storedWishProducts = getProductsFromLocal();
    const isExist = storedWishProducts.find(item => item.product_id === product.product_id)
    if (isExist) {
        return toast.error("Product already added to the wishlist.", {
            position: 'top-center'
        })
    }
    storedWishProducts.push(product);
    localStorage.setItem('wishlist', JSON.stringify(storedWishProducts))
    // console.log(storedWishProducts);
    toast.success("Successfully added product to your wishlist.", {
        position: 'top-center'
    })
}

const removeProductFromLocal = (product) => {
    const storedWishProducts = getProductsFromLocal();
    // console.log(storedWishProducts);
    const remainingProducts = storedWishProducts.filter(item => item.product_id !== product.product_id)
    localStorage.setItem('wishlist', JSON.stringify(remainingProducts))
    toast.warn("Remove product from your wishlist", {
        position: 'top-center'
    })
}


export { handleSetProductToLocal, handleGetProductsFromLocal, handleRemoveProductFromLocal, getProductsFromLocal, setProductsToLocal, removeProductFromLocal }
