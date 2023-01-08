import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Container from './Container';
import NavigationLinks from './NavigationLinks';

const Footer = (): JSX.Element => {
    return (
        <div className='bg-green text-white w-full flex items-center justify-center py-6 md:py-10 lg:py-12'>
            <Container>
                <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                    <div className='w-32 h-12'>
                        <figure className={`relative w-full h-full object-contain`}>
                            <Image
                                src={'/images/WHAT2EAT.svg'}
                                fill
                                alt={'image'}
                            />
                        </figure>
                    </div>
                    <div>
                        <NavigationLinks />
                    </div>
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <Link href='#'>
                            <span className='block relative w-7 h-7'>
                                <Image
                                    src={'/images/fb.svg'}
                                    fill
                                    alt={'image'}
                                />
                            </span>
                        </Link>
                        <Link href='#'>
                            <span className='block relative w-7 h-7'>
                                <Image
                                    src={'/images/insta.svg'}
                                    fill
                                    alt={'image'}
                                />
                            </span>
                        </Link>
                    </div>
                </div>
                <hr className='mt-6' />
                <div className='mt-4'>
                    <p className='w-full text-center text-xs font-normal'>
                        Copyright @2021 What2Eat
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default Footer;
