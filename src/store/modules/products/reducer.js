import PC1 from "../../../assets/PC1.jpg";
import PC2 from "../../../assets/PC2.jpg";
import PC3 from "../../../assets/PC3.png";
import Poltrona from "../../../assets/Poltrona.jpg";
import Cadeira from "../../../assets/Cadeira.jpg";

import { ALL_PRODUCT, FILTER_PRODUCT } from "./actionsType";

const products = [
  {
    name: "Computador Gamer - GTX1650 - I5 - SSD240GB",
    price: 4579,
    description: [
      "Processador: - Intel Core i5-10400F, 6-Core, 12-Threads, 2.9Ghz (4.3Ghz Turbo), Cache 12MB, LGA1200, BX8070110400F",
      "Cooler: - Cooler Box(Acompanhado do processador)",
      "PlacaMae: - H510M DDR4 Socket LGA1200 Chipset Intel H510",
      "Memoria: - Memória 8GB (1x8) DDR4",
      "Armazenamento: - SSD 240GB 2.5 Sata III 6GB/s",
      "PlacadeVideo: - GeForce GTX 1650 GDDR5 4GB 128-bit",
      "Fonte: - 500W 80 Plus PFC Ativo",
      "Gabinete: - Mancer Hylian Lateral De Vidro Preto, MCR-HLN-BL01",
    ],
    category: "Computador",
    img: PC1,
  },
  {
    name: "Computador Gamer - RTX3060 - I5 - SSD240GB",
    price: 6299,
    description: [
      "Processador: - Processador Intel Core i5-10400F, 6-Core, 12-Threads, 2.9Ghz (4.3Ghz Turbo), Cache 12MB, LGA1200, BX8070110400F",
      "Cooler: - Cooler BOX Original Intel (Processadores K e X nao suportam cooler box)",
      "PlacaMae: - Placa Mae Asus Prime H510M-E DDR4 LGA1200 Intel H510, PRIME H510M-E",
      "Memoria: - Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 3000Mhz Vermelha, TLPRD48G3000HC16C01",
      "Armazenamento: - SSD Lexar NQ100 240GB 2.5 SATA 6GB/s, LNQ100X240G-RNNNG",
      "PlacadeVideo: - Placa de Video Galax GeForce RTX 3060 1-Click OC, LHR, 12GB, GDDR6, 192-bit, 36NOL7MD1VOC-NAC",
      "Fonte: - Fonte Pichau Gaming Nidus 500W Bronze 80 Plus, PG-5001-BR-OEM",
      "Gabinete: - Gabinete Gamer TGT Skylancer Lateral De Vidro Preto, TGT-SKL-BL01",
    ],
    category: "Computador",
    img: PC2,
  },
  {
    name: "Computador Gamer - RTX3060 - Rayzen 5 - HD 1TB",
    price: 10259,
    description: [
      "Processador: - AMD Ryzen 5 5600X, 6-Core, 2-Threads, 3.7GHz (4.6GHz Turbo), Cache 35MB, AM4, 100-000000065",
      "Cooler: - Pichau Gaming Aqua X100 RGB, PG-AQX100-RGB",
      "PlacaMae: - X570 DDR4 Socket AM4 Chipset AMD X570",
      "Memoria: - Memória 16GB DDR4 3000Mhz",
      "Armazenamento: - HD 1TB 3.5 Sata III 6GB/s",
      "PlacadeVideo: - Galax GeForce RTX 3060 1-Click OC, LHR, 12GB, GDDR6, 192-bit, 36NOL7MD1VOC",
      "Fonte: - 650W 80 Plus PFC Ativo",
      "Gabinete: - Pichau Seraph E RGB Lateral Vidro Temp, PGSE-0E1-RGB",
    ],
    category: "Computador",
    img: PC3,
  },
  {
    name: "Poltrona Gamer",
    price: 1999,
    description: ["Poltrona Gamer Mancer Fenrir RGB, Preto, MCR-FNR-GRB01"],
    category: "Cadeira",
    img: Poltrona,
  },
  {
    name: "Cadeira Gamer AKRacing",
    price: 1799,
    description: ["Cadeira Gamer AKRacing Nitro Azul,10031-5"],
    category: "Cadeira",
    img: Cadeira,
  },
];

const productsReducer = (state = products, action) => {
  console.log(action);
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
