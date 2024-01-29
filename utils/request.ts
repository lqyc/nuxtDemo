const fetchConfig = {
  baseURL: 'https://test.fundhaiyin.com',
  headers: {
    token: '',
  },
};

const fetch = async (url: string, params: any, options?: any): Promise<any> => {
  const apiUrl = fetchConfig.baseURL + url;
  console.log('apiUrl', apiUrl);
  return await new Promise((resolve, reject) => {
    useFetch(apiUrl, {
      params: { ...params },
      ...options,
    })
      .then(res => {
        console.log('data', res);
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};
const request = {
  async get(params?: any): Promise<any> {
    const { url = '', ...rest } = params;
    return await fetch(url, rest, { method: 'get' });
  },
  async post(params?: any): Promise<any> {
    const { url = '', ...rest } = params;
    return await fetch(url, rest, { method: 'post' });
  },
  async delete(body?: any): Promise<any> {
    const { url = '', ...rest } = params;
    return await fetch(url, rest, { method: 'delete', ...body });
  },
};

export default request;
