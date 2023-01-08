import { createApi } from '@reduxjs/toolkit/query/react'
import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import { TApiAllProductsResponse, TOrderInfo } from '../types'
import axios from 'axios'
import type { AxiosRequestConfig, AxiosError } from 'axios'

// base url 
const baseURL = 'https://munchies-api.up.railway.app/';
// setting x-access-user for all requests
axios.defaults.headers.common['x-access-user'] = 'fahimesti@gmail.com';

const axiosBaseQuery = ({ baseUrl }: { baseUrl: string }): BaseQueryFn<
    {
        url: string
        method: AxiosRequestConfig['method']
        data?: AxiosRequestConfig['data']
        params?: AxiosRequestConfig['params']
    },
    unknown,
    unknown
> =>
    async ({ url, method, data, params }) => {
        try {
            const result = await axios({ url: baseUrl + url, method, data, params })
            return { data: result.data }
        } catch (axiosError) {
            let err = axiosError as AxiosError
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            }
        }
    }

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: axiosBaseQuery({ baseUrl: baseURL }),
    tagTypes: ['Products'],
    endpoints(build) {
        return {
            getProducts: build.query<TApiAllProductsResponse[], void>({
                query: () => ({
                    url: 'products/',
                    method: 'GET'
                }),
            }),
            getOrders: build.query<TOrderInfo[], void>({
                query: () => ({
                    url: `order/`,
                    method: 'GET',
                }),
            }),
            addOrder: build.mutation<void, Partial<TOrderInfo>>({
                query: (data) => ({
                    url: `order/`,
                    method: 'POST',
                    data,
                }),
            }),
        }
    },
})

export const {
    useGetProductsQuery,
    useGetOrdersQuery,
    useAddOrderMutation,
} = productApi