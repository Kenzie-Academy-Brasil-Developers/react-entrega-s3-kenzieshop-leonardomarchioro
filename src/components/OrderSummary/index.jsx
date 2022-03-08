import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import cartThunk from "../../store/modules/cart/thunk";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { ContainerOrder } from "./style";
import Button from "../Button";

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
    <ContainerOrder>
      <h1>Resumo do pedido</h1>
      <div>
        <h3>{amount} Produtos</h3>
        <h3>Valor total: R$ {total.toFixed(2)}</h3>
      </div>
      <Button type="button" text="Finalizar pedido" onClick={finishOrder} />
    </ContainerOrder>
  );
};

export default OrderSummary;
