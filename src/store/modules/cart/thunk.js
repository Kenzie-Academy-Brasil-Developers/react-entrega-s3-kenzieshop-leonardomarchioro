import { addProductCart, removeProductCart, finishOrder } from "./actions";

const cartThunk = (product, status) => (dispatch) => {
  if (product) {
    if (status) {
      dispatch(addProductCart(product));
    } else {
      dispatch(removeProductCart(product));
    }
  } else {
    dispatch(finishOrder());
  }
};
export default cartThunk;
