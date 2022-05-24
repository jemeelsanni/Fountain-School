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
              <div className="lg:flex hidden flex-col h-full justify-between w-2/5 border-2 rounded-md border-fountain py-8 px-8">
                <div className="w-full  flex justify-between ">
                  <img
                    style={{ height: "115px", width: "115px" }}
                    className="max-w-lg "
                    src="./profile.jpg"
                    alt="profile"
                  />
                  <div className=" item-center  justify-between w-3/5 border-2 rounded-md border-fountain ">
                    <h1 className="border-b-2 px-4 py-2 text-center border-fountain">
                      File Type Passport
                    </h1>
                    <div className="flex justify-between">
                      <input className="w-60" type="file" name="" id="" />
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
              <div className="lg:hidden bg-purple h-full justify-between w-full border-2 rounded-md border-fountain py-8 px-8">
                {/* <!-- component --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails2;
