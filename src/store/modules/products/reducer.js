import PC1 from "../../../assets/PC1.jpg";
import PC2 from "../../../assets/PC2.jpg";
import PC3 from "../../../assets/PC3.png";
import Cadeira from "../../../assets/Cadeira.jpg";

import { ALL_PRODUCT, FILTER_PRODUCT } from "./actionsType";

const products = [
  {
    name: "Computador Gamer - GTX1650 - I5 - SSD240GB",
    price: 4579,
    category: "Computador",
    img: PC1,
    id: 1,
  },
  {
    name: "Computador Gamer - RTX3060 - I5 - SSD240GB",
    price: 6299,
    category: "Computador",
    img: PC2,
    id: 2,
  },
  {
    name: "Computador Gamer - RTX3060 - Rayzen 5 - HD 1TB",
    price: 10259,
    category: "Computador",
    img: PC3,
    id: 3,
  },
  {
    name: "Cadeira Gamer AKRacing",
    price: 1799,
    category: "Cadeira",
    img: Cadeira,
    id: 4,
  },
];

const productsReducer = (state = products, action) => {
  switch (action.type) {
    case FILTER_PRODUCT:
      const filterComputer = products.filter(
        (product) => product.category === action.filter
      );
      return filterComputer;
    case ALL_PRODUCT:
      return products;
    default:
      return state;
  }
};

export default productsReducer;
