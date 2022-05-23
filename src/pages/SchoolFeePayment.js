import React from "react";
import Layout from "../components/layout/LayoutUser";
import Side from "../components/layout/UserSide";

const Home = () => {
  return (
    <div className="px-4 lg:px-9">
      <Layout />
      <div className="flex ">
        <Side />
      </div>
    </div>
  );
};

export default Home;
