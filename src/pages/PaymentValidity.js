import React from "react";
import Layout from "../components/layout/LayoutUser";
import Side from "../components/layout/UserSide";

const PaymentValidity = () => {
  return (
    <div>
      {" "}
      <div className="px-4 lg:px-9 pb-8 lg:pb-0">
        <Layout />
        <div className="flex">
          <Side />
          <div className="py-26 lg:pl-12 bg-white w-full">
            <div className=" lg:flex justify-between">
              <div class=" mt-10 mb-12">
                <a class="inline-block mx-auto mb-6" href="#">
                  <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
                </a>
                <h2 class="text-3xl md:text-2xl font-medium mb-2">
                  Check Payment Validility
                </h2>
              </div>
            </div>

            <div className="lg:flex justify-between w-full">
              {/* <!-- component --> */}

              <div className="max-w-lg lg:w-1/3 w-full  h-48 mt-5  text-center dark:bg-gray-900 dark:text-gray-100">
                <select
                  className="lg:w-4/4 w-full px-5 mb-5 bg-white rounded-lg border-2 border-fountain outline-fountain"
                  name="membership"
                  id="membership"
                  style={{ height: "50px" }}
                >
                  <option value="free">Ola Ade</option>
                  <option value="bronze">Ade Ola</option>
                  <option value="silver" selected>
                    Olade Adeola
                  </option>
                </select>
                <button
                  type="button"
                  className="px-12 py-3 font-semibold bg-fountain h-12 lg:my-auto text-white "
                >
                  Check Validility
                </button>
              </div>

              <div className="max-w-lg lg:w-1/3 w-full pr-40  h-96  mt-5  border-fountain  text-center text-fountain border-2 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                <div className=" h-full    border-fountain   text-fountain border-r-2  dark:bg-gray-900 dark:text-gray-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentValidity;
