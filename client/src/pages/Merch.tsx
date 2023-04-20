import { MdShoppingCart } from "react-icons/md";
import { SubHeader } from "../component/Header/SubHeader";
import { formatCurrency } from "../utilities/formatCurrency";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

type ProductType = {
  id: string;
  name: string;
  img: string;
  imgBig: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
};

export const PRODUCTS = [
  {
    id: "gloves001",
    name: "Boxing Gloves",
    img: "images/products/small/boxing_gloves.png",
    imgBig: "images/products/boxing_gloves.png",
    price: 39.99,
    quantity: 10,
    category: "boxing",
    description:
      "Our high-quality boxing gloves are perfect for training and sparring. Made from durable materials with cushioned padding, they offer maximum protection and support for your hands and wrists.",
  },
  {
    id: "shinguards001",
    name: "Shin Guards",
    img: "images/products/small/shin_guards.png",
    imgBig: "images/products/shin_guards.png",
    price: 29.99,
    quantity: 5,
    category: "MMA",
    description:
      "Protect your shins during training and sparring with our lightweight and durable shin guards. Featuring a comfortable fit and adjustable straps, they provide superior protection without limiting your mobility.",
  },
  {
    id: "mouthguard001",
    name: "Mouthguard",
    img: "images/products/small/mouthguard.png",
    imgBig: "images/products/mouthguard.png",
    price: 9.99,
    quantity: 20,
    category: "boxing",
    description:
      "Keep your teeth and jaw safe during training and sparring with our custom-fit mouthguard. Made from high-quality materials, it provides maximum protection and comfort.",
  },
  {
    id: "headgear001",
    name: "Boxing Headgear",
    img: "images/products/small/boxing_headgear.png",
    imgBig: "images/products/boxing_headgear.png",
    price: 49.99,
    quantity: 2,
    category: "boxing",
    description:
      "Protect your head and face during sparring and training with our premium-quality boxing headgear. Made from durable materials with cushioned padding, it offers superior protection and comfort.",
  },
  {
    id: "focusmitts001",
    name: "Focus Mitts",
    img: "images/products/small/focus_mitts.png",
    imgBig: "images/products/focus_mitts.png",
    price: 29.99,
    quantity: 8,
    category: "boxing",
    description:
      "Improve your speed, accuracy, and precision with our lightweight and durable focus mitts. Designed for use by trainers and coaches, they provide a comfortable fit and help you hone your skills.",
  },
  {
    id: "punchingbag001",
    name: "Punching Bag",
    img: "images/products/small/punching_bag.png",
    imgBig: "images/products/punching_bag.png",
    price: 149.99,
    quantity: 1,
    category: "boxing",
    description:
      "Train like a pro with our heavy-duty punching bag. Made from durable materials and designed to withstand the toughest workouts, it's perfect for boxers and martial artists of all levels.",
  },
  {
    id: "skippingrope001",
    name: "Skipping Rope",
    img: "images/products/small/skipping_rope.png",
    imgBig: "images/products/skipping_rope.png",
    price: 14.99,
    quantity: 15,
    category: "fitness",
    description:
      "Get your heart rate up and improve your coordination with our lightweight and durable skipping rope. Featuring comfortable handles and an adjustable length, it's perfect for workouts at home or on the go.",
  },
  {
    id: "weightedvest001",
    name: "Weighted Vest",
    img: "images/products/small/weighted_vest.png",
    imgBig: "images/products/weighted_vest.png",
    price: 69.99,
    quantity: 3,
    category: "fitness",
    description:
      "Take your workouts to the next level with our adjustable weighted vest. Featuring removable weights and a comfortable fit, it's perfect for adding resistance to your cardio and strength training exercises.",
  },
  {
    id: "resistancebands001",
    name: "Resistance Bands",
    img: "images/products/small/resistance_bands.png",
    imgBig: "images/products/resistance_bands.png",
    price: 19.99,
    quantity: 10,
    category: "fitness",
    description:
      "Build strength and flexibility with our set of resistance bands. Featuring different levels of resistance and comfortable handles, they're perfect for toning your muscles and rehabilitating injuries.",
  },
  {
    id: "grapplingdummy001",
    name: "Grappling Dummy",
    img: "images/products/small/grappling_dummy.png",
    imgBig: "images/products/grappling_dummy.png",
    price: 199.99,
    quantity: 1,
    category: "MMA",
    description:
      "Practice your grappling and ground-and-pound techniques with our high-quality grappling dummy. Made from durable materials with realistic features, it's perfect for solo training sessions or drilling with a partner.",
  },
];

type ProductCardProps = {
  id: string;
  name: string;
  img: string;
  price: number;
};

const ProductCard = ({ id, name, img, price }: ProductCardProps) => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col w-fit p-5 items-center gap-y-8 mx-auto hover:border-2">
      <img
        src={img}
        alt=""
        className="w-max-64 cursor-pointer"
        onClick={() => {
          scrollToTop();
          navigate(`/merch/${id}`);
        }}
      />
      <h1
        className="text-md text-blue-400 font-medium cursor-pointer hover:text-blue-300"
        onClick={() => {
          scrollToTop();
          navigate(`/merch/${id}`);
        }}
      >
        {name}
      </h1>
      <div className="flex flex-col text-center gap-y-2">
        <h2 className="text-xl text-red-500 font-medium">
          {formatCurrency(price, "USD")}
        </h2>
        <button className="flex items-center border-2 border-gray-100 gap-x-2 px-2 py-1 hover:drop-shadow-sm">
          <MdShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export const Merch = () => {
  const [query, setQuery] = useState("");

  const search = (data: ProductType[]) => {
    return data.filter((item) => item.name.toLowerCase().includes(query));
  };

  return (
    <main>
      <SubHeader title="Merch" />
      <div className="container flex justify-center mx-auto">
        <div className="flex border-2 rounded-2xl w-full mx-2 md:w-3/5 mt-5">
          <div className="flex items-center justify-center px-4 border-r ">
            <AiOutlineSearch />
          </div>
          <input
            type="text"
            className=" w-full border-0 rounded-r-2xl outline-0"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 my-32 just">
        {search(PRODUCTS).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
          />
        ))}
      </div>
    </main>
  );
};
