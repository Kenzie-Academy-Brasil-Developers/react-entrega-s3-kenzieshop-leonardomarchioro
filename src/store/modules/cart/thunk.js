import { addProductCart, removeProductCart, finishOrder } from "./actions";

const cartThunk = (product, status) => (dispatch) => {
  if (product) {
    if (status) {
      dispatch(addProductCart(product));
      console.log("add");
    } else {
      dispatch(removeProductCart(product));
      console.log("remove");
    }
  } else {
    dispatch(finishOrder());
    console.log("finalizou");
  }
};
export default cartThunk;
