import Button from "../Button";
import { useDispatch } from "react-redux";
import { Card } from "./style";
import cartThunk from "../../store/modules/cart/thunk";

const CardProductonCart = ({ product }) => {
  const dispatch = useDispatch();

  const removeProdutc = () => {
    dispatch(cartThunk(product, false));
  };

  return (
    <Card>
      <img src={product.img} alt={product.name} />
      <h3>{product.category}</h3>
      <h2>{product.name}</h2>
      <span>R$ {product.price.toFixed(2)}</span>
      <Button type="button" text="Remover" onClick={removeProdutc} />
    </Card>
  );
};
export default CardProductonCart;
