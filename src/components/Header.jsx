import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';

export default function Header() {
    let categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
    const [mDis, setMDis] = useState(false);
    return (
        <header className='md:border-b-2 md:pb-5'>
            <div className="header-top flex justify-between h-6 mt-1">
                <div onClick={() => setMDis(true)} className='lg:hidden'>
                    <AiOutlineMenu />
                </div>
                <img src="https://bigpasal.com/wp-content/uploads/2021/06/sadUntitled-1.png" alt="bigpasal" onClick={()=>window.open('/')} />
                <div className="max-md:hidden">
                    <div className="flex gap-2">
                        {categories.map(v =>
                            <a href='#' key={v} className='uppercase border-b-2 border-slate-50 py-2 p-1 rounded-lg hover:bg-slate-100'>
                                {v}
                            </a>
                        )}
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute top-0 bg-red-600 rounded-full w-4 h-4 text-xs text-white text-center'>
                        0
                    </div>
                    <div className='absolute right-0 top-3'>
                        <BsFillCartFill />
                    </div>
                </div>
            </div>
            <div className={`${mDis ? 'visible' : 'invisible'} md:hidden absolute z-10 bg-white w-full left-0`}>
                <div className="left flex flex-col h-screen justify-center">
                    <div className='bg-red-500 fixed top-0 left-0 w-full text-white text-right p-1 px-3 font-bold'>
                        <a href="#" onClick={() => setMDis(!mDis)}>
                            Close X
                        </a>
                    </div>
                    {categories.map(v =>
                        <a href='#' key={v} className='uppercase border-b-8 font-bold border-slate-50 px-7'>
                            {v}
                        </a>
                    )}
                </div>
            </div>
        </header>
    )
}
