import { createBrowserRouter, Outlet } from "react-router-dom";
import NavLayout from "./NavLayout";
import { AuthProvider } from "./context/AuthContext";
import { lazy, Suspense } from "react";
import Loading from "./component/Loading";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const Home = lazy(() => {
  return import("./pages/home");
});
const SignUp = lazy(() => {
  return import("./pages/SignUp");
});
const SignIn = lazy(() => {
  return import("./pages/SignIn");
});
const ContactUs = lazy(() => {
  return import("./pages/ContactUs");
});
const Pricing = lazy(() => {
  return import("./pages/Pricing");
});
const Merch = lazy(() => {
  return import("./pages/Merch");
});
const Schedule = lazy(() => {
  return import("./pages/Schedule");
});
const ProductDetails = lazy(() => {
  return import("./component/Products/ProductDetails");
});
const TrainerDetail = lazy(() => {
  return import("./component/Trainers/TrainerDetail");
});

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
          { path: "pricing", element: <Pricing /> },
          { path: "schedule", element: <Schedule /> },
          { path: "merch", element: <Merch /> },
          { path: "merch/:id", element: <ProductDetails /> },
          { path: "trainers/:id", element: <TrainerDetail /> },
        ],
      },
    ],
  },
]);

function ContextWrapper() {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </ShoppingCartProvider>
    </AuthProvider>
  );
}
