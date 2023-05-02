import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

type ButtonProps = {
  label: string;
  url: string;
  inverse?: boolean;
};

const Button = ({ label, url, inverse = false }: ButtonProps) => {
  const navigate = useNavigate();

  const buttonClass = inverse
    ? "mt-6 inline-flex items-center gap-3 self-center rounded-lg bg-secondary px-5 py-2.5 text-lg uppercase text-white hover:bg-primary lg:self-start"
    : "mt-6 inline-flex items-center gap-3 self-center rounded-lg bg-primary px-5 py-2.5 text-lg uppercase text-white hover:bg-secondary lg:self-start";

  return (
    <button onClick={() => navigate(`/${url}`)} className={buttonClass}>
      {label}
      <MdArrowForward />
    </button>
  );
};

export default Button;
