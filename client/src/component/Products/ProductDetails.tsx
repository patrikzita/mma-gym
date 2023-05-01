import { toast } from "react-hot-toast";
import { BiArrowBack } from "react-icons/bi";
import { BsFillBagCheckFill, BsFillShareFill } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useProductQuery } from "../../utilities/queries";
import { formatCurrency } from "../../utilities/formatCurrency";
import Newsletter from "../Newsletter/Newsletter";
import Loading from "../Loading";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { increaseCartQuantity, cartItems } = useShoppingCart();
  const { data: productData, status } = useProductQuery(id as string);

  const handleAddToCart = () => {
    const isProductAdded = cartItems.some((item) => item.id === id);
    increaseCartQuantity(id as string);

    if (isProductAdded) {
      toast("This item is already in Cart.");
    } else {
      toast.success("Product was added to your Cart")
    }
  };

  
  if (status === "loading") {
    return <Loading />;
  }
  if (status === "error") return <h1>Not connected to API</h1>;
  return (
    <main>
      <section className="w-full h-fit md:w-11/12 md:m-auto">
        <div className="flex flex-col gap-8 justify-center md:flex-row mt-2 md:mt-40 mb-8">
          <div className="flex flex-col md:flex-row justify-center gap-5 items-center md:items-start flex-1">
            <button
              className="ml-4 md:ml-0 self-start md:self-auto hover:bg-gray-100 p-2 rounded-full"
              onClick={() => navigate(-1)}
            >
              <BiArrowBack className="text-3xl" />
            </button>
            <img
              src={`${productData?.imgBig}`}
              alt={productData?.name}
              className="w-72 md:w-96"
            />
          </div>
          <div className="flex flex-col items-start flex-1 gap-y-4 md:py-5 px-4 md:px-16">
            <div className="flex justify-between w-full">
              <h1 className="text-3xl text-secondary font-bold">
                {productData?.name}
              </h1>
              <button className="hover:bg-gray-100 p-2 rounded-full">
                <BsFillShareFill />
              </button>
            </div>
            <p>{productData?.description}</p>
            <div className="flex flex-col gap-y-3 py-3 px-6 bg-secondary/30 w-full">
              <h3 className="font-bold text-green-700">{`In stock - ${productData?.quantity} pcs`}</h3>
              <div className="flex gap-x-3 items-center">
                <FaTruck className="text-lg" />
                <p className="">
                  <span className="font-bold">Tomorrow</span> at your place.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-between w-full gap-y-3 gap-x-4">
              <div>
                <h1 className="text-3xl font-bold text-red-600">
                  {formatCurrency(productData!.price, "USD")}
                </h1>
                <div className="flex gap-x-1 text-lg items-center font-normal">
                  Special price valid with coupon
                  <div className="flex gap-2 ">
                    <span className="font-bold">PZ15</span>
                    <span className="relative flex h-3 w-3 top-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                    </span>
                  </div>
                </div>
              </div>
              <button
                className="flex flex-grow sm:flex-none  justify-center md:justify-start items-center gap-x-3 bg-green-500 p-3 text-white font-bold"
                onClick={handleAddToCart}
              >
                <BsFillBagCheckFill />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <Newsletter />
    </main>
  );
};
export default ProductDetails;
