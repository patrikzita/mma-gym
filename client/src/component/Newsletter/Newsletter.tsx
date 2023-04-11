import { BsFillSendFill } from "react-icons/bs";

const Newsletter = () => {
  return (
    <section className="grid lg:grid-cols-3 lg:items-center gap-y-5 bg-orange-400 px-8 pt-4 text-center">
      <div>
        <h2 className="font-bold text-2xl md:text-3xl text-white">
          The latest from the world of healthy life
        </h2>
        <p className="text-white">
          Subscribe to the MMAGYM newsletter and get -10% on your first purchase
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex border-2 rounded-2xl w-full mx-2 md:w-3/5 mt-5">
          <input
            type="text"
            className="w-full border-0 rounded-l-2xl"
            placeholder="Enter your email..."
          />
          <button className="flex items-center justify-center px-4">
            <BsFillSendFill className="text-white" />
            <span className="relative flex h-2 w-2  -top-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-700 "></span>
            </span>
          </button>
        </div>
        <div className="flex gap-x-4 items-center">
          <input
            type="checkbox"
            className="bg-red-100 border-red-300 text-red-500 focus:ring-red-200"
          />
          <p>I agree to the processing of personal data</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src="/images/jiri_prochazka.png" alt="" className="w-40" />
        <div>
          <p className="text-2xl font-bold text-white">Jiří Procházka</p>
          <p className="text-xl text-white">Awaken the heart of the samurai</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
