/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Layout from "../components/layout/LayoutUser";
import Side from "../components/layout/UserSide";

const Home = () => {
  return (
    <div className="px-4 lg:px-9 h-max max-h-full">
      <Layout />
      <div className="flex h-full max-h-full">
        <Side />
        <div className="py-26 lg:pl-12 bg-white w-full">
          <div className=" justify-between w-3/4  mt-24 rounded-md border-fountain  mx-auto">
            {/* <!-- component --> */}
            <section class="my-auto  bg-white w-full">
              <div class="container  px-4 mx-auto">
                <div class="">
                  <div className="flex border-2 rounded-t-lg justify-start border-fountain">
                    <p className="font-bold hidden lg:block text-lg w-64 p-4">
                      Student Id
                    </p>
                    <input
                      className="lg:border-l-2 lg:placeholder-white border-fountain p-4 w-full focus:outline-none"
                      placeholder="Student Id"
                    />
                  </div>
                  <div className="flex border-l-2 border-r-2  border-fountain">
                    <p className="font-bold font-bold hidden lg:block ext-lg w-64 p-4">
                      Old Password
                    </p>
                    <input
                      className="lg:border-l-2 lg:placeholder-white border-fountain p-4 w-full focus:outline-none"
                      placeholder="Old Password"
                    />
                  </div>
                  <div className="flex border-2  border-fountain">
                    <p className="font-bold font-bold hidden lg:block text-lg w-64 p-4">
                      New Password
                    </p>
                    <input
                      className="lg:border-l-2 lg:placeholder-white border-fountain p-4 w-full focus:outline-none"
                      placeholder="New Password"
                    />
                  </div>
                  <div className="flex border-l-2 border-r-2 border-b-2 rounded-b-lg border-fountain">
                    <p className="font-bold text-lg font-bold lg:block hidden w-64 p-4">
                      Confirm Password
                    </p>
                    <input
                      className="lg:border-l-2 lg:placeholder-white border-fountain p-4 w-full focus:outline-none"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="flex w-half my-4 mt:10 lg:mt-20 justify-center">
            <button
              type="button"
              class=" w-2/4 mt-5 lg:my-auto lg:mx-26 bg-fountain h-12 text-white font-medium text-sm leading-snug  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Change Password
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
