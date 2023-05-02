const ProductDetailSkeleton = () => {
  return (
    <main>
      <section className="w-full h-fit md:w-11/12 md:m-auto animate-pulse">
        <div className="flex flex-col gap-8 justify-center md:flex-row mt-2 md:mt-40 mb-8">
          <div className="flex flex-col md:flex-row justify-center gap-5 items-center md:items-start flex-1">
            <div className="w-72 md:w-96 h-64 md:h-96 bg-gray-200" />
          </div>
          <div className="flex flex-col items-start flex-1 gap-y-4 md:py-5 px-4 md:px-16">
            <div className="flex justify-between w-full">
              <div className="h-10 w-48 bg-gray-200" />
              <div className="h-8 w-8 bg-gray-200 rounded-full" />
            </div>
            <div className="h-10 w-3/4 bg-gray-200" />
            <div className="flex flex-col gap-y-3 py-3 px-6 bg-secondary/30 w-full">
              <div className="h-4 w-1/4 bg-gray-200" />
              <div className="flex gap-x-3 items-center">
                <div className="h-5 w-5 bg-gray-200 rounded-full" />
                <div className="h-4 w-1/2 bg-gray-200" />
              </div>
            </div>
            <div className="flex flex-wrap justify-between w-full gap-y-3 gap-x-4">
              <div>
                <div className="h-8 w-1/4 bg-gray-200" />
                <div className="flex gap-x-1 text-lg items-center font-normal">
                  <div className="h-4 w-1/2 bg-gray-200" />
                </div>
              </div>
              <div className="h-10 w-32 bg-gray-200" />
            </div>
          </div>
        </div>
      </section>
      <hr />
    </main>
  );
};

export default ProductDetailSkeleton;
