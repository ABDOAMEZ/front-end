import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://127.0.0.1:8000/api',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');

      const token = localStorage.getItem('USER_ACCESS_TOKEN');
      if (token) headers.set('Authorization', `Bearer ${token}`);
      
      return headers;
    }
   }),
  tagTypes: [
    //! autenticat
    'register',
    'login', 
    'logout',
    'updateprofile',
    'deleteProfile',
    '/get_user',
    'auth/google',
    '/becomeseller',
    //! categories
    '/get_categories',
    '/get_main_categories',
    '/get_sous_categories',
    '/add_categorie',
    '/update_categorie',
    '/delete_categorie',
    //! products
    '/get_products',
    '/add_product',
    '/update_product',
    '/delete_product',
    //! products Images
    '/get_product_images',
    '/add_product_images',
    '/update_product_images',
    '/delete_product_images',
  ],
  endpoints: () => ({})
})