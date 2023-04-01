import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Trainer1 from "/images/david_dvorak.png";
import Trainer2 from "/images/jon_jones.png";
import Trainer3 from "/images/jiri_prochazka.png";

const trainers = [
  { name: "David Dvořák", focus: "Wrestling trainer", img: Trainer1 },
  { name: "Jon Jones", focus: "Box trainer", img: Trainer2 },
  { name: "Jiří Procházka", focus: "Mental coach", img: Trainer3 },
];

const Fighters = () => {
  return (
    <section className="trainers-section text-center h-3/6 text-white pt-12 pb-24 md:px-12 lg:px-2">
      <h1 className="text-3xl md:text-6xl font-black mt-6">Our trainers</h1>
      <p className="text-white text-xl mt-8">
        The former champions help you to succeed in any discipline.
      </p>
      <div className="flex flex-col items-center gap-y-32 mt-16 md:flex-row md:justify-center md:gap-x-12">
        {trainers.map((trainer) => (
          <div
            key={trainer.name}
            className="box-desc relative cursor-pointer w-fit h-fit"
          >
            <img
              src={trainer.img}
              alt={trainer.name}
              style={{ width: "20rem" }}
              className="relative z-10 bottom-10 grayscale hover:grayscale-0 transitation duration-500 hover:ease-in-out"
            />
            <img
              src="/images/trainer-bg.png"
              alt="Background of fighter"
              className="absolute top-[3rem]"
            />
            <div className="text-primary bg-white w-full text-center shadow-xl absolute z-20 pt-2 pb-5 bottom-[0]">
              <h3 className="text-xl font-bold">{trainer.name}</h3>
              <p className="text-base font-medium">{trainer.focus}</p>
              <div className="flex gap-4 text-[#646464] w-full justify-center mt-3 text-xl">
                <FaFacebook className="hover:text-secondary" />
                <FaInstagram className="hover:text-secondary" />
                <FaTwitter className="hover:text-secondary" />
                <MdEmail className="hover:text-secondary" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fighters;
