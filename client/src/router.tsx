import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import NavLayout from "./NavLayout";
import Loading from "./pages/Loading";
import { ROUTES } from "./utilities/routes";
import Home from "./pages/Home";

const SignUp = lazy(() => import("./pages/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Merch = lazy(() => import("./pages/Merch"));
const Schedule = lazy(() => import("./pages/Schedule"));
const ProductDetails = lazy(
  () => import("./component/Products/ProductDetails")
);
const TrainerDetail = lazy(() => import("./component/Trainers/TrainerDetail"));
const NotFound = lazy(() => import("./component/NotFound/NotFound"));

export const router = createBrowserRouter([
  {
    element: <ContextWrapper />,
    children: [
      {
        path: ROUTES.HOME,
        element: <NavLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: ROUTES.SIGNUP, element: <SignUp /> },
          { path: ROUTES.SIGNIN, element: <SignIn /> },
          { path: ROUTES.CONTACT, element: <ContactUs /> },
          { path: ROUTES.PRICING, element: <Pricing /> },
          { path: ROUTES.SCHEDULE, element: <Schedule /> },
          { path: ROUTES.MERCH, element: <Merch /> },
          { path: `${ROUTES.MERCH}/:id`, element: <ProductDetails /> },
          { path: `${ROUTES.TRAINERS}/:id`, element: <TrainerDetail /> },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
  },
]);

function ContextWrapper() {
  return (
    <ShoppingCartProvider>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </ShoppingCartProvider>
  );
}
