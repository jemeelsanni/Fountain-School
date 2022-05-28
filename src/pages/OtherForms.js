/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Layout from "../components/layout/LayoutUser";
import Side from "../components/layout/UserSide";

const Home = () => {
  return (
    <div className="px-4 lg:px-9 pb-8 lg:pb-0">
      <Layout />
      <div className="flex">
        <Side />
        <div className="py-26 lg:pl-12 bg-white w-full">
          <div className=" lg:flex justify-between">
            <div class=" mt-10 mb-12">
              <a class="inline-block mx-auto mb-6" href="#">
                <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
              </a>
              <h2 class="text-3xl md:text-2xl font-medium mb-2">OTHER FORMS AND PAYMENTS</h2>
            </div>
          </div>

          <div>
          <div
              className="px-4 py-5 flex items-center cursor-pointer  space-x-4  border-line group"
            >
            <img src="https://img.icons8.com/material/24/000000/sort-right--v1.png" alt="+"/>
              <span className="">Pay Excursion Dues </span>
              
            </div>
            <div
              className="px-4 py-5 flex items-center cursor-pointer  space-x-4  border-line group"
            >
            <img src="https://img.icons8.com/material/24/000000/sort-right--v1.png" alt="+"/>
              <span className="">(google form links to fill a form)</span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
