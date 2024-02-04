import * as yup from 'yup';

export const CATS_SCHEMA = yup.object({
  url: yup.string().url().required(),
  id: yup.string().required(),
});

export type Cat = yup.InferType<typeof CATS_SCHEMA>;

export interface CatApiResponse {
  images: Cat[];
}
