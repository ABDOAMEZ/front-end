import { baseApi } from './baseApi'

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    register: builder.mutation({
      query: ( newUser ) => ({
        url: `/register`,
        method: 'post',
        body: newUser
      }),
      invalidatesTags: ['Users']
    }),

    login: builder.mutation({
      query: ( newUser ) => ({
        url: `/login`,
        method: 'post',
        body: newUser
      }),
      invalidatesTags: ['Users']
    }),

    logout: builder.mutation({
      query: () => ({
        url: `/logout`,
        method: 'post',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('USER_ACCESS_TOKEN')}`,
        },
      }),
      invalidatesTags: ['Auth']
    }),

    deletProfile: builder.mutation({
      query: () => ({
        url: `/deleteProfile`,
        method: 'delete',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('USER_ACCESS_TOKEN')}`,
        },
      }),
      invalidatesTags: ['Auth']
    }),

    updateProfile: builder.mutation({
      query: ( newUser ) => ({
        url: `/updateprofile`,
        method: 'put',
        body: newUser,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('USER_ACCESS_TOKEN')}`,
        },
      }),
      invalidatesTags: ['Auth']
    }),

    becomeSeller: builder.mutation({
      query: ( newUser ) => ({
        url: `/becomeseller`,
        method: 'put',
        body: newUser,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('USER_ACCESS_TOKEN')}`,
        },
      }),
      invalidatesTags: ['Auth']
    }),

    getUser: builder.mutation({
      query: ( newUser ) => ({
        url: `/get_user`,
        method: 'post',
        body: newUser,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('USER_ACCESS_TOKEN')}`,
        },
      }),
      invalidatesTags: ['/get_user']
    }),


  })
})

export const { 
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useDeletProfileMutation,
  useUpdateProfileMutation,
  useBecomeSellerMutation,
  useGetUserMutation,
} = userApi;