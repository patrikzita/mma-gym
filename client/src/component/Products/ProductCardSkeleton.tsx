const ProductCardSkeleton = () => {
  return (
    <div className="mx-auto flex w-fit flex-col items-center gap-y-8 border-2 border-transparent p-5">
      <div className="h-64 w-64 animate-pulse bg-gray-200" />
      <div className="mx-auto mt-2 h-5 w-3/4 animate-pulse bg-gray-200" />
      <div className="flex flex-col gap-y-2 text-center">
        <div className="mx-auto mt-2 h-5 w-1/4 animate-pulse bg-gray-200" />
        <div className="flex items-center gap-x-2 border-2 border-gray-100 px-2 py-1">
          <div className="h-6 w-6 animate-pulse rounded-full bg-gray-200" />
          <div className="h-4 w-16 animate-pulse bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
