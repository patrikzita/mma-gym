const TrainerDetailSkeleton = () => {
  return (
    <main>
      <div className="flex items-center justify-between bg-gray-800 px-3 pt-32 pb-16 md:px-32 animate-pulse">
        <div className="flex flex-1 flex-col gap-2">
          <div className="h-12 w-48 bg-gray-700 md:h-20 md:w-96"></div>
          <div className="flex flex-col gap-2">
            <div className="h-4 w-32 bg-gray-700 md:h-6 md:w-64"></div>
            <div className="h-4 w-32 bg-gray-700 md:h-6 md:w-64"></div>
            <div className="h-8 w-32 bg-secondary md:h-12 md:w-64"></div>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="w-64 h-64 bg-gray-700 md:w-96 md:h-96"></div>
        </div>
      </div>
      <div className="py-10 px-5 text-left md:text-center animate-pulse">
        <div className="mb-8 h-12 w-48 bg-secondary mx-auto md:h-16 md:w-64"></div>
        <div className="mx-0 max-w-md h-64 bg-gray-300 md:mx-auto md:max-w-3xl"></div>
      </div>
      <div className="bg-gray-700 py-10 px-5 text-center animate-pulse">
        <div className="mb-4 h-12 w-48 bg-secondary mx-auto md:h-16 md:w-64"></div>
        <div className="mb-5 h-8 w-32 bg-white mx-auto md:h-12 md:w-64"></div>
        <div className="mb-4 flex justify-center gap-5">
          <div className="w-64 text-center">
            <div className="border-b-4  border-secondary pb-4 h-8 w-16 mx-auto md:h-12 md:w-32"></div>
            <div className="pt-4 h-4 w-32 bg-gray-300 mx-auto md:h-6 md:w-48"></div>
          </div>
          <div className="w-64 text-center">
            <div className="border-b-4 border-secondary pb-4 h-8 w-16 mx-auto md:h-12 md:w-32"></div>
            <div className="pt-4 h-4 w-32 bg-gray-300 mx-auto md:h-6 md:w-48"></div>
          </div>
          <div className="w-64 text-center">
            <div className="border-b-4 border-secondary pb-4 h-8 w-16 mx-auto md:h-12 md:w-32"></div>
            <div className="pt-4 h-4 w-32 bg-gray-300 mx-auto md:h-6 md:w-48"></div>
          </div>
        </div>
        <div className="h-10 w-40 bg-white mx-auto md:h-12 md:w-64"></div>
      </div>
    </main>
  );
};

export default TrainerDetailSkeleton;
``
