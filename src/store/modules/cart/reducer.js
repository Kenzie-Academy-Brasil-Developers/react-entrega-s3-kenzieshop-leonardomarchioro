import { ADD_CART, REMOVE_CART, FINISH_ORDER } from "./actionType";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      return [...state, action.product];

    case REMOVE_CART:
      const indexItem = state.findIndex(
        (product) => product === action.product
      );
      const removed = state.filter((product, index) => index !== indexItem);
      return removed;

    case FINISH_ORDER:
      return [];

    default:
      return state;
  }
};

export default cartReducer;
