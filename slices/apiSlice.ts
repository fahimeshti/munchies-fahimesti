import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TApiAllProductsResponse, TOrderInfo } from '../types'

// x-access-user email
const userEmail = 'user@test.com';
// Define a service using a base URL and expected endpoints
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://munchies-api.up.railway.app/' }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getProducts: builder.query<TApiAllProductsResponse[], void>({
            query: () => `products/`,
        }),
        getOrders: builder.query<TOrderInfo[], void>({
            query: () => ({
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-user': userEmail,
                },
                url: `order/`,
                method: 'GET',
            }),
        }),
        addOrder: builder.mutation<void, Partial<TOrderInfo>>({
            query: (body) => ({
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-user': userEmail,
                },
                url: `order/`,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Products' }],
        }),
    }),
})

export const { useGetProductsQuery, useGetOrdersQuery, useAddOrderMutation } = productApi