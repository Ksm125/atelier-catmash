import type { Cat } from '../../schemas/cats';

const randomIndex = (length: number): number => {
  return Math.floor(Math.random() * length);
};

export const randomVersusCats = (cats: Cat[]): [Cat, Cat] => {
  const catsToSelectFrom = [...cats];
  const firstCatIndex = randomIndex(catsToSelectFrom.length);

  const firstCat = catsToSelectFrom.splice(firstCatIndex, 1)[0];
  const secondCatIndex = randomIndex(catsToSelectFrom.length);
  const secondCat = catsToSelectFrom[secondCatIndex];
  return [firstCat, secondCat];
};
