import React from 'react'
import Container from './Container';
import Heading from './Heading';
import Image from 'next/image';

const ContactComponent = (): JSX.Element => {
    return (
        <div className='bg-mediumGray w-full flex items-center justify-center py-6 md:py-10 lg:py-24'>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-16">
                    <div className='row-span-1'>
                        <div className='max-w-sm space-y-1 '>
                            <Heading>
                                Do you have a question
                                or want to become a seller?
                            </Heading>
                            <p className='text-xs'>Fill this form and our manager will contact you next 48 hours.</p>
                        </div>

                        <form>
                            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="Name"
                                        className="block w-full px-6 text-base py-4 rounded-ten border-gray-300 shadow-thin placeholder:text-pureGray placeholder:text-base sm:text-sm focus:outline-none"
                                        placeholder='Your Name'
                                    />
                                </div>

                                <div className="sm:col-span-3">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full px-6 text-base py-4 rounded-ten border-gray-300 shadow-thin placeholder:text-pureGray placeholder:text-base sm:text-sm focus:outline-none"
                                        placeholder='Your e-mail'
                                    />

                                </div>

                                <div className='sm:col-span-6'>
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className="block w-full h-52 px-6 text-base py-4 rounded-ten border-gray-300 shadow-thin placeholder:text-pureGray placeholder:text-base sm:text-sm resize-none focus:outline-none"
                                        placeholder="Your message"
                                        defaultValue={''}
                                    />
                                </div>

                            </div>
                        </form>
                    </div>

                    <div className='w-full row-span-1 px-8'>
                        <figure className={`relative w-full h-full object-contain`}>
                            <Image
                                src={'/images/Food_delivery_cute_man_riding_motorcycles.svg'}
                                fill
                                alt={'image'}
                            />
                        </figure>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactComponent;
