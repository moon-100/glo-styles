import { BaseQueryFn } from '@reduxjs/toolkit/dist/query'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL
const UNAUTHORIZED = 401

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data }) => {
    try {
      const result = await instance({ url, method, data })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError as AxiosError
      return {
        error: { status: err.response?.status, data: err.response?.data },
      }
    }
  }

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
  },
  timeout: 3000,
  withCredentials: true,
})

export const setHeaderToken = (token: string) => {
  sessionStorage.setItem('accessToken', token)
}

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = window.sessionStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response?.status === UNAUTHORIZED && !originalRequest._retry) {
    }
    return Promise.reject(error)
  },
)

export default instance
