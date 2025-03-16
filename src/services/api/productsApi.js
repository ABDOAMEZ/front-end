import { baseApi } from './baseApi'

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getProducts: builder.query({
        query: () => ({
          url: '/get_products',
          method: 'get',
        }),
        providesTags: ['/get_products']
      }),



      createProduct: builder.mutation({
        query: ( newUser ) => ({
          url: `/add_product`,
          method: 'post',
          body: newUser
        }),
        invalidatesTags: ['/add_product']
      }),


      updateProduct: builder.mutation({
        query: ( newUser ) => ({
          url: `/update_product`,
          method: 'put',
          body: newUser
        }),
        invalidatesTags: ['/update_product']
      }),

      deleteProduct: builder.mutation({
        query: ( newUser ) => ({
          url: `/delete_product`,
          method: 'delete',
          body: newUser
        }),
        invalidatesTags: ['/delete_product']
      }),

  })
})

export const { 
    useGetProductsQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productsApi;