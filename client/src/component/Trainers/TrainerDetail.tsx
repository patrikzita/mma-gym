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
      <div className="flex justify-between items-center bg-gray-800 pt-32 px-3 md:px-32">
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-xl md:text-5xl text-white font-bold uppercase">
            {data.name}
          </h1>
          <div className="text-white font-medium text-sm md:text-xl">
            <p>{data.focus}</p>
            <p>{data.hometown}</p>
            <button className="text-white bg-secondary hover:bg-secondary/80 rounded-lg text-sm md:text-lg px-5 py-2.5 gap-3 self-start mb-3 mt-3">
              Book me
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={data.img} alt={`${data.name} image`} width={400} />
        </div>
      </div>
      <div className="py-10 px-5 text-left md:text-center">
        <h2 className="text-4xl font-bold text-secondary mb-8">
          About trainer
        </h2>
        <p className="max-w-md md:max-w-3xl mx-0 md:mx-auto text-left">
          {data.description}
        </p>
      </div>
      <div className="py-10 px-5 text-center bg-gray-700">
        <h2 className="text-4xl font-bold text-secondary mb-4">
          Stats & Records
        </h2>
        <p className="text-3xl text-white font-bold mb-5">{`${data.score.wins}-${data.score.losses}-${data.score.draws} (W-L-D)`}</p>
        <div className="flex justify-center gap-5 text-white mb-4">
          <div className="w-64 text-center">
            <p className="text-3xl  font-semibold pb-4 border-b-4 border-secondary">
              {data.score.details.winStreak}
            </p>
            <p className="text-lg font-thin uppercase pt-4">Fight win streak</p>
          </div>
          <div className="w-64 text-center">
            <p className="text-3xl font-semibold pb-4 border-b-4 border-secondary">
              {data.score.details.knockouts}
            </p>
            <p className="text-lg font-thin uppercase pt-4">
              Wins by knockouts
            </p>
          </div>
          <div className="w-64 text-center">
            <p className="text-3xl font-semibold pb-4 border-b-4 border-secondary">
              {data.score.details.firstRoundFinish}
            </p>
            <p className="text-lg font-thin uppercase pt-4">
              First Round Finishes
            </p>
          </div>
        </div>

        <button className="text-xl w-64 bg-transparent hover:bg-white-500 text-white font-semibold hover:text-secondary py-2 px-4 border border-white hover:border-secondary rounded">
          View stats
        </button>
      </div>
    </main>
  );
};

export default TrainerDetail;
