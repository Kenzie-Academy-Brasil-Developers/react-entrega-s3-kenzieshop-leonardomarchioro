import { useSelector } from "react-redux";
import CardProduct from "../../components/CardProduct";
import { ContainerHome } from "./style";
import HeaderHome from "../../components/HeaderHome";

const Home = () => {
  const { products } = useSelector((state) => state);

  return (
    <ContainerHome>
      HOME
      <HeaderHome />
      <ul>
        {products.map((product, i) => (
          <CardProduct key={i} product={product} />
        ))}
      </ul>
    </ContainerHome>
  );
};
export default Home;
