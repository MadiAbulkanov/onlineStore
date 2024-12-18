import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../interfaces/IProducts.interface';

export const storeApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/',
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
