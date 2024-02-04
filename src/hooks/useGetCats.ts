import { useFetch } from 'usehooks-ts';
import { API_URL } from '../configs';
import { CatApiResponse } from '../schemas/cats';

export const useGetCats = () => {
  const { data } = useFetch<CatApiResponse>(API_URL);

  return data?.images ?? [];
};
