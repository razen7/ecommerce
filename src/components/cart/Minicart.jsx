import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function Minicart() {
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
        <></>
    )
}
