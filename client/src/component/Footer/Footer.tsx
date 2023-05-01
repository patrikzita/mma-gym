import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "/images/Logo.svg";

const Footer = () => {
  return (
    <footer className="border-t border-gray-400">
      <div className="flex flex-col gap-y-8 p-5 lg:flex-row lg:gap-5d m-10">
        <div className="flex flex-col items-center gap-y-2 lg:flex-1">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="MMA gym" className="w-32" />
            <h1 className="text-2xl font-black">MMA GYM</h1>
          </div>
          <p className="text-center max-w-md">
            Are you ready to transform your life and embark on a journey of
            self-discovery, discipline, and ultimate fitness? Look no further!
          </p>

          <div className="flex gap-4 text-[#646464] w-full justify-center mt-3 text-xl ">
            <FaFacebook className="cursor-pointer hover:text-secondary" />
            <FaInstagram className="cursor-pointer hover:text-secondary" />
            <FaTwitter className="cursor-pointer hover:text-secondary" />
          </div>
          <p className="text-center">
            Privacy Policy | © {new Date().getFullYear()} MMA GYM |{" "}
            <a href="https://www.radiustheme.com/">
              {" "}
              Inspiration by RadiusTheme
            </a>{" "}
          </p>
        </div>
        <div className="text-center lg:flex-1">
          <h1 className="text-3xl text-center mb-2">Working Hours</h1>
          <h2 className="text-xl font-bold">Monday - Friday:</h2>
          <p>7:00am - 21:00pm</p>
          <h2 className="text-xl font-bold">Saturday</h2>
          <p>7:00am - 19:00pm</p>
          <h2 className="text-xl font-bold">Sunday</h2>
          <p>7:00am - 12:00pm</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
