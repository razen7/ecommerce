import React from 'react'
import Pcard from './Pcard';

export default function One() {
    let categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
    return (
        <div className='flex flex-col flex-wrap min-h-96'>
            <div className='flex-1'>
                <img src="https://bigpasal.com/wp-content/uploads/2022/04/homebanner2.jpg" alt="" className='shadow-md' />
            </div>
            <div className='flex-1 flex justify-evenly flex-wrap p-3'>
                {/* {categories.map((c) => <Pcard cat={c} key={c} />)} */}
            </div>
        </div>
    )
}
