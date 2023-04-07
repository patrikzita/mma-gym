import { MdArrowForward } from "react-icons/md";
import { SubHeader } from "../component/Header/SubHeader";
import { formatCurrency } from "../utilities/formatCurrency";
import { useNavigate } from "react-router-dom";

const PRICING_BOXES = [
  {
    level: "Free",
    price: 0.0,
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
    <div className="flex flex-col border-2 gap-5 pb-8 w-3/4 drop-shadow-md">
      <img
        src="/images/bg-pricing.jpg"
        alt="Lifting dumbbell"
        className="h-1/5 md:h-64 grayscale hover:grayscale-0 transitation duration-500 hover:ease-in-out"
      />
      <h1 className="text-2xl font-bold">{level}</h1>
      <div className="flex-grow flex flex-col gap-y-2">
        {benefits.map((benefit) => (
          <p key={benefit}>{benefit}</p>
        ))}
      </div>
      <h2 className="text-3xl font-bold">{formatCurrency(price, "USD")} p/m</h2>
      <button
        onClick={() => navigate("/contact")}
        className="text-white mx-auto bg-secondary hover:bg-secondary/80 rounded-lg text-lg px-5 py-2.5 inline-flex items-center gap-3 self-start uppercase"
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
      <div className="flex justify-center my-32">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-bold ">Exclusive Pricing</h1>
          <p className="text-gray-700 w-4/5 mx-auto">
            Gymat an unknown printer took a galley of type and scrambled make a
            type specimen book.
          </p>
          <div className="flex flex-col items-center md:items-stretch  md:flex-row gap-4 md:gap-8 mt-5">
            {PRICING_BOXES.map((item) => (
              <PricingCard key={item.level} {...item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
