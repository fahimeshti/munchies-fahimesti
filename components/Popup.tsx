import Link from 'next/link';
import React from 'react'
import { UserInfo } from '../types';
import Button from './Button';

type Popup = {
    togglePopup: (arg: boolean) => void;
    checkoutHandler: (arg: UserInfo) => void;
    result: any;
}
const Popup = ({ togglePopup, checkoutHandler, result }: Popup): JSX.Element => {

    const handleUserInput = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            name: { value: string };
            phone: { value: number };
            address: { value: string };
        };
        const name = target.name.value;
        const phone = target.phone.value;
        const address = target.address.value;
        // send user data to parent
        checkoutHandler({ name, phone, address });
    }
    console.log(result);

    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-[#000000b7] z-[9999] flex items-center justify-center p-4'>
            <div className='w-full md:w-[40vw] bg-white px-12 py-8 rounded-ten'>
                {!(result?.isSuccess) ?
                    <div>
                        <h2 className='text-2xl lg:text-3xl text-center text-gray-800 font-bold tracking-wide mb-4'>Please enter your info.</h2>
                        <form
                            className='space-y-2'
                            onSubmit={handleUserInput}
                        >
                            <input
                                type="text"
                                name='name'
                                placeholder='Name'
                                className='w-full text-sm px-3 py-2 border focus:ring-1 focus:ring-green focus:outline-none rounded-md'
                                required
                            />
                            <input
                                type="number"
                                name='phone'
                                placeholder='Phone'
                                className='w-full text-sm px-3 py-2 border focus:ring-1 focus:ring-green focus:outline-none rounded-md'
                                required
                            />
                            <textarea
                                name="address"
                                id="address"
                                rows={5}
                                className='w-full text-sm px-3 py-2 border focus:ring-1 focus:ring-green focus:outline-none rounded-md resize-none'
                                placeholder="Address"
                                required
                            />
                            <div className='flex gap-4'>
                                <button
                                    disabled={result?.isLoading}
                                    onClick={() => togglePopup(false)}
                                    className='w-full py-2.5 bg-white text-gray-500 mt-4 rounded-3xl border-2 border-gray-500
                         hover:text-white hover:bg-gray-500 transition duration-150 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:text-gray-500 disabled:border-gray-400'
                                >
                                    Cancel
                                </button>
                                <Button
                                    disabled={result?.isLoading}
                                    type='submit'
                                >
                                    Order
                                </Button>
                            </div>
                        </form>
                        {result?.isError &&
                            <p className='text-base font-medium text-red-600 text-center my-2'>Something went wrong! Please try again.</p>
                        }
                    </div>
                    :
                    <div className='flex flex-col items-center justify-center gap-2 text-xl'>
                        <div>
                            <svg className='w-20 block' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                <circle className="path circle" fill="none" stroke="#1AC073" strokeWidth={6} strokeMiterlimit={10} cx="65.1" cy="65.1" r="62.1" />
                                <polyline className="path check" fill="none" stroke="#1AC073" strokeWidth={6} strokeLinecap="round" strokeMiterlimit={10} points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                            </svg>
                        </div>
                        <p>Your order has been placed successfully</p>
                        <Link href={'/orders'}>
                            <span className='text-sky-500 hover:text-sky-400'>
                                See all of your orders
                            </span>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Popup;
