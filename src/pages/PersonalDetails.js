import React from "react";
import Layout from "../components/layout/Layout";
import Side from "../components/layout/Side";
const PersonalDetails = () => {
  return (
    <div>
      <div className="px-4 lg:px-9">
        <Layout />
        <div className="flex ">
          <Side />
          <></>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
