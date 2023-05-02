import { BsFillSendFill } from "react-icons/bs";

const Newsletter = () => {
  return (
    <section className="grid gap-y-5 bg-orange-400 px-8 pt-4 text-center lg:grid-cols-3 lg:items-center">
      <div>
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          The latest from the world of healthy life
        </h2>
        <p className="text-white">
          Subscribe to the MMAGYM newsletter and get -10% on your first purchase
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="mx-2 mt-5 flex w-full rounded-2xl border-2 md:w-3/5">
          <input
            type="text"
            className="w-full rounded-l-2xl border-0"
            placeholder="Enter your email..."
          />
          <button className="flex items-center justify-center px-4">
            <BsFillSendFill className="text-white" />
            <span className="relative -top-2 flex h-2  w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-700 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-700 "></span>
            </span>
          </button>
        </div>
        <div className="flex items-center gap-x-4">
          <input
            type="checkbox"
            className="border-red-300 bg-red-100 text-red-500 focus:ring-red-200"
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
