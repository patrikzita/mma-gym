import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTrainersQuery } from "../../utilities/queries";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";
import TrainerCardSkeleton from "./TrainersSkeleton";

type TrainerCardProps = {
  id: string;
  name: string;
  img: string;
  focus: string;
  instagramUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  emailUrl: string;
};

const TrainerCard = ({
  id,
  name,
  img,
  focus,
  facebookUrl,
  instagramUrl,
  twitterUrl,
  emailUrl,
}: TrainerCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="box-desc relative h-fit w-fit cursor-pointer"
      onClick={() => navigate(`/trainers/${id}`)}
    >
      <img
        src={img}
        alt={name}
        style={{ width: "20rem" }}
        className="transitation relative bottom-10 z-10 grayscale duration-500 hover:grayscale-0 hover:ease-in-out"
      />
      <img
        src="/images/trainer-bg.png"
        alt="Background of fighter"
        className="absolute top-[3rem]"
      />
      <div className="absolute bottom-[0] z-20 w-full bg-white pt-2 pb-5 text-center text-primary shadow-xl">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-base font-medium">{focus}</p>
        <div className="mt-3 flex w-full justify-center gap-4 text-xl text-gray-500">
          <a
            href={facebookUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <FaFacebook className="hover:text-secondary" />
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <FaInstagram className="hover:text-secondary" />
          </a>
          <a
            href={twitterUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <FaTwitter className="hover:text-secondary" />
          </a>
          <a
            href={`mailto:${emailUrl}`}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <MdEmail className="hover:text-secondary" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Trainers = () => {
  const { data, isLoading } = useTrainersQuery(3);

  if (isLoading)
    return (
      <section className="trainers-section h-3/6 pt-12 pb-24 text-center text-white md:px-12 lg:px-2">
        <h1 className="mt-6 text-3xl font-black md:text-6xl">Our trainers</h1>
        <p className="mt-8 text-xl text-white">
          The former champions help you to succeed in any discipline.
        </p>
        <div className="mt-16 flex flex-col items-center gap-y-32 md:flex-row md:justify-center md:gap-x-12">
          <TrainerCardSkeleton />
          <TrainerCardSkeleton />
          <TrainerCardSkeleton />
        </div>
      </section>
    );
  if (!data) return <div>Error</div>;
  return (
    <section className="trainers-section h-3/6 pt-12 pb-24 text-center text-white md:px-12 lg:px-2">
      <h1 className="mt-6 text-3xl font-black md:text-6xl">Our trainers</h1>
      <p className="mt-8 text-xl text-white">
        The former champions help you to succeed in any discipline.
      </p>
      <div className="mt-16 flex flex-col items-center gap-y-32 md:flex-row md:justify-center md:gap-x-12">
        {data.map((trainer: any) => (
          <TrainerCard
            key={trainer.name}
            id={trainer.id}
            name={trainer.name}
            img={trainer.img}
            focus={trainer.focus}
            facebookUrl={trainer.facebookUrl}
            instagramUrl={trainer.instagramUrl}
            twitterUrl={trainer.twitterUrl}
            emailUrl={trainer.emailUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Trainers;
