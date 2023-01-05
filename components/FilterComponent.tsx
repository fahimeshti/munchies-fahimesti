import React from 'react'
import { TApiAllProductsResponse } from '../types';
import CardComponent from './CardComponent';
import Container from './Container';
import FilterDropdown from './FilterDropdown';


const filterOptions = ['Button', 'Free delivary', 'New', 'coming'];

function FilterComponent({ data }: { data: TApiAllProductsResponse[] }) {

    let active = true;
    return (
        <div className='w-full flex items-center justify-center py-24 bg-mediumGray'>
            <Container>
                <h2 className='text-2xl'>Home Kitchen</h2>
                <div className='my-4'>
                    <div className='w-fit rounded-ten overflow-hidden'>
                        <button
                            className={`${active ? "bg-yellow text-black font-semibold" : "bg-white text-pureGray"} px-10 py-3 border-b border rounded-l-ten border-yellow border-r-0 hover:bg-yellow hover:text-black transition duration-150`}
                        >
                            All
                        </button>
                        {
                            filterOptions.map((item, idx) => (
                                <button
                                    className={`${false ? "bg-yellow text-black font-semibold" : "bg-white text-pureGray"} px-10 py-3 border border-yellow last:rounded-r-ten border-r-0 last:border-r border-b hover:bg-yellow hover:text-black transition duration-150`}
                                    key={idx}
                                >
                                    {item}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <FilterDropdown />
                <section>
                    <div className='my-7 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {data?.map(item => (
                            <CardComponent key={item?.id} item={item} />
                        ))}
                    </div>

                    <div className='w-full flex items-center justify-center pt-10'>
                        <button className='text-[#929292] px-8 py-3 border border-yellow rounded-ten text-base flex flex-row items-center justify-center gap-2 hover:bg-yellow hover:text-black transition duration-150'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-4 h-4">
                                    <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <span>Load more...</span>
                        </button>
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default FilterComponent;
