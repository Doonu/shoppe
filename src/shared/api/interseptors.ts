import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const API: AxiosInstance = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: {
    indexes: null,
  },
});

const logOnDev = (message: string) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.log(
      new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }).format(new Date()),
      message
    );
  }
};

const handlerRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const { method, url } = config;

  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Request`);

  return config;
};

const handlerResponse = (response: AxiosResponse): AxiosResponse => {
  const { method, url } = response.config;
  const { status } = response;

  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Response ${status}`);

  return response;
};

const handlerError = async (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { message } = error;
    const { method, url } = error.config as AxiosRequestConfig;

    logOnDev(`🚨 [API] ${method?.toUpperCase()} ${url} | Error ${message}`);
  } else {
    logOnDev(`🚨 [API] | Error ${error.message}`);
  }

  return Promise.reject(error);
};

API.interceptors.request.use(handlerRequest, handlerError);
API.interceptors.response.use(handlerResponse, handlerError);

export default API;
