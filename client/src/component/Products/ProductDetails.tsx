import { toast } from "react-hot-toast";
import { BiArrowBack } from "react-icons/bi";
import { BsFillBagCheckFill, BsFillShareFill } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useProductQuery } from "../../utilities/queries";
import { formatCurrency } from "../../utilities/formatCurrency";
import Newsletter from "../Newsletter/Newsletter";
import ProductDetailSkeleton from "./ProductDetailSkeleton";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { increaseCartQuantity, cartItems } = useShoppingCart();
  const { data: productData, isLoading } = useProductQuery(id as string);

  const handleAddToCart = () => {
    const isProductAdded = cartItems.some((item) => item.id === id);
    increaseCartQuantity(id as string);

    if (isProductAdded) {
      toast("This item is already in Cart.");
    } else {
      toast.success("Product was added to your Cart");
    }
  };

  if (isLoading) {
    return <ProductDetailSkeleton />;
  }
  if (!productData) return <h1>Not connected to API</h1>;
  return (
    <main>
      <section className="h-fit w-full md:m-auto md:w-11/12">
        <div className="mt-2 mb-8 flex flex-col justify-center gap-8 md:mt-40 md:flex-row">
          <div className="flex flex-1 flex-col items-center justify-center gap-5 md:flex-row md:items-start">
            <button
              className="ml-4 self-start rounded-full p-2 hover:bg-gray-100 md:ml-0 md:self-auto"
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
          <div className="flex flex-1 flex-col items-start gap-y-4 px-4 md:py-5 md:px-16">
            <div className="flex w-full justify-between">
              <h1 className="text-3xl font-bold text-secondary">
                {productData?.name}
              </h1>
              <button className="rounded-full p-2 hover:bg-gray-100">
                <BsFillShareFill />
              </button>
            </div>
            <p>{productData?.description}</p>
            <div className="flex w-full flex-col gap-y-3 bg-secondary/30 py-3 px-6">
              <h3 className="font-bold text-green-700">{`In stock - ${productData?.quantity} pcs`}</h3>
              <div className="flex items-center gap-x-3">
                <FaTruck className="text-lg" />
                <p className="">
                  <span className="font-bold">Tomorrow</span> at your place.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-wrap justify-between gap-y-3 gap-x-4">
              <div>
                <h1 className="text-3xl font-bold text-red-600">
                  {formatCurrency(productData!.price, "USD")}
                </h1>
                <div className="flex items-center gap-x-1 text-lg font-normal">
                  Special price valid with coupon
                  <div className="flex gap-2 ">
                    <span className="font-bold">PZ15</span>
                    <span className="relative top-2 flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-secondary"></span>
                    </span>
                  </div>
                </div>
              </div>
              <button
                className="flex flex-grow items-center  justify-center gap-x-3 bg-green-500 p-3 font-bold text-white sm:flex-none md:justify-start"
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
