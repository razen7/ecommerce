import React from 'react'
import Header from './Header';
import One from './one/One';
import Categories from './two/Categories';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  let categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
  return (
    <div className='my-2'>
      <div className='mx-5'>
        <Header/>
      </div>
      <One />
      <Categories/>
    </div>


  )
}
