import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../types/IProducts.interface.ts';

export const storeApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        mode: 'cors',
    }),
    endpoints: build => ({
        getProducts: build.query<IProduct[], { type?: string, brand?: string, prodClass?: string }>({
            query: ({ type, brand, prodClass }) => {
                return {
                    url: `/product?type=${type}&brand=${brand}&prodClass=${prodClass}`,
                    method: 'GET',
                };
            },
        }),
    }),
});

export const { useGetProductsQuery } = storeApi;
