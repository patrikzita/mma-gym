import { SubHeader } from "../component/Header/SubHeader";

const PRICING_BOXES = [
  {
    level: "Free",
    price: "0.00",
    benefits: ["Educative material", "1 lesson", "Access to community forum"],
  },
  {
    level: "Pro",
    price: "18.99",
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
    price: "24.99",
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
  price: string;
  benefits: string[];
};
const PricingCard = ({ level, price, benefits }: PricingCardProsp) => {
  return (
    <div className="flex flex-col p-5 border-2">
      <h1 className="text-2xl font-bold">{level}</h1>
      <h2 className="text-3xl font-bold">${price}</h2>
      {benefits.map((benefit) => (
        <p>{benefit}</p>
      ))}
    </div>
  );
};

/* TODO: Dokončit tuto sekci */

export const Pricing = () => {
  return (
    <main>
      <SubHeader title="Pricing" />
      <div className="flex justify-center mt-12">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-bold">Exclusive Pricing</h1>
          <p className="text-gray-700">
            Gymat an unknown printer took a galley of type and scrambled make a
            type specimen book.
          </p>
          <div className="flex flex-col">
            {PRICING_BOXES.map((item) => (
              <PricingCard key={item.level} {...item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
