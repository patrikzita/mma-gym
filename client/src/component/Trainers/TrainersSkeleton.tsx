const TrainerCardSkeleton = () => {
  return (
    <div className="box-desc relative h-fit w-fit cursor-pointer">
      <div
        style={{ width: "20rem", height: "25rem" }}
        className="relative bottom-10 z-10 animate-pulse bg-gray-200"
      />
      <div
        style={{ width: "20rem", height: "3rem" }}
        className="absolute top-[3rem] animate-pulse bg-gray-200"
      />
      <div className="absolute bottom-[0] z-20 w-full bg-white pt-2 pb-5 text-center text-primary shadow-xl">
        <div className="mx-auto mt-2 h-5 w-3/4 animate-pulse bg-gray-200" />
        <div className="mx-auto mt-2 h-4 w-1/2 animate-pulse bg-gray-200" />
        <div className="mt-3 flex w-full justify-center gap-4 text-xl text-gray-500">
          <div className="h-6 w-6 animate-pulse rounded-full bg-gray-200" />
          <div className="h-6 w-6 animate-pulse rounded-full bg-gray-200" />
          <div className="h-6 w-6 animate-pulse rounded-full bg-gray-200" />
          <div className="h-6 w-6 animate-pulse rounded-full bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default TrainerCardSkeleton;
