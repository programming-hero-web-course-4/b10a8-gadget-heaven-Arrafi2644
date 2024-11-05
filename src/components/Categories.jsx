import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../components/Category.css'

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
            <NavLink to='/' className='btn h-auto min-h-max py-4 rounded-3xl text-gray-600' >All Products</NavLink>
            {
                categories.map(category => <NavLink to={`products/${category.category_name}`} className='btn h-auto min-h-max py-4 rounded-3xl text-gray-600' key={category.category_id} >{category.category_name}</NavLink>)
                // categories.map(category => <NavLink to={`products/${category.category_name}`} className={({isActive}) => `btn h-auto min-h-max py-4 rounded-3xl text-gray-600 ${isActive ? 'active' : ''}`} key={category.category_id} >{category.category_name}</NavLink>)
            }
           </div>
        </div>
    );
};

export default Categories;