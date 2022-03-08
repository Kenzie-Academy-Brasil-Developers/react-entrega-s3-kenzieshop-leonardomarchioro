import { Card, Container } from "./style";
import { useDispatch } from "react-redux";
import cartThunk from "../../store/modules/cart/thunk";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { BsCartPlusFill } from "react-icons/bs";

const CardProduct = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const addCart = () => {
    if (cart.includes(product)) {
      toast.error("Produto já foi adicionado ao carrinho");
    } else {
      dispatch(cartThunk(product, true));
      toast.success("Produto adicionado ao carrinho com sucesso!");
    }
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
        <button type="button" onClick={addCart}>
          <BsCartPlusFill />
        </button>
      </Container>
    </Card>
  );
};

export default CardProduct;
