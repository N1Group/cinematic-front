import { useUserStore } from '@/stores/user';
import { ApiExtendedConfig, ApiExtendedError } from '@/types/AxiosApi';
import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: HOST,
  withCredentials: true,
});

const refreshIgnoredUrls = ['/auth/refresh', '/auth/verify/code'];
const notifyIgnoredUrls = ['/auth/refresh', '/user/avatar'];

let isRefreshing = false;
let refreshPromise: Promise<void> | null = null;
let hasShownAuthError = false;

const handleError = (error: ApiExtendedError) => {
  if (error.config._retry) return Promise.reject(error);
  const logout = useUserStore.getState().logout;
  // const errorMessage = error.response?.data.message || 'Произошла неизвестная ошибка';

  if (error.config?.url === '/auth/refresh' && error.response?.status === 401) {
    if (hasShownAuthError) return Promise.reject(error);
    logout();
    // addNotify({
    //   type: NotificationType.Error,
    //   title: 'Вы не авторизованы',
    // });
    hasShownAuthError = true;
  } else if (!notifyIgnoredUrls.includes(error.config?.url!)) {
    // addNotify({
    // type: NotificationType.Error,
    // title: errorMessage,
    // description: error.config?.url,
    // });
  }

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
