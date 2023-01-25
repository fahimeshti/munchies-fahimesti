import { Transition } from '@headlessui/react';
import React, { Dispatch, Fragment, SetStateAction } from 'react'
import { TApiAllProductsResponse } from '../types';
import SearchBox from './SearchBox';

type Props = {
    products: TApiAllProductsResponse[]
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
};

const SearchPopup = ({ products, show, setShow }: Props): JSX.Element => {

    return (
        <Transition
            as={Fragment}
            show={show}
            enter="transition ease-in duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-400"
            leaveTo="opacity-0"
        >
            <div className='fixed top-0 left-0 bottom-0 w-full flex justify-center z-[1000] p-4'>
                <div
                    onClick={() => setShow(false)}
                    className='fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]'
                ></div>
                <Transition
                    as={Fragment}
                    show={show}
                    enter="transition linear duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition linear duration-700 transform"
                    leaveFrom="translate-y-0"
                    leaveTo="-translate-y-[200%]"
                >
                    <div className='w-full max-w-md px-4'>
                        <SearchBox products={products} />
                    </div>
                </Transition>
            </div>
        </Transition>
    )
}

export default SearchPopup;
