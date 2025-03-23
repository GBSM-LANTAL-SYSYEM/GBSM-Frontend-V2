import axios, { AxiosResponse } from "axios";

const apiServer = import.meta.env.VITE_API_SERVER;

export const GBSM_SERVER = axios.create({
  baseURL: apiServer,
});

GBSM_SERVER.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const fetcherWithToken = async (
  accessToken: string | null,
  url: string
): Promise<any> => {
  const response: AxiosResponse = await GBSM_SERVER.get(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response;
};

export const postWithToken = async (
  accessToken: string | null,
  url: string,
  data: any
): Promise<any> => {
  const response: AxiosResponse = await GBSM_SERVER.post(url, data, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response;
};

export const putWithToken = async (
  accessToken: string | null,
  url: string,
  data: any
): Promise<any> => {
  const response: AxiosResponse = await GBSM_SERVER.put(url, data, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response;
};

export const deleteWithToken = async (
  accessToken: string | null,
  url: string
): Promise<any> => {
  const response: AxiosResponse = await GBSM_SERVER.delete(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response;
};

export default GBSM_SERVER;
