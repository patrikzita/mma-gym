import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAddCircleOutline, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "/images/Logo.svg";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const hamburgerMenu = () => {
    setHamburger(!hamburger);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const PATHS = [
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
    
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-12 text-white bg-black">
      <div className="flex items-center justify-between">
        <Link to="/" onClick={scrollToTop}>
          <img src={Logo} alt="MMA gym logo" className="w-16 h-auto" />
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
          <Link
            to="/signin"
            className="inline-block text-lg px-4 py-2 leading-none text-white hover:text-secondary  lg:mt-0"
            onClick={scrollToTop}
          >
            <FaUserAlt />
          </Link>

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
  );
};

export default Navbar;
