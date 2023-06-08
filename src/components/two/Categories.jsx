import React from 'react'
import Category from './Category';

export default function Categories() {
    let categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
    return (
        <div className='px-3'>
            {categories.map(c => <Category c={c} />)}
        </div>
    )
}
