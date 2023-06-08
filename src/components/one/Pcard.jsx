import React, { useEffect, useState } from 'react';

export default function Pcard({ cat }) {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/' + cat)
            .then(res => res.json())
            .then(res => {
                setProduct(res[0])
                return;
            })
    }, [])

    return (
        <div className='flex max-w-[320px] h-[200px] border-2'>
            <div className='flex-1 flex content-center items-center'>
                <img src={product.image} alt="" className='object-contain scale-50' />
            </div>
            <div className='flex-1 pt-2'>
                <div className='uppercase font-bold'>
                    {cat}
                </div>
                <div className='capitalize line-clamp-3'>
                    {product.title}
                </div>
                <div className='mt-4'>
                    <button className='border-2 rounded-lg p-2 bg-slate-300 hover:bg-inherit transition-all duration-500'>
                        <div className="font-bold text-zinc-600 flex gap-2 items-center">
                            Shop Now 
                            <span className='bg-red-400 rounded-full w-5 h-5 text-gray-100 flex justify-center items-center font-extrabold'> &lt;  </span>
                        </div>

                    </button>
                </div>
            </div>
        </div>
    )
}
