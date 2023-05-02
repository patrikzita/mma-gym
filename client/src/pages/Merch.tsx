import { MdShoppingCart } from "react-icons/md";
import { SubHeader } from "../component/Header/SubHeader";
import { formatCurrency } from "../utilities/formatCurrency";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useProductsQuery } from "../utilities/queries";
import ProductCardSkeleton from "../component/Products/ProductCardSkeleton";

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
  const handleProductClick = () => {
    window.scrollTo(0, 0);
    navigate(`/merch/${id}`);
  };

  return (
    <div className="mx-auto flex w-fit flex-col items-center gap-y-8 p-5 hover:border-2">
      <img
        src={img}
        alt={name}
        className="w-max-64 cursor-pointer"
        onClick={handleProductClick}
      />
      <h1
        className="text-md cursor-pointer font-medium text-blue-400 hover:text-blue-300"
        onClick={handleProductClick}
      >
        {name}
      </h1>
      <div className="flex flex-col gap-y-2 text-center">
        <h2 className="text-xl font-medium text-red-500">
          {formatCurrency(price, "USD")}
        </h2>
        {isProductAdded ? (
          <div className="flex items-center gap-x-2 bg-green-400 px-2 py-1 font-bold text-white hover:drop-shadow-sm">
            Added to Cart
          </div>
        ) : (
          <button
            className="flex items-center gap-x-2 border-2 border-gray-100 px-2 py-1 hover:drop-shadow-sm"
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
  const { data: productData, isLoading, error } = useProductsQuery();
  const [query, setQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const searchedProducts = useMemo(() => {
    if (!productData) {
      setNoResults(false);
      return [];
    }

    const search = (data: ProductType[]) => {
      return data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
    };

    const results = search(productData);
    setNoResults(results.length === 0);
    return results;
  }, [productData, query]);

  if (isLoading) {
    return (
      <main>
        <SubHeader title="Merch" />
        <div className="container mx-auto flex justify-center">
          <div className="mx-2 mt-5 flex w-full rounded-2xl border-2 md:w-3/5">
            <div className="flex items-center justify-center border-r px-4 ">
              <AiOutlineSearch />
            </div>
            <input
              type="text"
              className=" w-full rounded-r-2xl border-0 outline-0"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="just mx-5 my-32 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </div>
      </main>
    );
  }
  if (error) return <h1>Not connected to API</h1>;
  return (
    <main>
      <SubHeader title="Merch" />
      <div className="container mx-auto flex justify-center">
        <div className="mx-2 mt-5 flex w-full rounded-2xl border-2 md:w-3/5">
          <div className="flex items-center justify-center border-r px-4 ">
            <AiOutlineSearch />
          </div>
          <input
            type="text"
            className=" w-full rounded-r-2xl border-0 outline-0"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      {noResults && (
        <div className="mt-10 text-center">
          <h2 className="text-2xl text-gray-800">No products found</h2>
          <p className="text-gray-600">Please try a different search query.</p>
        </div>
      )}
      <div className="just mx-5 my-32 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {searchedProducts.map((product: any) => (
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
