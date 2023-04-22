import { MdShoppingCart } from "react-icons/md";
import { SubHeader } from "../component/Header/SubHeader";
import { formatCurrency } from "../utilities/formatCurrency";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useProductsQuery } from "../data/queries";

type ProductType = {
  id: string;
  name: string;
  img: string;
  imgBig: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
};

type ProductCardProps = {
  id: string;
  name: string;
  img: string;
  price: number;
};

const ProductCard = ({ id, name, img, price }: ProductCardProps) => {
  const { increaseCartQuantity, cartItems } = useShoppingCart();
  const isProductAdded = cartItems.some((item) => item.id === id);
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col w-fit p-5 items-center gap-y-8 mx-auto hover:border-2">
      <img
        src={img}
        alt=""
        className="w-max-64 cursor-pointer"
        onClick={() => {
          scrollToTop();
          navigate(`/merch/${id}`);
        }}
      />
      <h1
        className="text-md text-blue-400 font-medium cursor-pointer hover:text-blue-300"
        onClick={() => {
          scrollToTop();
          navigate(`/merch/${id}`);
        }}
      >
        {name}
      </h1>
      <div className="flex flex-col text-center gap-y-2">
        <h2 className="text-xl text-red-500 font-medium">
          {formatCurrency(price, "USD")}
        </h2>
        {isProductAdded ? (
          <div className="flex items-center font-bold bg-green-400 text-white gap-x-2 px-2 py-1 hover:drop-shadow-sm">
            Added to Cart
          </div>
        ) : (
          <button
            className="flex items-center border-2 border-gray-100 gap-x-2 px-2 py-1 hover:drop-shadow-sm"
            onClick={(e) => {
              e.stopPropagation();
              increaseCartQuantity(id);
            }}
          >
            <MdShoppingCart />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export const Merch = () => {
  const { data: productData, status } = useProductsQuery();
  const [query, setQuery] = useState("");

  const search = (data: ProductType[]) => {
    return data.filter((item) => item.name.toLowerCase().includes(query));
  };

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }
  if (status === "error") return <h1>Not connected to API</h1>;
  return (
    <main>
      <SubHeader title="Merch" />
      <div className="container flex justify-center mx-auto">
        <div className="flex border-2 rounded-2xl w-full mx-2 md:w-3/5 mt-5">
          <div className="flex items-center justify-center px-4 border-r ">
            <AiOutlineSearch />
          </div>
          <input
            type="text"
            className=" w-full border-0 rounded-r-2xl outline-0"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 my-32 just">
        {search(productData).map((product: any) => (
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

export default Merch;
