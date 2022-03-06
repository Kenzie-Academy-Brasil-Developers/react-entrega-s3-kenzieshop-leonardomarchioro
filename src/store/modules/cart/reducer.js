import { ADD_CART, REMOVE_CART } from "./actionType";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      return [...state, action.product];
    case REMOVE_CART:
      const remove = state.filter(
        (product) => product.id !== action.product.id
      );
      return remove;
    default:
      return state;
  }
};

export default cartReducer;
