import { Outlet } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Header/Navbar";

function NavLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default NavLayout;
