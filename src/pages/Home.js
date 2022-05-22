import React from "react";
import Layout from "../componets/Layout";
import Side from "../componets/Side";

const Home = () => {
  return (
    <div className='px-4 lg:px-9'>
      <Layout />
      <div className="flex ">
        <Side />
      </div>
    </div>
  );
};

export default Home;
