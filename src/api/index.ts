import axios, { Axios, AxiosRequestConfig } from 'axios' 


const client: Axios = axios.create({
  baseURL: process.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

//TODO: POST 메서드
export const postData = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
  try {
    const response = await client.post<APIResponse<T>>(`${import.meta.env.VITE_API_URL}${url}`, data, config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
