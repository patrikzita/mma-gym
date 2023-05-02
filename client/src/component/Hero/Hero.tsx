import { ROUTES } from "../../utilities/routes";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <>
      <section className="hero-section flex justify-center md:justify-end">
        <div className="flex items-center justify-center md:h-screen md:justify-end md:pr-32">
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-5xl text-white">Transform yourself</h1>
            <p className="max-w-sm text-white">
              with our <span className="text-secondary">world-class</span> MMA
              training and become the ultimate fighter.
            </p>
            <div className="w-100">
              <Button label="join class now" url={ROUTES.CONTACT} inverse />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
