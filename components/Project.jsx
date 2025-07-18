import React from 'react'

import Image from 'next/image'
import Link from 'next/link';

export default function Project(params) {
    if (!params.usage){
        console.log("No usage data found in params:");
        console.log(params)
        return <></>
    }

    return (
    <>
        <Link href={params.link}>
            <section href={params.link} className='bg-foreground_third w-full self-center rounded-lg mt-10 h-auto bg-text border border-border p-8 hover:bg-foreground_secondary duration-200'>
                {
                    (params.aiassistance && params.aiassistance > 0) ? 
                    <div className='bg-gradient-to-r from-purple-500 to-pink-400 w-fit px-2 text-sm py-1 bg-red-500 rounded-md mb-2'>AI Assisted: {params.aiassistance}/10</div>
                    : <></>
                }
                <h1 className='font-bold text-3xl '>{params.name}</h1>
                <h2 className='font-normal text-md text-text_third mt-3 '>{params.date}</h2>
                <h2 className='text-normal text-text_secondary mt-1 '>{params.content}</h2>
                <div className='mt-3 flex flex-wrap gap-3 items-center w-auto'>
                    { 
                        params.usage.map( (value, index) => {
                            return <div className='h-[27px] bg-border px-2 pr-2 py-1 rounded-md flex w-fit' key={index}>
                                <Image alt="Logo" src={'/Portfolio/Logos/' + value + '.svg'} width="18" height="18"/>
                                <span className='text-sm font-semibold ml-2 hidden md:block'>{value}</span>   
                            </div>
                        })
                    }
                </div>
            </section>
        </Link>
        
    </>
  ); 
};
