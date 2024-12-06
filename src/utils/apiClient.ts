import { ApiExtendedConfig, ApiExtendedError } from '@/types/AxiosApi';
import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: HOST,
  withCredentials: true,
});

const refreshIgnoredUrls: string[] = [];
const notifyIgnoredUrls: string[] = [];

let isRefreshing = false;
let refreshPromise: Promise<void> | null = null;
let hasShownAuthError = false;

const handleError = (error: ApiExtendedError) => {
  return Promise.reject(error);
};

const refreshAuthToken = async () => {
  try {
    const response = await instance({ url: '/auth/refresh', method: 'POST' });
    return response;
  } catch (error) {
    throw error;
  }
};

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config as ApiExtendedConfig;

    if (error.response?.status === 401 && !refreshIgnoredUrls.includes(originalRequest.url)) {
      if (!isRefreshing) {
        isRefreshing = true;
        originalRequest._retry = true;
        refreshPromise = refreshAuthToken()
          .then(() => {
            isRefreshing = false;
            refreshPromise = null;
          })
          .catch((error) => {
            isRefreshing = false;
            refreshPromise = null;
            return Promise.reject(error);
          })
          .finally(() => {
            hasShownAuthError = false;
          });
      }

      try {
        await refreshPromise;
        return instance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export const apiClient = async <R>(
  config: Omit<AxiosRequestConfig, 'baseURL'>,
): Promise<{ result: R; headers: AxiosHeaders }> => {
  try {
    const { data, headers } = await instance(config);
    return {
      result: data,
      headers: headers as AxiosHeaders,
    };
  } catch (error) {
    return handleError(error as ApiExtendedError);
  }
};
