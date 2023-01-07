import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import NavigationLinks from './NavigationLinks';

const Topbar = () => {
    const quantity = useSelector((state: RootState) => state.cart.quantity);

    return (
        <nav className='absolute top-0 left-0 right-0 w-full h-20 bg-transparent flex items-center justify-center'>
            <div className='w-full max-w-6xl flex items-center justify-between text-white'>
                <div>
                    <Image
                        src={'/images/logo.svg'}
                        width={128}
                        height={65}
                        alt={'munchies logo'}
                    />
                </div>
                <div>
                    <NavigationLinks />
                </div>
                <div className='flex flex-row items-center justify-between gap-8'>
                    <span>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </span>
                    <Link href='/cart'>
                        <button className='relative'>
                            {quantity > 0 &&
                                <span className='absolute right-0 block w-2 h-2 rounded-full bg-yellow'></span>
                            }
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.97689 8.84C2.01712 8.33881 2.24464 7.87115 2.61417 7.53017C2.98369 7.18918 3.46808 6.9999 3.97089 7H16.0289C16.5317 6.9999 17.0161 7.18918 17.3856 7.53017C17.7551 7.87115 17.9827 8.33881 18.0229 8.84L18.8259 18.84C18.848 19.1152 18.8129 19.392 18.7227 19.6529C18.6326 19.9139 18.4894 20.1533 18.3022 20.3562C18.115 20.5592 17.8878 20.7211 17.6349 20.8319C17.382 20.9427 17.109 20.9999 16.8329 21H3.16689C2.89081 20.9999 2.61774 20.9427 2.36487 20.8319C2.112 20.7211 1.8848 20.5592 1.69759 20.3562C1.51037 20.1533 1.36719 19.9139 1.27706 19.6529C1.18693 19.392 1.1518 19.1152 1.17389 18.84L1.97689 8.84V8.84Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.9999 10V5C13.9999 3.93913 13.5785 2.92172 12.8283 2.17157C12.0782 1.42143 11.0607 1 9.99988 1C8.93901 1 7.9216 1.42143 7.17145 2.17157C6.42131 2.92172 5.99988 3.93913 5.99988 5V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </Link>
                    <Link href='/orders'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                            </svg>

                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Topbar;
