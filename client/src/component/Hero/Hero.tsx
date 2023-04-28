import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero-section flex justify-center md:justify-end">
        <div className="flex items-center justify-center md:justify-end md:h-screen md:pr-12">
          <div className="flex flex-col text-center gap-3">
            <h1 className="text-white text-5xl">Transform yourself</h1>
            <p className="text-white max-w-sm">
              with our <span className="text-secondary">world-class</span> MMA
              training and become the ultimate fighter.
            </p>
            <button onClick={()=> navigate("/contact")} className="text-white mx-auto bg-secondary hover:bg-secondary/80 rounded-lg text-lg px-5 py-2.5 inline-flex items-center gap-3 self-start">
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
