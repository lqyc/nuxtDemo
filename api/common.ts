import request from '@/utils/request';

const preApi = '/api';
//  获取详情接口
export const getList = (params?: any) => {
  return request.post({
    url: `${preApi}/pub/productInfo/reportInfoList`,
    params,
  });
};
