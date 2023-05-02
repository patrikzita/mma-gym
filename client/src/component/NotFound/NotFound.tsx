import { useNavigate } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5">
      <h1 className="text-5xl font-bold">404: Page Not Found</h1>
      <p className="max-w-md text-center">
        Sorry, the page you are looking for doesn't exist or has an incorrect
        URL.
      </p>
      <button
        onClick={() => navigate("/")}
        className="inline-flex items-center gap-3 rounded-lg bg-secondary px-5 py-2.5 text-lg text-white hover:bg-secondary/80"
      >
        Return to Home
        <MdArrowForward />
      </button>
    </div>
  );
};

export default NotFound;
