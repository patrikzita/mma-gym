import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
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
            <button
              onClick={() => navigate("/contact")}
              className="mx-auto inline-flex items-center gap-3 self-start rounded-lg bg-secondary px-5 py-2.5 text-lg text-white hover:bg-secondary/80"
            >
              JOIN CLASS NOW
              <MdArrowForward />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
