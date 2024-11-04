import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
     fetch("/categories.json")
     .then(res => res.json())
     .then(data => setCategories(data))
    }, [])
    return (
        <div>  
           <div className='flex flex-wrap md:flex-col gap-6 justify-center'>
            <Link to='/' className='btn h-auto min-h-max py-4 rounded-3xl text-gray-600' >All Products</Link>
            {
                categories.map(category => <Link to={`products/${category.category_name}`} className='btn h-auto min-h-max py-4 rounded-3xl text-gray-600' key={category.category_id} >{category.category_name}</Link>)
            }
           </div>
        </div>
    );
};

export default Categories;