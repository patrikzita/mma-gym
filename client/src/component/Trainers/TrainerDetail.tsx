import { useParams } from "react-router-dom";
import { useTrainerQuery } from "../../utilities/queries";
import Loading from "../Loading";
import { useEffect } from "react";

const TrainerDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useTrainerQuery(id as string);

  console.log(data);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return <Loading />;
  if (!data) return <div>Error</div>;
  return (
    <main>
      <div className="flex justify-between items-center bg-gray-800 pt-32 px-8">
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-xl md:text-5xl text-white font-bold uppercase">
            {data.name}
          </h1>
          <div className="text-white font-medium text-sm md:text-xl">
            <p>{data.focus}</p>
            <p>{data.hometown}</p>
          </div>
          <div className="flex md:hidden flex-col gap-4">
            <div className="text-white font-medium text-sm md:text-xl">
              <p>{`${data.age} y.o`}</p>
              <p>{`${data.weight} LBS`}</p>
            </div>
            <button className="text-white  bg-secondary hover:bg-secondary/80 rounded-lg text-sm md:text-lg px-5 py-2.5 gap-3 self-start mb-3">
              Book me
            </button>
          </div>
        </div>
        <img
          className="flex-1"
          src={data.img}
          alt={`${data.name} image`}
          width={100}
        />
        <div className="hidden md:flex flex-col flex-1 items-center gap-4">
          <div className="text-white font-medium text-xl">
            <p>{`${data.age} y.o`}</p>
            <p>{`${data.weight} LBS`}</p>
          </div>
          <button className="text-white mx-auto bg-secondary hover:bg-secondary/80 rounded-lg text-lg px-5 py-2.5 inline-flex items-center gap-3 self-start">
            Book me
          </button>
        </div>
      </div>
      <div className="py-10 px-5 text-left md:text-center">
        <h2 className="text-3xl font-bold text-secondary mb-8">
          About trainer
        </h2>
        <p className="max-w-md mx-0 md:mx-auto text-left">{data.description}</p>
      </div>
      <div className="h-44 bg-gray-800 py-10 px-5">
        <div>

        </div>
        <div>
          <h3 className="text-3xl font-bold text-white mb-8">Stats & Records</h3>
          <p>{`${data.score.wins}-${data.score.losses}-${data.score.draws} (W-L-D)`}</p>
        </div>
      </div>
    </main>
  );
};

export default TrainerDetail;
