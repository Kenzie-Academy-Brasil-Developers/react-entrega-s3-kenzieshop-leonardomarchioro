import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CardProductonCart from "../../components/CardProductonCart";
import OrderSummary from "../../components/OrderSummary";
import { ContainerCart, ContainerWarning } from "./style";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  return (
    <ContainerCart>
      <header>
        <h1>Kenzie Shop</h1>
        <Link to="/">Voltar</Link>
      </header>
      <div>
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((product, i) => (
                <CardProductonCart key={i} product={product} />
              ))}
            </ul>
            <OrderSummary />
          </>
        ) : (
          <ContainerWarning>
            <h1>Ops não tem nada aqui!</h1>
          </ContainerWarning>
        )}
      </div>
    </ContainerCart>
  );
};
export default Cart;
