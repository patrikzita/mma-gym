import { GiBookCover, GiWeightLiftingUp } from "react-icons/gi";
import { MdArrowForward, MdSportsGymnastics } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AboutCard from "./AboutCard";
import { cardList } from "./aboutListData";
import Button from "../UI/Button";
import { ROUTES } from "../../utilities/routes";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="about-section relative py-5">
      <div className="top-0 flex w-full flex-col justify-center gap-1 px-5 lg:absolute lg:-top-40 lg:flex-row lg:gap-10">
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
        <div className="mt-5 flex justify-between px-0 md:px-5 lg:mt-[10.5rem]">
          <div className="flex w-full flex-col gap-4 px-10 text-center lg:w-5/12 lg:text-left">
            <div>
              <h2 className="text-xl font-bold text-secondary">
                Start your journey
              </h2>
              <h1 className="text-3xl font-bold md:text-5xl">
                Discover the Ultimate MMA Experience at our Gym
              </h1>
            </div>
            <p className="text-xl font-medium">
              Are you ready to transform your life and embark on a journey of
              self-discovery, discipline, and ultimate fitness? Look no further!
            </p>
            <div className="flex w-full flex-col justify-start gap-3 text-center text-secondary md:flex-row">
              <div className="px-0 md:px-5">
                <MdSportsGymnastics className="mx-auto text-6xl lg:text-7xl" />
                <h1 className="text-xl font-medium text-primary">
                  The best boxers
                </h1>
              </div>
              <div className="border-slate-300 md:border-r-2 md:border-l-2">
                <GiWeightLiftingUp className="mx-auto text-6xl lg:text-7xl" />
                <h1 className="text-xl font-medium text-primary">
                  The modern equipment
                </h1>
              </div>
              <div>
                <GiBookCover className="mx-auto text-6xl lg:text-7xl" />
                <h1 className="text-base font-medium text-primary md:text-xl">
                  Education included
                </h1>
              </div>
            </div>
            <Button label="Join class now" url={ROUTES.CONTACT} />
          </div>
          <div className="hidden lg:block">
            <img src="/images/2.png" alt="MMA figter" className="about-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
