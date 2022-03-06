import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  filterProduct,
  allProducts,
} from "../../store/modules/products/actions.js";
import Button from "../Button";

const HeaderHome = () => {
  const dispatch = useDispatch();

  const filter = (filter) => {
    dispatch(filterProduct(filter));
  };

  const allProductsList = () => {
    dispatch(allProducts());
  };

  return (
    <div>
      <Button
        type={"button"}
        text={"Computadores"}
        onClick={() => filter("Computador")}
      />
      <Button
        type={"button"}
        text={"Cadeira"}
        onClick={() => filter("Cadeira")}
      />
      <Button type={"button"} text={"Todos"} onClick={allProductsList} />
      <Link to="/cart">Carrinho</Link>
    </div>
  );
};

export default HeaderHome;
