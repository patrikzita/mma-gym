import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTrainersQuery } from "../../utilities/queries";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";

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
      className="box-desc relative cursor-pointer w-fit h-fit"
      onClick={() => navigate(`/trainers/${id}`)}
    >
      <img
        src={img}
        alt={name}
        style={{ width: "20rem" }}
        className="relative z-10 bottom-10 grayscale hover:grayscale-0 transitation duration-500 hover:ease-in-out"
      />
      <img
        src="/images/trainer-bg.png"
        alt="Background of fighter"
        className="absolute top-[3rem]"
      />
      <div className="text-primary bg-white w-full text-center shadow-xl absolute z-20 pt-2 pb-5 bottom-[0]">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-base font-medium">{focus}</p>
        <div className="flex gap-4 text-gray-500 w-full justify-center mt-3 text-xl">
          <a href={facebookUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
            <FaFacebook className="hover:text-secondary" />
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
            <FaInstagram className="hover:text-secondary" />
          </a>
          <a href={twitterUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
            <FaTwitter className="hover:text-secondary" />
          </a>
          <a href={`mailto:${emailUrl}`} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
            <MdEmail className="hover:text-secondary" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Trainers = () => {
  const { data, isLoading } = useTrainersQuery(3);

  if (isLoading) return <Loading />;
  if (!data) return <div>Error</div>;
  return (
    <section className="trainers-section text-center h-3/6 text-white pt-12 pb-24 md:px-12 lg:px-2">
      <h1 className="text-3xl md:text-6xl font-black mt-6">Our trainers</h1>
      <p className="text-white text-xl mt-8">
        The former champions help you to succeed in any discipline.
      </p>
      <div className="flex flex-col items-center gap-y-32 mt-16 md:flex-row md:justify-center md:gap-x-12">
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
