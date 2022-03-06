import { Card } from "./style";

const CardProduct = ({ product }) => {
  return (
    <Card>
      <img src={product.img} alt={product.name} />
      <h3>{product.category}</h3>
      <h2>{product.name}</h2>
      <span>R$ {product.price.toFixed(2)}</span>
    </Card>
  );
};

export default CardProduct;
