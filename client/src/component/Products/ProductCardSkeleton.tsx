
const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col w-fit p-5 items-center gap-y-8 mx-auto border-2 border-transparent">
      <div className="w-64 h-64 bg-gray-200 animate-pulse" />
      <div className="h-5 w-3/4 mx-auto mt-2 bg-gray-200 animate-pulse" />
      <div className="flex flex-col text-center gap-y-2">
        <div className="h-5 w-1/4 mx-auto mt-2 bg-gray-200 animate-pulse" />
        <div className="flex items-center border-2 border-gray-100 gap-x-2 px-2 py-1">
          <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-4 w-16 bg-gray-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
