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

const SignIn = () => {
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
    <main className="h-1000 mb-32 flex justify-center bg-gray-100 pt-32 lg:bg-white">
      <div className="flex h-fit w-fit flex-col gap-16 bg-gray-100 px-5 pb-10 md:flex-row md:p-5 lg:border-4 lg:p-10">
        <img src={IMG} alt="" className="w-96" />
        <form>
          <div className="flex flex-row items-center justify-center lg:justify-start">
            <p className="mb-0 mr-4 text-lg font-medium">Sign in with</p>
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
              className="block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
                type="checkbox"
              />
              <label className="inline-block pl-[0.15rem] hover:cursor-pointer">
                Remember me
              </label>
            </div>
          </div>
          <a href="#!" className="my-3 block ">
            Forgot password?
          </a>
          <div className="text-center lg:text-left">
            <button
              type="button"
              className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded bg-blue-500 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            >
              Login
            </button>
            <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
              Don't have an account?{" "}
              <Link to="/signup" className="font-bold text-secondary">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
