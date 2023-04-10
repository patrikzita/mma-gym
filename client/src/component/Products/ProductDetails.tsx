import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../pages/Merch";
import { FaTruck } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { formatCurrency } from "../../utilities/formatCurrency";

const ProductDetails = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((product) => product.id === id);

  return (
    <main>
      <div className="flex flex-col md:flex-row mt-32">
        <div className="flex justify-center flex-1">
          <img
            src={`/${product?.imgBig}`}
            alt={product?.name}
            className="w-96"
          />
        </div>
        <div className="flex flex-col items-start flex-1 gap-y-4 py-5 px-16 ">
          <h1 className="text-3xl text-secondary font-bold">{product?.name}</h1>
          <p>{product?.description}</p>
          <div className="flex flex-col gap-y-3 py-3 px-6 bg-secondary/30 w-full">
            <h3 className="font-bold text-green-700">{`In stock - ${product?.quantity} pcs`}</h3>
            <div className="flex gap-x-3 items-center">
              <FaTruck className="text-lg" />
              <p className="">
                <span className="font-bold">Tomorrow</span> at your place.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between w-full">
            <h1 className="text-3xl font-bold text-red-600">
              {formatCurrency(product!.price, "USD")}
            </h1>
            <button className="flex items-center gap-x-3 bg-green-500 p-3 text-white font-bold">
              <BsFillBagCheckFill />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ProductDetails;
