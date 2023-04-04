import { SubHeader } from "../component/Header/SubHeader";


const PRICING_BOXES = [
    {
        level: "Free",
        price: "0.00",
        benefits: ["Educative material", "1 lesson", "Access to community forum"]

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
            "10% discount on merchandise"
        ]

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
            "15% discount on merchandise"
        ]
    },
]

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
        </div>
      </div>
    </main>
  );
};
