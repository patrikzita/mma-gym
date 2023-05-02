import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingBag, FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAddCircleOutline, MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useProductQuery } from "../../utilities/queries";
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
      className="flex w-full cursor-pointer items-center justify-between px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
      onClick={() => navigate(`/merch/${id}`)}
    >
      <div className="flex flex-1 justify-center">
        <img src={data.img} alt={data.name} width={50} />
      </div>
      <p className="flex flex-1 justify-center">{data.name}</p>
      <p className="flex flex-1 justify-center">
        {formatCurrency(data.price, "usd")}
      </p>
      <button
        className="rounded-full p-1 text-xs text-black hover:bg-white hover:text-secondary"
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
  const cartButtonRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      cartMenuRef.current &&
      !cartMenuRef.current.contains(event.target as Node) &&
      cartButtonRef.current &&
      !cartButtonRef.current.contains(event.target as Node)
    ) {
      setCartMenuOpen(false);
    }
  };

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black py-6 px-12 text-white">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={scrollToTop}>
            <img
              src={Logo}
              alt="MMA gym logo"
              className="h-auto w-12 md:w-16"
            />
          </Link>
          <div className="hidden lg:block">
            <div className="flex justify-center">
              {PATHS.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="mr-4 text-lg text-gray-300 hover:text-secondary"
                  onClick={scrollToTop}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <div
                ref={cartButtonRef}
                className="text-whitelg:mt-0 relative inline-block cursor-pointer px-4 py-2 text-lg leading-none hover:text-secondary"
                onClick={toggleCartMenu}
              >
                <FaShoppingBag />
                {cartItems.length !== 0 && (
                  <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {cartItems.length}
                  </span>
                )}
              </div>
              <Link
                to="/signin"
                className="inline-block px-4 py-2 text-lg leading-none text-white hover:text-secondary  lg:mt-0"
                onClick={scrollToTop}
              >
                <FaUserAlt />
              </Link>
            </div>
            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-secondary hover:text-secondary md:flex  lg:mt-0"
            >
              <MdAddCircleOutline className="text-3xl text-secondary hover:rotate-[360deg] hover:duration-1000 " />
              <h3>Join Class Now</h3>
            </Link>
            <button
              className="block text-2xl text-white hover:text-secondary lg:hidden"
              onClick={hamburgerMenu}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>

        <div
          className={`${
            hamburger ? "translate-x-0" : "-translate-x-full"
          } absolute top-0 left-0 z-50 h-screen w-full bg-white transition-all duration-300 ease-in-out`}
        >
          <div className="flex justify-end px-4 py-2">
            <button className="cursor-pointer" onClick={hamburgerMenu}>
              <MdClose className="text-3xl text-black hover:text-secondary" />
            </button>
          </div>
          <div className="flex h-screen flex-col items-center justify-center gap-2 md:justify-start">
            {PATHS.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="my-4 text-3xl font-bold text-black hover:text-secondary"
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
          className="fixed top-16 z-50 mt-4 h-1/2 w-full rounded-lg bg-white p-3 shadow-xl
          sm:top-16 sm:right-2 sm:h-auto sm:w-64
          md:top-16 md:right-64 md:w-64
          lg:right-36 lg:w-96
          "
          ref={cartMenuRef}
        >
          {cartItems.length === 0 ? (
            <div className="flex h-32 items-center justify-center ">
              <p className="text-center text-gray-500">Your Cart is empty...</p>
              <p className="text-xl">🙄</p>
            </div>
          ) : (
            <div className="flex h-full flex-col justify-between gap-3">
              <div className="flex justify-between border-b-2 pb-2 text-xl text-black">
                <p>Cart</p>
                <button
                  className=" hover:text-secondary"
                  onClick={toggleCartMenu}
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div className="flex h-full w-full flex-col justify-between gap-y-3">
                <div>
                  {cartItems.map((item) => (
                    <CartOrderItem key={item.id} id={item.id} />
                  ))}
                </div>
                <button className="flex w-full justify-center rounded-md bg-secondary py-3 font-bold text-white">
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
