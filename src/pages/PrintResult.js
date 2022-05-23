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
          <div className="justify-between">
            <div class=" mt-10 mb-12">
              <a class="inline-block mx-auto mb-6" href="#">
                <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
              </a>
              <h2 class="text-3xl md:text-2xl font-medium mb-2">Results</h2>
            </div>
          </div>

          <div className="lg:flex justify-between w-full border-2 rounded-md border-fountain py-8 px-26">
            {/* <!-- component --> */}
            <section class="my-auto  bg-white w-full">
              <div class="container my-auto px-4 mx-auto">
                <div class="max-w-lg space-y-8 hidden lg:block my-auto">
                  <p>
                    <span className="font-bold">Full Name</span> : Cristiano
                    Ronaldo
                  </p>
                  <p>
                    <span className="font-bold">Student ID</span> : 7777777MAN
                  </p>
                  <p>
                    <span className="font-bold">Class</span> : 7
                  </p>
                  <p>
                    <span className="font-bold">Class Letter</span> : C
                  </p>
                </div>
              </div>
            </section>

            <img
              style={{ height: "215px", width: "215px" }}
              className="max-w-lg mx-auto my-auto"
              src="./profile.jpg"
              alt="profile"
            />

            <div class="max-w-lg space-y-8 block lg:hidden my-4 mx-auto text-center">
              <p>
                <span className="font-bold">Full Name</span> : Cristiano Ronaldo
              </p>
              <p>
                <span className="font-bold">Student ID</span> : 7777777MAN
              </p>
              <p>
                <span className="font-bold">Class</span> : 7
              </p>
              <p>
                <span className="font-bold">Class Letter</span> : C
              </p>
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
