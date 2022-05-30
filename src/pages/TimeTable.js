import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/LayoutUser";
import Side from "../components/layout/UserSide";
const TimeTable = () => {
  const navigate = useNavigate();
  const viewReceipt = () => {
    navigate("/printtimetable");
  };
  return (
    <div>
      {" "}
      <div className="px-4 lg:px-9">
        <Layout />
        <div className="flex ">
          <Side />
          <>
            <div className="py-26 lg:pl-12 bg-white w-full">
              <div class=" my-12">
                {/* <a class="inline-block mx-auto mb-6" href="#"> */}
                <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
                {/* </a> */}
                <h2 class="text-3xl md:text-2xl font-medium mb-2">
                  Personal Details
                </h2>
              </div>

              <div className="lg:flex justify-between w-full border-2 rounded-md border-fountain py-8 px-8">
                {/* <!-- component --> */}
                <section class="my-auto  bg-white w-full">
                  <div class="container my-auto px-4 mx-auto">
                    <div class="max-w-lg space-y-8 hidden lg:block my-auto">
                      <p>
                        <span className="font-bold">Full Name</span> : Cristiano
                        Ronaldo
                      </p>
                      <p>
                        <span className="font-bold">Student ID</span> :
                        7777777MAN
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
              <div>
                <div className="   hidden  lg:flex   justify-center">
                  <div class="flex  w-5/12  mt-14  justify-center">
                    <div class="mb-3  w-full">
                      <select
                        class="form-select 
      block
      w-full
      px-3
      h-14
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border-2 border-solid border-fountain
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option selected>Select Term and Session</option>
                        <option cla value="1">
                          One
                        </option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div></div>
                <div className=" flex lg:hidden   justify-center">
                  <div class="flex  w-full  mt-14  justify-center">
                    <div class="mb-3  w-full">
                      <select
                        class="form-select 
      block
      w-full
      px-3
      h-14
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border-2 border-solid border-fountain
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option selected>Select Term and Session</option>
                        <option cla value="1">
                          One
                        </option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex  justify-center">
                  <button
                    onClick={viewReceipt}
                    class="bg-fountain mt-12 hover:bg-fountain w-5/12 h-14 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                  >
                    View Timetable
                  </button>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default TimeTable;
