/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  return (
    <aside className="ml-[-100%] hidden lg:block pl-1 top-0 pb-3 px-6 w-1/4 flex flex-col justify-between border-r-2 border-fountain  bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] ">
      <div>
        <ul className="space-y-4 tracking-wide mt-8">
          <li>
            <a className="px-4 py-5 flex items-center border-b-2 space-x-4 text-line group">
              <span className="group-hover:text-fountain"></span>
            </a>
          </li>

          <li>
            <a
              onClick={() => setShow(!show)}
              className="px-4 py-5 flex items-center cursor-pointer border-b-2 justify-between space-x-4 text-tgray border-line group"
            >
              <span className="group-hover:text-fountain">Personal setup</span>
              <img src="https://img.icons8.com/material/24/000000/sort-down--v1.png" />
            </a>
            <div
              className={`${
                show ? "block" : "hidden"
              } border-fountain border-2 my-2`}
            >
              <a
                href="#"
                className="px-2 py-3 flex items-center border-b-2 justify-between space-x-4 text-tgray border-line group"
              >
                <span className="group-hover:text-fountain text-sm">
                  Main Menu
                </span>
              </a>
              <a
                href="#"
                className="px-2 py-3 flex items-center border-b-2 justify-between space-x-4 text-tgray border-line group"
              >
                <span className="group-hover:text-fountain text-sm">
                  Personal details
                </span>
              </a>
              <a
                href="#"
                className="px-2 py-3 flex items-center border-b-2 justify-between space-x-4 text-tgray border-line group"
              >
                <span className="group-hover:text-fountain text-sm">
                  Password management
                </span>
              </a>
              <a
                href="#"
                className="px-2 py-3 flex items-center  justify-between space-x-4 text-tgray border-line group"
              >
                <span className="group-hover:text-fountain text-sm">
                  Logout
                </span>
              </a>
            </div>
          </li>

          <li>
            <a
              onClick={() => setShow1(!show1)}
              className="px-4 py-5 flex items-center cursor-pointer justify-between border-b-2 space-x-4 text-tgray border-line group"
            >
              <span className="group-hover:text-fountain">Main Menu</span>
              <img src="https://img.icons8.com/material/24/000000/sort-down--v1.png" />
            </a>
            <div
              className={`${
                show1 ? "block" : "hidden"
              } border-fountain border-2 my-2`}
            >
              <a
                href="/feepayment"
                className="px-4 py-3 flex items-center border-b-2 justify-between space-x-4 text-tgray border-line group"
              >
                <span className="group-hover:text-fountain text-sm">
                  School fee Payment
                </span>
              </a>
              <a
                href="/printfee"
                className="px-4 py-3 flex items-center border-b-2 justify-between space-x-4 text-tgray border-line group"
              >
                <span className="group-hover:text-fountain text-sm">
                  Print Payment Reciept
                </span>
              </a>
              <a
                href="#"
                className="px-4 py-3 flex items-center border-b-2 justify-between space-x-4 text-tgray border-line group"
              >
                <span className="group-hover:text-fountain text-sm">
                  Print Term Time table
                </span>
              </a>
              <a
                href="#"
                className="px-4 py-3 flex items-center border-b-2 justify-between space-x-4 text-tgray border-line group"
              >
                <span className="group-hover:text-fountain text-sm">
                  Print Results
                </span>
              </a>
              <a
                href="#"
                className="px-4 py-3 flex items-center  justify-between space-x-4 text-tgray border-line group"
              >
                <span className="group-hover:text-fountain text-sm">
                  Print Admission Letter
                </span>
              </a>
            </div>
          </li>

          <li>
            <a
              href="#"
              className="px-4 py-5 flex items-center border-b-2 space-x-4 text-tgray border-line group"
            >
              <span className="group-hover:text-fountain">
                Forms and Payment
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="px-4 py-5 flex items-center border-b-2 space-x-4 text-tgray border-line group"
            >
              <span className="group-hover:text-fountain">Calender</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="px-4 py-5 flex items-center border-b-2 space-x-4 text-tgray border-line group"
            >
              <span className="group-hover:text-fountain">Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Dashboard;
