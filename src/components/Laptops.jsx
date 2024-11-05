import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Laptops = () => {
    const allProducts = useLoaderData([]);
    console.log(allProducts

    );
    const laptops = allProducts.filter(product => product.category === 'Laptops')
    console.log(laptops);
    

    return (
        <div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    laptops.map(product => <Product key={product.product_id} product={product}></Product>)
                }
             </div>
        </div>
    );
};

export default Laptops;