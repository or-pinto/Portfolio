
import React from 'react';
import Image from 'next/image';
import { getBasePath } from '@/lib/getBasePath';

export default function Experience({ name, company, description, period, image_type, up_arrow }) {
    /* 
    This component displays an experience card with the following properties:
    - name: The name of the experience (e.g., job title).
    - company: The name of the company or organization.
    - description: A brief description of the role or project.
    - period: The time period during which the experience took place.
    - image_type: The type of image file (e.g., 'jpg', 'svg').
    - up_arrow: A boolean indicating whether to display an up arrow icon.
    */

    return <div className='flex flex-row gap-3  p-4 bg-foreground_third border border-border rounded-md shadow-lg'>
        <div className='absolute self-end'>
            {
                up_arrow ? <></>
                : <div className='size-fit rounded-[50%]'>
                    <div className='absolute bg-green-500 rounded-full size-full scale-50'></div>
                    <Image src={getBasePath() + "/Icons/circle.svg"} width="20" height="20" className='animate-ping'/>
                </div>
            }
        </div>
        
        <div className='min-w-[50px]'>
            <Image src={getBasePath() + "/Logos/" + company + "." + image_type} width="50" height="50" className=''/>
        </div>
        <div className=']'>
            <h3 className='text-xl font-bold'>{name}</h3>
            <h4 className='text-md font-semibold'>{company}</h4>
            <h5 className='text-sm text-text_third'>{period}</h5>
            <p className='text-sm text-text_secondary mt-1'>
                {description}
            </p>
        </div>
    </div>
};
