import React from "react";
import Layout from "../components/layout/LayoutUser";
import Side from "../components/layout/UserSide";
const PersonalDetails2 = () => {
  return (
    <div>
      <div className="px-4 lg:px-9">
        <Layout />
        <div className="flex">
          <Side />

          <div className="py-26 lg:pl-12 h-screen bg-white mt-24 w-full">
            <div className=" w-full  h-full flex justify-center ">
              <div className="lg:flex hidden flex-col h-full justify-between w-10/12 border-2 rounded-md border-fountain py-8 px-8">
                <div className="w-full  flex justify-between ">
                  <img
                    style={{ height: "115px", width: "115px" }}
                    className="max-w-lg "
                    src="./profile.jpg"
                    alt="profile"
                  />
                  <div className=" item-center  justify-between w-3/5 border-2 rounded-md border-fountain ">
                    <h1 className="border-b-2 font-bold text-xl px-4 py-2 text-center border-fountain">
                      File Type: Passport
                    </h1>
                    <div className="flex justify-between">
                      <input
                        className="w-60 mx-4 my-2"
                        type="file"
                        name=""
                        id=""
                      />
                      <button
                        style={{ borderRadius: "30px" }}
                        className="bg-fountain text-white w-20 mt-2 mr-4 rounded full"
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:flex hidden h-5/6 justify-between w-full border-2 rounded-md border-fountain py-8 px-8">
                  {/* <!-- component --> */}
                </div>
              </div>
              <div className="lg:hidden  h-full justify-between w-full border-2 rounded-md border-fountain py-8 px-8">
                <div className="w-full  h-60  flex flex-col items-center  justify-between ">
                  <img
                    style={{ height: "80px", width: "80px" }}
                    className="max-w-lg "
                    src="./profile.jpg"
                    alt="profile"
                  />
                  <div className=" item-center h-32 justify-between w-11/12 border-2 rounded-md border-fountain ">
                    <h1 className="border-b-2 font-bold text-xl px-4 py-2 text-center border-fountain">
                      File Type: Passport
                    </h1>
                    <div className="flex justify-between">
                      <input
                        className="w-60 mx-4 my-2"
                        type="file"
                        name=""
                        id=""
                      />
                      <button
                        style={{ borderRadius: "30px" }}
                        className="bg-fountain font-bold text-sm text-white w-20 h-6 mt-6 mr-4 rounded full"
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:hidden mt-10  h-96 justify-between w-full border-2 rounded-md border-fountain py-8 px-8">
                  {/* <!-- component --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails2;
