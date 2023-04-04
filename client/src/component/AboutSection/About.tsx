import { GiBookCover, GiProgression, GiWeightLiftingUp } from "react-icons/gi";
import {
  MdArrowForward,
  MdFitnessCenter,
  MdSportsGymnastics,
} from "react-icons/md";
import AboutCard from "./AboutCard";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const cardList = [
    {
      title: "Progression",
      description: "It´s just a matter of time when you become a fighter.",
      icon: <GiProgression className="text-[3rem] text-secondary" />,
      img: "/images/1.jpg",
    },
    {
      title: "Fitness",
      description: "Our expert trainers are here to help you progress.",
      icon: <MdFitnessCenter className="text-[3rem] text-secondary" />,
      img: "/images/1.jpg",
    },
    {
      title: "Discipline",
      description: "At MMA gym, we believe in more than just fighting.",
      icon: <MdFitnessCenter className="text-[3rem] text-secondary" />,
      img: "/images/1.jpg",
    },
  ];

  return (
    <section className="about-section py-5 relative">
      <div className="flex flex-col justify-center px-5 gap-1 lg:gap-10 lg:flex-row lg:absolute top-0 lg:-top-40 w-full">
        {cardList.map((card) => (
          <AboutCard
            key={card.title}
            title={card.title}
            description={card.description}
            Icon={card.icon}
          />
        ))}
      </div>
      <div className="px-5 md:px-32">
        <div className="flex justify-between mt-5 lg:mt-[10.5rem] px-0 md:px-5">
          <div className="w-full lg:w-5/12 flex flex-col gap-4 text-center lg:text-left px-10">
            <div>
              <h2 className="text-xl text-secondary font-bold">
                Start your journey
              </h2>
              <h1 className="text-3xl md:text-5xl font-bold">
                Discover the Ultimate MMA Experience at our Gym
              </h1>
            </div>
            <p className="text-xl font-medium">
              Are you ready to transform your life and embark on a journey of
              self-discovery, discipline, and ultimate fitness? Look no further!
            </p>
            <div className="flex flex-col md:flex-row text-secondary text-center w-full justify-start gap-3">
              <div className="px-0 md:px-5">
                <MdSportsGymnastics className="text-6xl lg:text-7xl mx-auto" />
                <h1 className="text-xl font-medium text-primary">
                  The best boxers
                </h1>
              </div>
              <div className="border-slate-300 md:border-r-2 md:border-l-2">
                <GiWeightLiftingUp className="text-6xl lg:text-7xl mx-auto" />
                <h1 className="text-xl font-medium text-primary">
                  The modern equipment
                </h1>
              </div>
              <div>
                <GiBookCover className="text-6xl lg:text-7xl mx-auto" />
                <h1 className="text-base md:text-xl font-medium text-primary">
                  Education included
                </h1>
              </div>
            </div>
            <button onClick={()=>navigate("/contact")} className="text-white bg-primary hover:bg-secondary rounded-lg text-lg px-5 py-2.5 inline-flex items-center gap-3 self-center lg:self-start mt-6">
              JOIN CLASS NOW
              <MdArrowForward />
            </button>
          </div>
          <div className="hidden lg:block">
            <img src="/images/2.png" alt="fighter" className="about-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
