import Image from 'next/image';
import React from 'react'
import Container from './Container';
import SearchComponent from './SearchComponent';

function HeroComponent() {
    return (
        <section className='w-full bg-pureBlack h-screen text-white flex items-center justify-center pt-20 p-16'>
            <Container>
                <div className='w-full grid grid-cols-2'>

                    <div className='col-span-1'>
                        <h1 className='text-7xl'>Authentic Home food in UK</h1>
                        <p className='max-w-md text-base mt-8 mb-10'>
                            What2Eat is a courier service in which authentic home cook food is delivered to a customer.
                        </p>
                        <SearchComponent />
                    </div>
                    <div className='col-span-1'>
                        <Image
                            src={'/images/cooking.svg'}
                            width={521}
                            height={435}
                            alt={'cooking logo'}
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HeroComponent;
