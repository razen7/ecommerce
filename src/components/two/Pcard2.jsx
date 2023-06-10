import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Pcard2({ p }) {
    let navigate = useNavigate();
    return (
        <div className='flex min-w-[320px] h-[200px] border-2'>
            <div className='flex-1 flex content-center items-center'>
                <img src={p.image} alt="" className='object-contain scale-50' />
            </div>
            <div className='flex-1 pt-2'>
                <div className='capitalize line-clamp-3 p-1'>
                    {p.title}
                </div>
                <div className='mt-4'>
                    <button className='border-2 rounded-lg p-2 bg-slate-300 hover:bg-inherit transition-all duration-500'>
                        <div className="font-bold text-zinc-600 flex gap-2 items-center w-full" onClick={() => navigate('/' + p.id)}>
                            View Details
                        </div>

                    </button>
                </div>
            </div>
        </div>
    )
}
