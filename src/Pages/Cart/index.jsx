import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CardProductonCart from "../../components/CardProductonCart";
import OrderSummary from "../../components/OrderSummary";
import { ContainerCart } from "./style";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  return (
    <ContainerCart>
      <header>
        <h1>Kenzie Shop</h1>
        <Link to="/">Voltar</Link>
      </header>
      <div>
        <ul>
          {cart.map((product, i) => (
            <CardProductonCart key={i} product={product} />
          ))}
        </ul>
        <OrderSummary />
      </div>
    </ContainerCart>
  );
};
export default Cart;
