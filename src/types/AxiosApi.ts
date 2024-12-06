import { AxiosError, InternalAxiosRequestConfig } from 'axios';

export interface ApiExtendedConfig extends Required<InternalAxiosRequestConfig> {
  _retry?: boolean;
}

export interface ApiExtendedError extends AxiosError<ApiError> {
  config: ApiExtendedConfig;
}

export type ApiError = {
  message: string;
};
