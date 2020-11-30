import { axiosInstance as axios } from './config';
import { IDocumentGetParams, IDocumentsGetListParams, IDocumentCreateParams } from '../../types';

export async function get(params: IDocumentGetParams) {
  return await axios.get(`/${params.id}`);
}

export async function getList(params: IDocumentsGetListParams) {
  return await axios.get('/', {
    params: { ...params },
  });
}

export async function create(params: IDocumentCreateParams) {
  return await axios.post('/', params);
}
