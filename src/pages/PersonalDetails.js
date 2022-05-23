import React from "react";
import Layout from "../components/layout/LayoutUser";
import Side from "../components/layout/UserSide";
const PersonalDetails = () => {
  return (
    <div>
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
              <div className=" flex justify-center">
                <div className="lg:flex max-w-4xl lg:w-3/4 w-screen justify-between mt-10 lg:max-h-96 max-h-60 h-96   border-2 rounded-md border-fountain ">
                  {/* <!-- component --> */}
                  <section class="   w-full">
                    <div class="container  w-full  ">
                      <div class=" w-full  hidden lg:block ">
                        <h1 className="text-center font-bold py-6 text-2xl">
                          Teachers Information
                        </h1>
                        <div className="border-b-2 max-w-full  w-full border-fountain"></div>
                        <div className="py-10 px-10 flex flex-col justify-between h-60 ">
                          <p className="text-xl">
                            <span className="text-xl font-bold">Full Name</span>{" "}
                            : Kakashi Hatake WhiteFang
                          </p>
                          <p className="text-xl">
                            <span className="text-xl font-bold">E-Mail</span> :
                            kakshihatakesharingan@gmail.com
                          </p>
                          <p className="text-xl">
                            <span className="text-xl font-bold">
                              Mobile Number
                            </span>{" "}
                            : 09060297797
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* <img
                    style={{ height: "215px", width: "215px" }}
                    className="max-w-lg mx-auto my-auto"
                    src="./profile.jpg"
                    alt="profile"
                  /> */}

                  <div class="  block lg:hidden   w-full ">
                    <h1 className="text-center font-bold text-lg py-2">
                      Teachers Information
                    </h1>
                    <div className="border-b-4  max-w-full   w-full border-fountain"></div>
                    <div className=" px-4 py-4 flex flex-col h-40 justify-between">
                      <p className="text-lg">
                        <span className="font-bold">Full Name</span> : Kakashi
                        Hatake WhiteFang
                      </p>
                      <p className="text-lg">
                        <span className="font-bold">E-Mail</span> :
                        kakshihatakesharingan@gmail.com
                      </p>
                      <p className="text-lg">
                        <span className="font-bold">Mobile Number</span> :
                        09060297797
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
