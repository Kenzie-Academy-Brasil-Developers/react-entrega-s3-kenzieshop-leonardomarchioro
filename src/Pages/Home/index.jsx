import { useSelector, useDispatch } from "react-redux";
import {
  filterProduct,
  allProducts,
} from "../../store/modules/products/actions";

const Home = () => {
  const { products } = useSelector((state) => state);

  const dispatch = useDispatch();

  const filter = (filter) => {
    dispatch(filterProduct(filter));
  };

  const allProductsList = () => {
    dispatch(allProducts());
  };

  console.log(products);
  return (
    <div>
      HOME
      <button onClick={() => filter("Computador")}>Computadores</button>
      <button onClick={() => filter("Cadeira")}>Cadeiras</button>
      <button onClick={allProductsList}>Todos</button>
      <ul>
        {products.map((p, i) => (
          <li key={i}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
