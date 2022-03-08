import Button from "../Button";
import { useDispatch } from "react-redux";
import { Card, Container } from "./style";
import cartThunk from "../../store/modules/cart/thunk";
import { toast } from "react-toastify";

const CardProductonCart = ({ product }) => {
  const dispatch = useDispatch();

  const removeProdutc = () => {
    dispatch(cartThunk(product, false));
    toast.success("Produto removido");
  };

  return (
    <Card>
      <img src={product.img} alt={product.name} />
      <div>
        <h3>{product.category}</h3>
      </div>
      <h2>{product.name}</h2>
      <Container>
        <span>R$ {product.price.toFixed(2)}</span>
        <Button type="button" text="X" onClick={removeProdutc} />
      </Container>
    </Card>
  );
};
export default CardProductonCart;
