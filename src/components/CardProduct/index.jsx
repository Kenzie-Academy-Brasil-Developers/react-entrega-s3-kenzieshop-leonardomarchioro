import { Card } from "./style";
import Button from "../Button";
import { useDispatch } from "react-redux";
import cartThunk from "../../store/modules/cart/thunk";
import { useSelector } from "react-redux";

const CardProduct = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const addCart = () => {
    if (cart.includes(product)) {
    } else {
      dispatch(cartThunk(product, true));
    }
  };

  return (
    <Card>
      <img src={product.img} alt={product.name} />
      <h3>{product.category}</h3>
      <h2>{product.name}</h2>
      <span>R$ {product.price.toFixed(2)}</span>
      <Button type="button" text="Adicionar ao carrinho" onClick={addCart} />
    </Card>
  );
};

export default CardProduct;
