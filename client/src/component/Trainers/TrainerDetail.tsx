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
      <div className="flex items-center justify-between bg-gray-800 px-3 pt-32 md:px-32">
        <div className="flex flex-1 flex-col gap-2">
          <h1 className="text-xl font-bold uppercase text-white md:text-5xl">
            {data.name}
          </h1>
          <div className="text-sm font-medium text-white md:text-xl">
            <p>{data.focus}</p>
            <p>{data.hometown}</p>
            <button className="mb-3 mt-3 gap-3 self-start rounded-lg bg-secondary px-5 py-2.5 text-sm text-white hover:bg-secondary/80 md:text-lg">
              Book me
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <img src={data.img} alt={`${data.name} image`} width={400} />
        </div>
      </div>
      <div className="py-10 px-5 text-left md:text-center">
        <h2 className="mb-8 text-4xl font-bold text-secondary">
          About trainer
        </h2>
        <p className="mx-0 max-w-md text-left md:mx-auto md:max-w-3xl">
          {data.description}
        </p>
      </div>
      <div className="bg-gray-700 py-10 px-5 text-center">
        <h2 className="mb-4 text-4xl font-bold text-secondary">
          Stats & Records
        </h2>
        <p className="mb-5 text-3xl font-bold text-white">{`${data.score.wins}-${data.score.losses}-${data.score.draws} (W-L-D)`}</p>
        <div className="mb-4 flex justify-center gap-5 text-white">
          <div className="w-64 text-center">
            <p className="border-b-4  border-secondary pb-4 text-3xl font-semibold">
              {data.score.details.winStreak}
            </p>
            <p className="pt-4 text-lg font-thin uppercase">Fight win streak</p>
          </div>
          <div className="w-64 text-center">
            <p className="border-b-4 border-secondary pb-4 text-3xl font-semibold">
              {data.score.details.knockouts}
            </p>
            <p className="pt-4 text-lg font-thin uppercase">
              Wins by knockouts
            </p>
          </div>
          <div className="w-64 text-center">
            <p className="border-b-4 border-secondary pb-4 text-3xl font-semibold">
              {data.score.details.firstRoundFinish}
            </p>
            <p className="pt-4 text-lg font-thin uppercase">
              First Round Finishes
            </p>
          </div>
        </div>

        <button className="hover:bg-white-500 w-64 rounded border border-white bg-transparent py-2 px-4 text-xl font-semibold text-white hover:border-secondary hover:text-secondary">
          View stats
        </button>
      </div>
    </main>
  );
};

export default TrainerDetail;
