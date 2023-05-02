import { MdArrowForward } from "react-icons/md";
import { SubHeader } from "../component/Header/SubHeader";
import { formatCurrency } from "../utilities/formatCurrency";
import { useNavigate } from "react-router-dom";

const PRICING_BOXES = [
  {
    level: "Free",
    price: 0,
    benefits: ["Educative material", "1 lesson", "Access to community forum"],
  },
  {
    level: "Pro",
    price: 18.99,
    benefits: [
      "Unlimited lessons",
      "Advanced techniques",
      "Exclusive training videos",
      "Access to live webinars",
      "Priority email support",
      "10% discount on merchandise",
    ],
  },
  {
    level: "Premium Pro",
    price: 24.99,
    benefits: [
      "All Pro benefits",
      "Personalized training plan",
      "1-on-1 coaching session per month",
      "Exclusive access to premium content",
      "Priority access to special events",
      "15% discount on merchandise",
    ],
  },
];

type PricingCardProsp = {
  level: string;
  price: number;
  benefits: string[];
};
const PricingCard = ({ level, price, benefits }: PricingCardProsp) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-3/4 flex-col gap-5 border-2 pb-8 drop-shadow-md">
      <img
        src="/images/bg-pricing.jpg"
        alt="Lifting dumbbell"
        className="transitation h-1/5 grayscale duration-500 hover:grayscale-0 hover:ease-in-out md:h-64"
      />
      <h1 className="text-2xl font-bold">{level}</h1>
      <div className="flex flex-grow flex-col gap-y-2">
        {benefits.map((benefit) => (
          <p key={benefit}>{benefit}</p>
        ))}
      </div>
      {price !== 0 ? (
        <h2 className="text-3xl font-bold">
          {formatCurrency(price, "USD")} p/m
        </h2>
      ) : (
        <h2 className="text-3xl font-bold">Free</h2>
      )}
      <button
        onClick={() => navigate("/contact")}
        className="mx-auto inline-flex items-center gap-3 self-start rounded-lg bg-secondary px-5 py-2.5 text-lg uppercase text-white hover:bg-secondary/80"
      >
        buy now
        <MdArrowForward />
      </button>
    </div>
  );
};

export const Pricing = () => {
  return (
    <main>
      <SubHeader title="Pricing" />
      <div className="my-32 flex justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold lg:text-5xl ">Exclusive Pricing</h1>
          <p className="mx-auto w-4/5 text-gray-700">
            Gymat an unknown printer took a galley of type and scrambled make a
            type specimen book.
          </p>
          <div className="mt-5 flex flex-col items-center  gap-4 md:flex-row md:items-stretch md:gap-8">
            {PRICING_BOXES.map((item) => (
              <PricingCard key={item.level} {...item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
