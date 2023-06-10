import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../Header';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';

export default function Item() {
    let { itemId } = useParams();
    const [item, setItem] = useState(null);
    const count = useRef(1);
    const navigate = useNavigate();
    const addToCart = () => {
        let cart = localStorage.getItem('cart');
        let curItem = {
            id: item.id,
            title: item.title,
            image: item.image,
            price: item.price,
            quantity: Number(count.current.value)
        }
        if (!cart) {
            cart = [curItem]
        } else {
            cart = JSON.parse(cart);
            let productExists = cart.find(v => v.id === item.id);
            if (!productExists) {
                cart.push(curItem)
            } else {
                productExists.quantity = Number(productExists.quantity) + Number(count.current.value);
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        toast('🦄 Product added successfully!!');
    }

    const goToCart = () => {
        let cart = localStorage.getItem('cart');
        if (!cart) {
            addToCart();
        }
        navigate('/cart');
    }
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + itemId)
            .then(res => res.json())
            .then(item => setItem(item))
    }, [])

    return (
        <div className='my-2'>
            <div className='mx-5 md:mt-4'>
                <ToastContainer position='top-center' />
                <Header />
                {!item ? (<>loading...</>) : (<>
                    <div className='flex max-md:flex-col mt-5 border-b-2 p-9'>
                        <div className='mb-5'>
                            <div className="flex justify-center mx-8">
                                <img src={item.image} alt="" className='max-h-[400px]' />
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className='font-bold mb-1'>{item.title}</div>
                            <div className='text-yellow-400 font-semibold flex gap-1 h-5'>
                                <span className='flex items-center'>User Rating</span>
                                <span className='flex items-center'>
                                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
                                </span>
                            </div>
                            <div className='border-y-[1px] my-2'></div>
                            <div>
                                <span className='text-sm text-gray-500 font-semibold'>Price </span>
                                <span className='text-red-400 font-semibold text-lg'>
                                    ${item.price}</span>
                            </div>
                            <div className='mt-4 font-mono'>
                                {item.description}
                            </div>
                            <div className='flex justify-center'>
                                <div className='bg-yellow-200 rounded-md px-3 w-fit'>
                                    <span className='font-semibold'>
                                        Quantity
                                    </span>
                                    <input type="number" name="count" ref={count} defaultValue="1" className='border-2 w-11 m-2 pl-2' />
                                </div>
                            </div>

                            <div className='flex gap-8 mt-10 max-md:mt-6'>
                                <button className='rounded-full bg-yellow-300 px-4 py-1 font-semibold shadow-sm hover:bg-gray-100 hover:text-yellow-600 transition-all duration-200 w-36' onClick={() => addToCart()}>
                                    Add to cart
                                </button>

                                <button className='rounded-full bg-yellow-300 px-4 py-1 font-semibold shadow-sm hover:bg-gray-100 hover:text-yellow-600 transition-all duration-200 w-36' onClick={() => goToCart()}>
                                    Buy Now
                                </button>

                            </div>

                        </div>
                    </div>
                </>)}
            </div>

        </div>
    )
}
