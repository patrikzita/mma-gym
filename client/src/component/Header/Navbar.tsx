import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingBag, FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAddCircleOutline, MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useProductQuery } from "../../data/queries";
import { formatCurrency } from "../../utilities/formatCurrency";
import Logo from "/images/Logo.svg";

type CartItem = {
  id: number;
  name: string;
  img: string;
  price: number;
};
type Path = {
  title: string;
  path: string;
};

type CartOrderItemProps = {
  id: string;
};

const CartOrderItem = ({ id }: CartOrderItemProps) => {
  const { removeCartItem } = useShoppingCart();
  const navigate = useNavigate();
  const { data, status } = useProductQuery(id);
  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error" || !data) return <h1>Not connected to API</h1>;

  return (
    <div
      className="flex items-center w-full justify-between px-4 py-2 text-sm font-medium cursor-pointer text-gray-600 hover:bg-gray-100"
      onClick={() => navigate(`/merch/${id}`)}
    >
      <div className="flex justify-center flex-1">
        <img src={data.img} alt={data.name} width={50} />
      </div>
      <p className="flex justify-center flex-1">{data.name}</p>
      <p className="flex justify-center flex-1">
        {formatCurrency(data.price, "usd")}
      </p>
      <button
        className="p-1 text-black rounded-full hover:text-secondary hover:bg-white text-xs"
        onClick={(e) => {
          e.stopPropagation();
          removeCartItem(id);
        }}
      >
        <AiOutlineClose />
      </button>
    </div>
  );
};

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const [cartMenuOpen, setCartMenuOpen] = useState(false);
  const { cartItems } = useShoppingCart();

  const cartMenuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      cartMenuRef.current &&
      !cartMenuRef.current.contains(event.target as Node)
    ) {
      setCartMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleCartMenu = () => {
    setCartMenuOpen((current) => !current);
  };

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const PATHS: Path[] = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Merch",
      path: "/merch",
    },
    {
      title: "Schedule",
      path: "/schedule",
    },
    {
      title: "Pricing",
      path: "/pricing",
    },
  ];
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-12 text-white bg-black">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={scrollToTop}>
            <img
              src={Logo}
              alt="MMA gym logo"
              className="w-12 md:w-16 h-auto"
            />
          </Link>
          <div className="hidden lg:block">
            <div className="flex justify-center">
              {PATHS.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="text-lg text-gray-300 hover:text-secondary mr-4"
                  onClick={scrollToTop}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div>
              <div
                className="inline-block cursor-pointer text-lg px-4 py-2 leading-none text-whitelg:mt-0 relative hover:text-secondary"
                onClick={toggleCartMenu}
              >
                <FaShoppingBag />
                {cartItems.length !== 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </div>
              <Link
                to="/signin"
                className="inline-block text-lg px-4 py-2 leading-none text-white hover:text-secondary  lg:mt-0"
                onClick={scrollToTop}
              >
                <FaUserAlt />
              </Link>
            </div>
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-2 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:text-secondary hover:border-secondary  lg:mt-0"
            >
              <MdAddCircleOutline className="text-3xl text-secondary hover:rotate-[360deg] hover:duration-1000 " />
              <h3>Join Class Now</h3>
            </Link>
            <button
              className="block lg:hidden text-white text-2xl hover:text-secondary"
              onClick={hamburgerMenu}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>

        <div
          className={`${
            hamburger ? "translate-x-0" : "-translate-x-full"
          } transition-all duration-300 ease-in-out absolute top-0 left-0 w-full h-screen bg-white z-50`}
        >
          <div className="flex justify-end px-4 py-2">
            <button className="cursor-pointer" onClick={hamburgerMenu}>
              <MdClose className="text-black text-3xl hover:text-secondary" />
            </button>
          </div>
          <div className="flex flex-col h-screen items-center md:justify-start justify-center gap-2">
            {PATHS.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="text-3xl font-bold text-black my-4 hover:text-secondary"
                onClick={hamburgerMenu}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {cartMenuOpen && (
        <div
          className="fixed top-16 mt-4 w-full h-1/2 bg-white rounded-lg shadow-xl z-50 p-3
          sm:top-16 sm:right-2 sm:w-64 sm:h-auto
          md:top-16 md:right-64 md:w-64
          lg:right-36 lg:w-96
          "
          ref={cartMenuRef}
        >
          {cartItems.length === 0 ? (
            <div className="flex items-center justify-center h-32 ">
              <p className="text-center text-gray-500">Your Cart is empty...</p>
            </div>
          ) : (
            <div className="flex flex-col justify-between gap-3 h-full">
              <div className="flex justify-between text-black pb-2 border-b-2 text-xl">
                <p>Cart</p>
                <button
                  className=" hover:text-secondary"
                  onClick={toggleCartMenu}
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div className="flex flex-col justify-between w-full h-full gap-y-3">
                <div>
                {cartItems.map((item) => (
                  <CartOrderItem key={item.id} id={item.id} />
                ))}
                </div>
                <button className="flex w-full text-white font-bold justify-center bg-secondary py-3 rounded-md">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
