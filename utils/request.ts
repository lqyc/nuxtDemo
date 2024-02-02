const fetchConfig = {
  baseURL: 'http://demonuxtapi.dishait.cn/pc',
  headers: {
    appid: 'bd9d01ecc75dbbaaefce',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': true,
    // 'Access-Control-Allow-Headers': '*',
    // 'Content-Type': 'application/json;charset=UTF-8',
    // 'Access-Control-Allow-Headers': 'Authorization,Access-Control-Allow-Origin,Content-Type',
  },
};

const fetch = async (url: string, params: any, options?: any): Promise<any> => {
  const apiUrl = fetchConfig.baseURL + url;
  const apiRes = await useFetch(apiUrl, {
    default: () => [],
    params: { ...params },
    ...options,
    headers: fetchConfig.headers,
    withCredentials: false,
    // transform: res => {
    //   // console.log('transform', res);
    //   return res;
    // },
    onRequest(res) {
      // console.log('onRequest', res);
      // Set the request headers
      //   options.headers = options.headers || {};
    },
    onResponse({ request, response, options }) {
      // Process the response data
      // console.log('onResponse', response._data);
      return response._data;
    },
    onRequestError({ request, options, error }) {
      console.log('onRequestError', error);
      // Handle the request errors
    },
    onResponseError({ request, options, error }) {
      console.log('onResponseError--', error);
      // Handle the request errors
    },
  }).catch(res => {
    console.log('data', res);
  });
  const result = apiRes?.data || {};
  return result._rawValue || {};
};

const request = {
  get: async (params?: any) => {
    const { url = '', ...rest } = params;
    return fetch(url, rest, { method: 'GET' });
  },
  async post(params?: any): Promise<any> {
    const { url = '', ...rest } = params;
    return fetch(url, rest, { method: 'POST' });
  },
  async delete(body?: any): Promise<any> {
    const { url = '', ...rest } = params;
    return fetch(url, rest, { method: 'delete', ...body });
  },
};

export default request;
