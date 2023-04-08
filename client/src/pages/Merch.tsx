import { MdShoppingCart } from "react-icons/md";
import { SubHeader } from "../component/Header/SubHeader";
import { formatCurrency } from "../utilities/formatCurrency";

const PRODUCTS = [
  {
    id: "gloves001",
    name: "Boxing Gloves",
    img: "images/products/small/boxing_gloves.png",
    price: 39.99,
    quantity: 10,
    category: "boxing",
  },
  {
    id: "shinguards001",
    name: "Shin Guards",
    img: "images/products/small/shin_guards.png",
    price: 29.99,
    quantity: 5,
    category: "MMA",
  },
  {
    id: "mouthguard001",
    name: "Mouthguard",
    img: "images/products/small/mouthguard.png",
    price: 9.99,
    quantity: 20,
    category: "boxing",
  },
  {
    id: "headgear001",
    name: "Boxing Headgear",
    img: "images/products/small/boxing_headgear.png",
    price: 49.99,
    quantity: 2,
    category: "boxing",
  },
  {
    id: "focusmitts001",
    name: "Focus Mitts",
    img: "images/products/small/focus_mitts.png",
    price: 29.99,
    quantity: 8,
    category: "boxing",
  },
  {
    id: "punchingbag001",
    name: "Punching Bag",
    img: "images/products/small/punching_bag.png",
    price: 149.99,
    quantity: 1,
    category: "boxing",
  },
  {
    id: "skippingrope001",
    name: "Skipping Rope",
    img: "images/products/small/skipping_rope.png",
    price: 14.99,
    quantity: 15,
    category: "fitness",
  },
  {
    id: "weightedvest001",
    name: "Weighted Vest",
    img: "images/products/small/weighted_vest.png",
    price: 69.99,
    quantity: 3,
    category: "fitness",
  },
  {
    id: "resistancebands001",
    name: "Resistance Bands",
    img: "images/products/small/resistance_bands.png",
    price: 19.99,
    quantity: 10,
    category: "fitness",
  },
  {
    id: "grapplingdummy001",
    name: "Grappling Dummy",
    img: "images/products/small/grappling_dummy.png",
    price: 199.99,
    quantity: 1,
    category: "MMA",
  },
];

type ProductCardProps = {
  id: string;
  name: string;
  img: string;
  price: number;
};

const ProductCard = ({ id, name, img, price }: ProductCardProps) => {
  return (
    <div className="flex flex-col w-fit p-5 items-center gap-y-8 mx-auto hover:border-2">
      <img src={img} alt="" className="w-max-64 cursor-pointer" />
      <h1 className="text-md text-blue-400 font-medium cursor-pointer hover:text-blue-300">
        {name}
      </h1>
      <div className="flex flex-col text-center gap-y-2">
        <h2 className="text-xl text-red-500 font-medium">
          {formatCurrency(price, "USD")}
        </h2>
        <button className="flex items-center border-2 border-gray-100 gap-x-2 px-2 py-1 hover:drop-shadow-sm">
          <MdShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export const Merch = () => {
  return (
    <main>
      <SubHeader title="Merch" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 my-32 just">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
          />
        ))}
      </div>
    </main>
  );
};
