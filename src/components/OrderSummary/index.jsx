import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import cartThunk from "../../store/modules/cart/thunk";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const OrderSummary = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const amount = cart.length;
  const total = cart.reduce((acc, current) => acc + current.price, 0);

  const finishOrder = () => {
    history.push("/");
    dispatch(cartThunk());
    toast.success("Compra finalizada com sucesso!");
  };

  return (
    <div>
      <h1>Resumo do pedido</h1>
      <h3>Quantidade: {amount}</h3>
      <h3>Valor total: {total}</h3>
      <button onClick={finishOrder}>Finalizar pedido</button>
    </div>
  );
};

export default OrderSummary;
