import { requestClient } from '#/api/request';

/**
 * 获取用户分页数据
 */
export async function getUserPageApi(params: any) {
  return requestClient.get('/user/page', { params });
}
