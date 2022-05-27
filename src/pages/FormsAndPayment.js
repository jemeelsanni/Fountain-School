import React from "react";
import Layout from "../components/layout/LayoutUser";
import Side from "../components/layout/UserSide";
const FormsAndPayment = () => {
  return (
    <div>
      {" "}
      <div className="px-4 lg:px-9">
        <Layout />
        <div className="flex">
          <Side />
          <div className="py-26 flex items-center justify-center lg:pl-12 bg-white mt-24 w-full">
            FORMS TO BE FILLED BY PARENTS AND DETAILS ABOUT OTHER PAYMENTS WOULD
            BE COMMUNICATED HERE
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsAndPayment;
