const ProductDetailSkeleton = () => {
  return (
    <main>
      <section className="h-fit w-full animate-pulse md:m-auto md:w-11/12">
        <div className="mt-2 mb-8 flex flex-col justify-center gap-8 md:mt-40 md:flex-row">
          <div className="flex flex-1 flex-col items-center justify-center gap-5 md:flex-row md:items-start">
            <div className="h-64 w-72 bg-gray-200 md:h-96 md:w-96" />
          </div>
          <div className="flex flex-1 flex-col items-start gap-y-4 px-4 md:py-5 md:px-16">
            <div className="flex w-full justify-between">
              <div className="h-10 w-48 bg-gray-200" />
              <div className="h-8 w-8 rounded-full bg-gray-200" />
            </div>
            <div className="h-10 w-3/4 bg-gray-200" />
            <div className="flex w-full flex-col gap-y-3 bg-secondary/30 py-3 px-6">
              <div className="h-4 w-1/4 bg-gray-200" />
              <div className="flex items-center gap-x-3">
                <div className="h-5 w-5 rounded-full bg-gray-200" />
                <div className="h-4 w-1/2 bg-gray-200" />
              </div>
            </div>
            <div className="flex w-full flex-wrap justify-between gap-y-3 gap-x-4">
              <div>
                <div className="h-8 w-1/4 bg-gray-200" />
                <div className="flex items-center gap-x-1 text-lg font-normal">
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
