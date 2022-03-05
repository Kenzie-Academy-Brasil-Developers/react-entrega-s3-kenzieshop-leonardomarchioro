import { ALL_PRODUCT, FILTER_PRODUCT } from "./actionsType";

export const filterProduct = (filter) => ({
  type: FILTER_PRODUCT,
  filter,
});

export const allProducts = () => ({
  type: ALL_PRODUCT,
});
