import React, { useEffect, useState } from 'react'
import Pcard2 from './Pcard2';

export default function Category({ c }) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/' + c)
            .then(res => res.json())
            .then(json => setProducts(json))
    }, []);

    return (
        <section className='relative mb-4'>
            <h2 className='uppercase font-bold'>{c}</h2>
            <button className="bg-red-600 p-3 rounded-full absolute top-[50%]"><img src="images/arrow.png" alt="" /></button>

            <button className="bg-red-600 p-3 rounded-full absolute top-[50%] right-0">
                <img src="images/arrow.png" alt="" className='rotate-180' />
            </button>
            <div className='flex justify-start gap-2 overflow-x-auto p-3'>
                {products.map((p) => <Pcard2 p={p} key={p} />)}
            </div>
        </section>
    )
}