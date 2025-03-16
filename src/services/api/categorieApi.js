import { baseApi } from './baseApi'

export const categorieApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getCategories: builder.query({
        query: () => ({
          url: '/get_categories',
          method: 'get',
        }),
        providesTags: ['/get_categories']
      }),

      getMainCategories: builder.query({
        query: () => ({
          url: '/get_main_categories',
          method: 'get',
        }),
        providesTags: ['/get_main_categories']
      }),

      getSousCategories: builder.query({
        query: () => ({
          url: '/get_sous_categories',
          method: 'get',
        }),
        providesTags: ['/get_sous_categories']
      }),


      createCategorei: builder.mutation({
        query: ( newUser ) => ({
          url: `/add_categorie`,
          method: 'post',
          body: newUser
        }),
        invalidatesTags: ['/add_categorie']
      }),


      updateCategorei: builder.mutation({
        query: ( newUser ) => ({
          url: `/update_categorie`,
          method: 'put',
          body: newUser
        }),
        invalidatesTags: ['/update_categorie']
      }),

      deleteCategorei: builder.mutation({
        query: ( newUser ) => ({
          url: `/delete_categorie`,
          method: 'delete',
          body: newUser
        }),
        invalidatesTags: ['/delete_categorie']
      }),

  })
})

export const { 
  useGetCategoriesQuery,
  useGetMainCategoriesQuery,
  useGetSousCategoriesQuery,
  useCreateCategoreiMutation,
  useUpdateCategoreiMutation,
  useDeleteCategoreiMutation,
} = categorieApi;