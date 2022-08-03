/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Layout from "../components/layout/Layout";
import Side from "../components/layout/Side";

import { useNavigate } from "react-router-dom";

const TeacherSignin = () => {
  const navigate = useNavigate();
  const tempNavigation = () => {
    navigate("/personal");
  };

  return (
    <div className="px-4 lg:px-9">
      <Layout />
      <div className="flex ">
        <Side />
        <div className="lg:flex justify-between w-full">
          {/* <!-- component --> */}
          <section class="py-26 lg:pl-12 bg-white lg:w-2/4">
            <div class="container  px-4 mx-auto">
              <div class="max-w-lg  mx-auto">
                <div class=" my-12">
                  {/* <a class="inline-block mx-auto mb-6" href="#">
                    <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
                  </a> */}
                  <h2 class="text-3xl md:text-2xl font-medium mb-2">
                    Portal Login
                  </h2>
                </div>
                <form action="">
                  <div class="mb-10">
                    <input
                      class="inline-block w-full p-3 text-md font-medium placeholder-line bg-white focus:outline-fountain border-2 border-line rounded "
                      type="text"
                      placeholder="Teacher ID"
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      class="inline-block w-full p-3 text-md font-medium placeholder-line bg-white border-2 border-line rounded focus:outline-fountain"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div class="flex justify-between items-center mb-6">
                    <div class="form-group form-check">
                      <input
                        type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2"
                      />
                      <label
                        class="form-check-label inline-block text-gray-800"
                        for="exampleCheck2"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="#!" class="text-fountain">
                      Forgot password?
                    </a>
                  </div>
                  <button
                    onClick={tempNavigation}
                    class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-sm bg-fountain  border-3 shadow rounded transition duration-200"
                  >
                    Log in
                  </button>
                  <p class="text-center font-">
                    Don&rsquo;t have an account?{" "}
                    <a class="text-fountain hover:underline" href="#">
                      ENROLL
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </section>

          <div className="max-w-lg lg:w-1/3 h-1/3 p-8  mt-40 border-fountain drop-shadow-2xl text-center text-fountain border-2 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
            School News
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSignin;
