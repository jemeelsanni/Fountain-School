import React from "react";
import Layout from "../components/layout/LayoutUser";
import Side from "../components/layout/UserSide";

const AdmissionLetter = () => {
  return (
    <div>
      <div className="px-4 lg:px-9">
        <Layout />
        <div className="flex">
          <Side />
          {/* <div className="py-26 lg:pl-12  bg-white mt-24 w-full">
            <section className=" w-full h-screen  flex flex-col justify-center">
              <div className="flex h-full  justify-center">
                <div className="lg:flex h-3/5 justify-center w-2/5 border-2 rounded-md border-fountain py-8 px-8"></div>
              </div>
              <div className="flex bg-purple justify-center ">
                <button class="bg-fountain hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  Button
                </button>
              </div>
            </section>
          </div> */}
          <div className="py-26 lg:pl-12 h-screen bg-white mt-24 w-full">
            <div className=" w-full  h-1/2 flex justify-center ">
              <div className="lg:flex hidden h-full justify-between w-2/5 border-2 rounded-md border-fountain py-8 px-8">
                {/* <!-- component --> */}
              </div>
              <div className="lg:hidden bg-purple h-full justify-between w-full border-2 rounded-md border-fountain py-8 px-8">
                {/* <!-- component --> */}
              </div>
            </div>
            <section className="lg:flex hidden w-half my-4 mt:10 lg:mt-20 justify-center">
              <button
                type="button"
                class=" w-4/12 mt-5 lg:my-auto lg:mx-26 bg-fountain h-12 text-white font-medium text-sm leading-snug  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Print Letter
              </button>
            </section>
            <section className="flex lg:hidden my-4 mt:10 lg:mt-20 justify-center">
              <button
                type="button"
                class=" w-9/12 mt-5 lg:my-auto lg:mx-26 bg-fountain h-12 text-white font-medium text-sm leading-snug  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Print Letter
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionLetter;
