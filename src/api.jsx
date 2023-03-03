import axios from "axios";

const createAxiosInstance = (config) => {
  const { token } = config;

  const axiosInstance = axios.create();

  axiosInstance.interceptors.request.use(
    (config) => {
      console.log({ token });
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      console.log({ config });
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        // hacer algo en caso de que el token haya expirado o sea inválido
      }
      return Promise.reject(error);
    }
  );

  console.log({ axiosInstance });

  return axiosInstance;
};

const api = {
  get: async (url, config) => {
    console.log("asd");
    const axiosInstance = createAxiosInstance(config);
    const response = await axiosInstance.get(url);
    return response.data;
  },
  post: async (url, data, config) => {
    const axiosInstance = createAxiosInstance(config);
    const response = await axiosInstance.post(url, data);
    return response.data;
  },
  put: async (url, data, config) => {
    const axiosInstance = createAxiosInstance(config);
    const response = await axiosInstance.put(url, data);
    return response.data;
  },
  delete: async (url, config) => {
    const axiosInstance = createAxiosInstance(config);
    const response = await axiosInstance.delete(url);
    return response.data;
  },
  patch: async (url, data, config) => {
    const axiosInstance = createAxiosInstance(config);
    const response = await axiosInstance.patch(url, data);
    return response.data;
  },
};

export default api; 