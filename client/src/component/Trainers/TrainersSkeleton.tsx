const TrainerCardSkeleton = () => {
  return (
    <div className="box-desc relative cursor-pointer w-fit h-fit">
      <div
        style={{ width: "20rem", height: "25rem" }}
        className="relative z-10 bottom-10 bg-gray-200 animate-pulse"
      />
      <div
        style={{ width: "20rem", height: "3rem" }}
        className="absolute top-[3rem] bg-gray-200 animate-pulse"
      />
      <div className="text-primary bg-white w-full text-center shadow-xl absolute z-20 pt-2 pb-5 bottom-[0]">
        <div className="h-5 w-3/4 mx-auto mt-2 bg-gray-200 animate-pulse" />
        <div className="h-4 w-1/2 mx-auto mt-2 bg-gray-200 animate-pulse" />
        <div className="flex gap-4 text-gray-500 w-full justify-center mt-3 text-xl">
          <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default TrainerCardSkeleton;
