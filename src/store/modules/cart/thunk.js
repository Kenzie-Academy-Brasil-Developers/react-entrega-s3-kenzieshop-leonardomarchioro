import { addProductCart, removeProductCart } from "./actions";

const cartThunk = (product, status) => (dispatch) => {
  if (status) {
    dispatch(addProductCart(product));
  } else {
    dispatch(removeProductCart(product));
  }
};
export default cartThunk;
