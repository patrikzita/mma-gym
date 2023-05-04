import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Loading from "./pages/Loading";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import NavLayout from "./NavLayout";
import { ROUTES } from "./utilities/routes";

const lazyLoad = (component: string, path = "pages") => {
  console.log(`./${path}/${component}`);

  return lazy(() => import(`./${path}/${component}.tsx`));
};

const Home = lazyLoad("Home");
const SignUp = lazyLoad("SignUp");
const SignIn = lazyLoad("SignIn");
const ContactUs = lazyLoad("ContactUs");
const Pricing = lazyLoad("Pricing");
const Merch = lazyLoad("Merch");
const Schedule = lazyLoad("Schedule");
const ProductDetails = lazyLoad("ProductDetails", "component/Products");
const TrainerDetail = lazyLoad("TrainerDetail", "component/Trainers");
const NotFound = lazyLoad("NotFound", "component/NotFound");

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
