import Image from 'next/image';
import React from 'react'
import { TApiAllProductsResponse } from '../types';

const CartItem = ({ product }: { product: TApiAllProductsResponse }): JSX.Element => {
    const quantity = product.quantity;

    return (
        <div className='flex flex-row items-center justify-between border-b py-2'>
            <div className='flex flex-row items-center gap-4'>
                <div className='relative w-20 h-16 object-contain rounded-lg overflow-hidden'>
                    <Image
                        src={product.image}
                        fill
                        alt={product.name}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div>
                    <h4 className='font-medium text-base text-black'>{product.name}</h4>
                </div>
            </div>
            <div className='flex gap-16'>
                <span>{quantity}</span>
                <span>${product.price * quantity!}</span>
                <span>${product.vat * quantity!}</span>
            </div>
        </div>
    )
}

export default CartItem;
