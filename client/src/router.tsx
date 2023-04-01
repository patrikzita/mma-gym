import { createBrowserRouter, Outlet } from "react-router-dom";
import NavLayout from "./NavLayout";
import { AuthProvider } from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import Home from "./pages/home";
import SignIn from "./pages/SignIn";
import ContactUs from "./pages/ContactUs";

export const router = createBrowserRouter([
  {
    element: <ContextWrapper />,
    children: [
      {
        path: "/",
        element: <NavLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "signup", element: <SignUp /> },
          { path: "signin", element: <SignIn /> },
          { path: "contact", element: <ContactUs /> },
        ],
      },
    ],
  },
]);

function ContextWrapper() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
