import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { errorDispatch, successDispatch } from '../slices/cartSlice';
import { TApiAllProductsResponse } from '../types';
import CardComponent from './CardComponent';
import Container from './Container';
import FilterDropdown from './FilterDropdown';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function getAllCategories(items: TApiAllProductsResponse[]): string[] {
    let categories: string[] = [];
    items.forEach((item: TApiAllProductsResponse) => {
        if (item.categories) {
            categories = categories.concat(item.categories);
        }
    });
    return [...new Set(categories)];
}


const fixedLength = 8;
const FilterComponent = ({ products }: { products: TApiAllProductsResponse[] }): JSX.Element => {
    const [categories, setCategories] = useState<string[]>([])
    const [filteredProducts, setFilteredProducts] = useState<TApiAllProductsResponse[]>([])
    const [slicedProducts, setSlicedProducts] = useState<TApiAllProductsResponse[]>([])
    const [activeCategory, setActiveCategory] = useState<number>(0)
    const [showLoadBtn, setShowLoadBtn] = useState<boolean>(true)
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useAppDispatch();
    const successStore = useAppSelector((state) => state.cart.success);
    const errorStore = useAppSelector((state) => state.cart.error);


    // set initial success/error msg from store
    useEffect(() => {
        setSuccess(successStore)
        setError(errorStore)
    }, [successStore, errorStore])

    // reset success/error msg
    useEffect(() => {
        setTimeout(() => {
            setSuccess(false)
            setError(false)
            dispatch(successDispatch(false))
            dispatch(errorDispatch(false))
        }, 5000);
    }, [success, error])


    useEffect(() => {
        setCategories(getAllCategories(products))
    }, [products])


    // handle category change
    useEffect(() => {
        setFilteredProducts(products)
    }, [])

    const categoryHandler = (index: number, category: string) => { //
        setShowLoadBtn(true)
        if (index === 0) {
            setActiveCategory(0)
            setFilteredProducts(products)
        }
        else {
            setActiveCategory(index)
            setFilteredProducts(products?.filter(item => item?.categories?.includes(category)));
        }
    }

    // load more btn
    useEffect(() => {
        setSlicedProducts(filteredProducts?.slice(0, fixedLength))
    }, [filteredProducts])

    const loadMoreHandler = () => {
        setShowLoadBtn(false)
        setSlicedProducts(filteredProducts)
    }


    let active = true;
    return (
        <div className='w-full flex items-center justify-center py-6 md:py-10 lg:py-24 bg-mediumGray'>
            {(success && !error) &&
                <div className={`bg-green fixed bottom-10 right-10 text-white px-6 py-3.5 rounded-ten z-[99999]`}>
                    <div>
                        <div className='flex gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Added to
                            <Link href='/cart'>
                                <span className='text-blue-700'>
                                    cart
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            }
            {error &&
                <div className={`bg-red-500 fixed bottom-10 right-10 text-white px-6 py-3.5 rounded-ten z-[99999]`}>
                    <span>Max item reached, please select another item</span>
                </div>
            }
            <Container>
                <h2 className='text-2xl'>Home Kitchen</h2>
                <div className='my-4'>
                    <div className='w-fit rounded-ten overflow-hidden'>
                        <button
                            onClick={() => categoryHandler(0, 'all')}
                            className={classNames(activeCategory === 0 ? "bg-yellow text-black font-semibold" : "bg-white text-pureGray", "px-10 py-2.5 lg:py-3 border-b border rounded-l-ten border-yellow border-r-0 hover:bg-yellow hover:text-black transition duration-150")}
                        >
                            All
                        </button>
                        {
                            categories?.map((item, idx) => (
                                <button
                                    onClick={() => categoryHandler(idx + 1, item)}
                                    key={idx}
                                    className={classNames(activeCategory === (idx + 1) ? "bg-yellow text-black font-semibold" : "bg-white text-pureGray", "px-10 py-2.5 lg:py-3 border border-yellow last:rounded-r-ten border-r-0 last:border-r border-b hover:bg-yellow hover:text-black transition duration-150")}
                                >
                                    {item}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <FilterDropdown />
                <section>
                    <div className='my-7 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-6'>

                        {slicedProducts?.map(item => (
                            <CardComponent key={item?.id} item={item} />
                        ))}
                    </div>
                    {showLoadBtn &&
                        <div className='w-full flex items-center justify-center pt-10'>
                            <button
                                onClick={loadMoreHandler}
                                className='text-[#929292] px-8 py-3 border border-yellow rounded-ten text-base flex flex-row items-center justify-center gap-2 hover:bg-yellow hover:text-black transition duration-150'
                            >
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-4 h-4">
                                        <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span>Load more...</span>
                            </button>
                        </div>
                    }
                </section>
            </Container>
        </div>
    )
}

export default FilterComponent;
