import { ADD_CART, REMOVE_CART } from "./actionType";

export const addProductCart = (product) => ({
  type: ADD_CART,
  product,
});

export const removeProductCart = (product) => ({
  type: REMOVE_CART,
  product,
});
