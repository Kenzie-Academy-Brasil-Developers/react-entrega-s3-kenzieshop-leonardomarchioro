import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  filterProduct,
  allProducts,
} from "../../store/modules/products/actions.js";
import Button from "../Button";
import { ContainerHeader, ContainerNavBar } from "./style.js";
import { RiShoppingCartLine } from "react-icons/ri";

const HeaderHome = () => {
  const dispatch = useDispatch();

  const filter = (filter) => {
    dispatch(filterProduct(filter));
  };

  const allProductsList = () => {
    dispatch(allProducts());
  };

  return (
    <ContainerHeader>
      <h1>Kenzie Shop</h1>
      <ContainerNavBar>
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
        </div>

        <Link to="/cart">
          <RiShoppingCartLine />
        </Link>
      </ContainerNavBar>
    </ContainerHeader>
  );
};

export default HeaderHome;
