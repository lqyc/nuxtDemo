import request from '@/utils/request';

const preApi = '/group';
//  获取详情接口
export const getList = async (params?: any) => {
  return request.get({
    url: `${preApi}/list?page=1&usable=1&limit=8`,
    params,
  });
};
