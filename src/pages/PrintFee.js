/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Layout from "../components/layout/LayoutUser";
import Side from "../components/layout/UserSide";

const Home = () => {
  return (
    <div className="px-4 lg:px-9">
      <Layout />
      <div className="flex">
        <Side />
        <div className="py-26 lg:pl-12 bg-white w-full">
          <div className=" lg:flex justify-between">
            <div class=" mt-10 mb-12">
              <a class="inline-block mx-auto mb-6" href="#">
                <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
              </a>
              <h2 class="text-3xl md:text-2xl font-medium mb-2">Receipts</h2>
              <p>Showing all receipts for 2022/2023 academic session Term 1</p>
            </div>

            <button
              type="button"
              className="px-12 py-3 font-semibold bg-fountain h-12 lg:my-auto text-white "
            >
              Select
            </button>
          </div>

          <div className="lg:flex justify-between w-full lg:space-x-5  ">
            {/* <!-- component --> */}
            <div className="max-w-lg lg:w-1/3 w-full  p-8 h-96 mt-5  border-fountain  text-center text-fountain border-2 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                  </div>
                  
                  <div className="max-w-lg lg:w-1/3 w-full  p-8 h-96 mt-5  border-fountain  text-center text-fountain border-2 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                  </div>

                  <div className="max-w-lg lg:w-1/3 w-full  p-8 h-96 mt-5  border-fountain  text-center text-fountain border-2 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                  </div>
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

export default Home;
