/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Layout from "../components/layout/LayoutUser";
import Side from "../components/layout/UserSide";

const Timetable = () => {
  return (
    <div className="px-4 lg:px-9">
      <Layout />
      <div className="flex">
        <Side />
        <div className="py-26 lg:pl-12 bg-white mt-24 w-full">

          
        <div className="lg:flex h-screen justify-between w-full border-2 rounded-md border-fountain py-8 px-8">
            {/* <!-- component --> */}
          
          </div>

          <section className="flex w-half my-4 mt:10 lg:mt-20 justify-center">

            <button
              type="button"
              class=" w-2/4 mt-5 lg:my-auto lg:mx-26 bg-fountain h-12 text-white font-medium text-sm leading-snug  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Proceed to payment
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
