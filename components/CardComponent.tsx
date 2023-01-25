import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { addProduct, errorDispatch, successDispatch } from '../slices/cartSlice';
import { TApiAllProductsResponse } from '../types';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import maxQuantityError from './maxQuantityError';

const CardComponent = ({ item }: { item: TApiAllProductsResponse }): JSX.Element => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.cart.products);

    const clickHandler = () => {
        dispatch(addProduct({ ...item, quantity: 1 }));
        dispatch(successDispatch(true));
        dispatch(errorDispatch(maxQuantityError(products, item)));
    }


    return (
        <div className='bg-white rounded-ten overflow-hidden'>

            <figure>
                <picture className='block w-full h-64 relative object-contain'>
                    <Image
                        src={item?.image}
                        fill
                        alt={`${item?.name}-image not available`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className='transition duration-200 hover:scale-105 cursor-pointer'
                    />
                    <span className='absolute top-0 left-0 p-1 text-xs bg-yellow'>50%</span>
                </picture>
                <figcaption className='p-4 flex flex-col gap-3'>
                    <div className='w-full flex items-center justify-between font-medium'>
                        <Link href={'#'}>
                            <span>{item?.name}</span>
                        </Link>
                        <span>${item?.price}</span>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-row items-center gap-2'>
                            <span className='flex flex-row items-center justify-center gap-2 w-fit text-xs font-medium bg-mediumGray h-5 px-1 rounded-[5px]'>
                                <svg className='inline w-3 h-3' viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1121 4.72554L8.51478 4.17806L6.90666 0.764102C6.86274 0.670629 6.79048 0.594961 6.70122 0.548967C6.47736 0.43324 6.20532 0.529679 6.09339 0.764102L4.48528 4.17806L0.88791 4.72554C0.788731 4.74038 0.698053 4.78934 0.628627 4.86352C0.544696 4.95386 0.498446 5.0754 0.50004 5.20142C0.501634 5.32745 0.550942 5.44766 0.637128 5.53563L3.23987 8.19291L2.62496 11.9452C2.61054 12.0324 2.61976 12.1222 2.65159 12.2043C2.68341 12.2864 2.73655 12.3575 2.805 12.4095C2.87344 12.4616 2.95444 12.4925 3.03882 12.4988C3.1232 12.5051 3.20757 12.4865 3.28238 12.4452L6.50003 10.6736L9.71768 12.4452C9.80553 12.4941 9.90754 12.5104 10.0053 12.4926C10.2518 12.4481 10.4176 12.2033 10.3751 11.9452L9.76019 8.19291L12.3629 5.53563C12.4338 5.46293 12.4805 5.36798 12.4947 5.26412C12.533 5.00447 12.3601 4.76412 12.1121 4.72554Z" fill="#1B1C21" />
                                </svg>
                                <span>
                                    4.7
                                </span>
                            </span>
                            <span className='px-1.5 h-5 text-xs font-medium bg-mediumGray rounded-[5px]'>
                                50-79 min
                            </span>
                        </div>

                        <div>
                            <button
                                onClick={clickHandler}
                                className='bg-yellow p-1 rounded-[5px] hover:scale-110 transition duration-150 active:scale-125'
                            >
                                <svg className='w-3 h-3' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.59911 7.69607V13.1863M2.04956 7.69607H7.59911H2.04956ZM13.1487 7.69607H7.59911H13.1487ZM7.59911 7.69607V2.20587V7.69607Z" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </div>
    )
}

export default CardComponent;
