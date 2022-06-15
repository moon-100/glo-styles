import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from 'src/app/axios-client'

const isLocal = window.location.host.includes('localhost')

export const authApi = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => {
    return {
      refreshAccessToken: builder.query({
        query: () => {
          return {
            url: isLocal ? '/auth' : '/api/pichu/auth/refresh-access-token',
            method: 'get',
          }
        },
      }),
    }
  },
})

export const { useRefreshAccessTokenQuery } = authApi
