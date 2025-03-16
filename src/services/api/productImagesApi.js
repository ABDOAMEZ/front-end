import { baseApi } from "./baseApi";

export const productsImageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductsImage: builder.query({
      query: () => ({
        url: "/get_product_images",
        method: "get",
      }),
      providesTags: ["/get_product_images"],
    }),

    createProductImage: builder.mutation({
      query: (newUser) => ({
        url: `/add_product_images`,
        method: "post",
        body: newUser,
      }),
      invalidatesTags: ["/add_product_images"],
    }),

    updateProductImage: builder.mutation({
      query: (newUser) => ({
        url: `/update_product_images`,
        method: "put",
        body: newUser,
      }),
      invalidatesTags: ["/update_product_images"],
    }),

    deleteProductImage: builder.mutation({
      query: (newUser) => ({
        url: `/delete_product_images`,
        method: "delete",
        body: newUser,
      }),
      invalidatesTags: ["/delete_product_images"],
    }),
  }),
});

export const {
  useGetProductsImageQuery,
  useCreateProductImageMutation,
  useUpdateProductImageMutation,
  useDeleteProductImageMutation,
} = productsImageApi;
