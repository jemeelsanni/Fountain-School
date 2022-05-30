/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Layout from "../components/layout/LayoutUser";
import Side from "../components/layout/UserSide";

const Home = () => {
  return (
    <div className="px-4 lg:px-9 pb-8">
      <Layout />
      <div className="flex">
        <Side />
        <div className="py-26 lg:pl-12 bg-white w-full">
          <div class=" my-12">
            <a class="inline-block mx-auto mb-6" href="#">
              <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
            </a>
            <h2 class="text-3xl md:text-2xl font-medium mb-2">
              School Fee Payment
            </h2>
          </div>

          <div className="lg:flex justify-between w-full border-2 rounded-md border-fountain py-4 px-8">
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
            </div>
          </div>

          <section className="lg:flex my-4 lg:mt-20 lg:space-x-5">
            <select
              className="lg:w-3/4 w-full px-5 mt-6 bg-white rounded-lg border-2 border-fountain outline-fountain"
              name="membership"
              id="membership"
              style={{ height: "50px" }}
            >
              <option value="free">Math</option>
              <option value="bronze">English</option>
              <option value="silver" selected>
                Computer
              </option>
              <option value="Gold">Gold</option>
            </select>

            <select
              style={{ height: "50px" }}
              className="lg:w-3/4 w-full bg-white py-3 rounded-lg mt-6 px-5 border-2 border-fountain outline-fountain"
              name="membership"
              id="membership"
            >
             <option value="free">Ola Ade</option>
                <option value="bronze">Ade Ola</option>
                <option value="silver" selected>
                   Olade Adeola
                </option>
            </select>

            <div class="mt-6 lg:mt-0 text-center">
              <label className="hidden lg:block font-bold">CA</label>
              <input
                class="inline-block rounded-lg w-full p-3 text-md font-medium placeholder-line bg-white focus:outline-fountain border-2 border-fountain outline-fountain rounded "
                type="text"
                placeholder="CA"
              />
            </div>
            <div class="mt-6 lg:mt-0 text-center">
              <label className="font-bold hidden lg:block">Exam</label>
              <input
                class="inline-block rounded-lg w-full p-3 text-md font-medium placeholder-line bg-white focus:outline-fountain border-2 border-fountain outline-fountain rounded "
                type="text"
                placeholder="Exam"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Home;
