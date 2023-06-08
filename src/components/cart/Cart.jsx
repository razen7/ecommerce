import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function Cart() {
    const [cart, setCart] = useState([]);
    let subTotal = cart.reduce((p, c) => p + (c.price * c.quantity), 0);
    let navigate = useNavigate();
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')));
    }, [])

    let updateQ = (idx, e) => {
        cart[idx].quantity = e.target.value;
        setCart([...cart]);
        localStorage.setItem('cart', JSON.stringify(cart))
        isCartEmpty();
    }
    let deleteI = (idx) => {
        cart.splice(idx, 1);
        setCart([...cart]);
        localStorage.setItem('cart', JSON.stringify(cart));
        isCartEmpty();
    }
    let isCartEmpty = async () => {
        if (!cart.length || cart.every(v => v.quantity < 1)) {
            await toast('🦄 Cart Empty, Lets go back to shop!');
            setTimeout(() => {
                navigate('/')
            }, 5000);
            return true;
        }
        return false;
    }
    return (
        <>
            <ToastContainer position='top-center' />
            <div class="container mx-auto px-4 py-8">
                <div className='mb-5'>
                    <Header />
                </div>

                <h1 class="text-2xl font-bold mb-4">Your Cart</h1>
                {!cart ? ('loading') : (
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* <!-- Cart items --> */}
                        <div>
                            {cart.map((i, idx) =>
                                <div class="flex items-center border-b py-4">
                                    <img src={i.image} alt="Item 1" class="w-16 h-16 md:w-24 md:h-24 mr-4" />
                                    <div>
                                        <h2 class="font-bold">{i.title}</h2>
                                        <p class="text-gray-600">Price: ${i.price}</p>
                                        <div className='flex justify-start gap-3'>
                                            <p class="text-gray-600">Quantity:
                                                <input type="number" min="0" defaultValue={i.quantity} onChange={(e) => updateQ(idx, e)} className='border-2 w-11 px-1 rounded-md shadow-sm ml-2' /></p>

                                            <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm tracking-wide  px-2 rounded" onClick={() => deleteI(idx)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* <!-- Cart summary --> */}
                        <div class="bg-gray-100 p-4">
                            <h2 class="font-bold text-lg mb-4">Summary</h2>
                            <p class="mb-2">Subtotal: ${subTotal}</p>
                            <p class="mb-2">Tax: ${(13 / 100 * subTotal).toFixed(2)}</p>
                            <p class="text-lg font-bold">Total: ${(subTotal + 13 / 100 * subTotal).toFixed(2)}</p>
                            <button class="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/checkout')}>Checkout</button>
                            <button class="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/')}>Continue Shopping</button>
                        </div>
                    </div>
                )}
            </div>
        </>

    )
}
