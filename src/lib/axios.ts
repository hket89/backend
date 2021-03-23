import axios, { AxiosRequestConfig } from 'axios';

export const createAxios = ({ baseURL }: AxiosRequestConfig) =>
  axios.create({ baseURL });
