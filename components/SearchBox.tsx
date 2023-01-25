import { useEffect, useRef, useState } from 'react'
import { Combobox } from '@headlessui/react'
import { TApiAllProductsResponse } from '../types'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addProduct, errorDispatch, successDispatch } from '../slices/cartSlice'
import maxQuantityError from './maxQuantityError'


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const SearchBox = ({ products }: { products: TApiAllProductsResponse[] }): JSX.Element => {
    const [selectedPerson, setSelectedPerson] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState<TApiAllProductsResponse[]>([])
    const searchRef = useRef<HTMLInputElement>();
    const dispatch = useAppDispatch()
    const storeProducts = useAppSelector((state) => state.cart.products);


    const clickHandler = (e: React.MouseEvent<HTMLElement>, item: TApiAllProductsResponse) => {
        e.preventDefault();
        dispatch(addProduct({ ...item, quantity: 1 }))
        dispatch(successDispatch(true));
        dispatch(errorDispatch(maxQuantityError(storeProducts, item)));
    }

    const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value?.trim();
        const filteredProds = query === '' ? products : products?.filter((product) => {
            return product.name.toLowerCase().includes(query.toLowerCase());
        });
        setFilteredProducts(filteredProds);
    }

    useEffect(() => {
        searchRef?.current?.focus()
    }, [])


    return (
        <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
            {/* <Combobox.Label className="block text-sm font-medium text-gray-700">Assigned to</Combobox.Label> */}
            <div className="relative mt-1">
                <Combobox.Input
                    // @ts-ignore
                    ref={searchRef}
                    className="w-full rounded-md border border-gray-300 bg-white py-2.5 pl-3 pr-10 shadow-sm focus:border-green focus:outline-none focus:ring-2 focus:ring-green sm:text-sm placeholder:font-light"
                    onChange={filterHandler}
                    placeholder={'Search food you love'}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </Combobox.Button>

                {filteredProducts?.length > 0 && (
                    <Combobox.Options static className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredProducts.map((person) => (
                            <Combobox.Option
                                key={person.id}
                                value={person}
                                className={({ active }) =>
                                    classNames(
                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                        active ? 'bg-green text-white' : 'text-gray-900'
                                    )
                                }
                            >
                                {({ active, selected }) => (
                                    <>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <img src={person.image} alt="" className="h-6 md:h-20 w-6 md:w-20 flex-shrink-0 rounded-xl object-cover" />
                                                <span className={classNames(selected ? 'font-semibold' : '', 'ml-3 truncate')}>{person.name}</span>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={(e) => clickHandler(e, person)}
                                                    className='bg-yellow p-1 rounded-[5px] hover:scale-110 transition duration-150 active:scale-125'
                                                >
                                                    <svg className='w-4 h-4' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.59911 7.69607V13.1863M2.04956 7.69607H7.59911H2.04956ZM13.1487 7.69607H7.59911H13.1487ZM7.59911 7.69607V2.20587V7.69607Z" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                )}
            </div>
        </Combobox >
    )
}
export default SearchBox;