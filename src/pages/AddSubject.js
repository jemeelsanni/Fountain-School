/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Layout from "../components/layout/LayoutUser";
import Side from "../components/layout/UserSide";

const Home = () => {
  return (
    <div className="px-4 lg:px-9">
      <Layout />
      <div className="flex">
        <Side />
        <div className="py-26 lg:pl-12 bg-white w-full">
          <div class=" my-12">
            <a class="inline-block mx-auto mb-6" href="#">
              <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
            </a>
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
                    <span className="font-bold">Student ID</span> : 7777777MAN
                  </p>
                  <p>
                    <span className="font-bold">Class</span> : 7
                  </p>
                  <p>
                    <span className="font-bold">Class Letter</span> : C
                  </p>
                  <p>
                    <span className="font-bold">Email</span> : Cr7@gmail.com
                  </p>
              <p>
                <span className="font-bold">Phone</span> : 080
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
                <span className="font-bold">Full Name</span> : Cristiano Ronaldo
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
              <p>
                <span className="font-bold">Email</span> : Cr7@gmail.com
              </p>
              <p>
                <span className="font-bold">Phone</span> : 080
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
