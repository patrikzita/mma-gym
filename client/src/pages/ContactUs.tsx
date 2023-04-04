import { SubHeader } from "../component/Header/SubHeader";
import IMG from "/images/bg-section.jpg";

const ContactUs = () => {
  return (
    <main className="mt-20">
      <SubHeader title="Contact Us" />
      <div className="flex flex-col gap-y-5 lg:gap-x-10 px-4 md:px-16 lg:px-32 mt-6 lg:flex-row">
        <div className="flex items-center flex-1">
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold">
              Get in Touch with the Best MMA Gym in Town
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium mt-5">
              Contact Our Expert Trainers Today
            </h2>
            <div className="flex flex-col gap-y-5 mt-5 ">
              <p>
                At our MMA gym, we pride ourselves on providing top-notch
                training from the best trainers in the business. Whether you're
                a seasoned fighter or a beginner just getting started, our team
                is here to help you achieve your fitness goals.
              </p>
              <p>
                If you have any questions about our services, or if you'd like
                to schedule a consultation with one of our expert trainers,
                please don't hesitate to get in touch. We're always happy to
                hear from new and potential clients, and we're ready to help you
                take your training to the next level.
              </p>
              <p>
                To get started, simply fill out the form below or give us a
                call. Our friendly staff will be happy to answer any questions
                you may have and help you get started on your journey to
                becoming the best fighter you can be.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 bg-gray-300 p-8 flex-1 h-fit">
          <form>
            <h1 className="text-2xl font-bold mb-5">Leave Us Your Info</h1>
            <div className="flex flex-col gap-y-5">
              <input
                type="text"
                className="block min-h-[auto] w-full rounded border-1 py-[0.32rem] px-3 leading-[2.15] focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                placeholder="Full Name *"
              />
              <input
                type="text"
                className="block min-h-[auto] w-full rounded border-1  py-[0.32rem] px-3 leading-[2.15] focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                placeholder="Email address *"
              />
              <select className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border-1 ">
                <option>Choose trainer</option>
                <option>David Dvořák</option>
                <option>Jon Jones</option>
                <option>Jiří Procházka</option>
              </select>
              <textarea
                placeholder="Comment"
                className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border-1 "
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-secondary py-[15px] px-[30px] font-bold uppercase mt-6"
            >
              send now
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
