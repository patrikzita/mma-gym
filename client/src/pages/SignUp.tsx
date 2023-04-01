import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import IMG from "/images/signup-image.png";
import { Link } from "react-router-dom";

const Schema = z.object({
  email: z.string({ required_error: "Email is required." }),
  firstName: z.string({ required_error: "Email is required." }),
  secondName: z.string({ required_error: "Email is required." }),
  password: z.string({ required_error: "Email is required." }),
});

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: toFormikValidationSchema(Schema),
  });
  return (
    <main className="flex justify-center mt-32 mb-32 h-1000">
      <div className=" bg-gray-100 p-10 h-fit w-fit gap-16 flex gap-8 border-4">
        <img src={IMG} alt="" className="w-96" />
        <form>
          <div className="flex flex-row items-center justify-center lg:justify-start">
            <p className="mb-0 mr-4 text-lg font-medium">Sign up with</p>
            <div className="flex gap-x-4">
              <button type="button">
                <BsFacebook className="text-4xl text-blue-600" />
              </button>
              <button type="button">
                <BsTwitter className="text-4xl text-blue-600" />
              </button>
              <button type="button">
                <BsLinkedin className="text-4xl text-blue-600" />
              </button>
            </div>
          </div>

          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
              Or
            </p>
          </div>

          <div className="relative mb-6 border-2">
            <input
              type="text"
              className="block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
              placeholder="Email address"
            />
          </div>

          <div className="relative mb-6 border-2">
            <input
              type="password"
              className="block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
              placeholder="Password"
            />
          </div>
          <div className="relative mb-6 border-2">
            <input
              type="password"
              className="block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
              placeholder="Confirm password"
            />
          </div>

          <div className="text-center lg:text-left mt-6">
            <button
              type="button"
              className="inline-block rounded bg-blue-500 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            >
              Register
            </button>
          </div>
          <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
            Already have an account?{" "}
            <Link to="/signin" className="text-secondary font-bold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
