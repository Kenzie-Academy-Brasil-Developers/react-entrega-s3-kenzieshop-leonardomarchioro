import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CardProductonCart from "../../components/CardProductonCart";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <Link to="/">Voltar</Link>
      <ul>
        {cart.map((product, i) => (
          <CardProductonCart key={i} product={product} />
        ))}
      </ul>
    </div>
  );
};
export default Cart;
