import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  filterProduct,
  allProducts,
} from "../../store/modules/products/actions.js";
import Button from "../Button";
import { ContainerHeader, ContainerNavBar, ContainerLink } from "./style.js";
import { RiShoppingCartLine } from "react-icons/ri";

const HeaderHome = () => {
  const { cart } = useSelector((state) => state);

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
        <ContainerLink>
          <Link to="/cart">
            <RiShoppingCartLine />
          </Link>
          <p>{cart.length}</p>
        </ContainerLink>
      </ContainerNavBar>
    </ContainerHeader>
  );
};

export default HeaderHome;
