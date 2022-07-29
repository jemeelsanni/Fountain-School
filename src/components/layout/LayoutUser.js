/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoutHandler from "../LogoutHandler";
import LogOut from "../modal/LogOut";

// import { Container, Nav, NavDropdown } from "react-bootstrap";

const Navbar = () => {
  const [show, setshow] = useState(false);

  const [show0, setShow0] = useState(false);
  const [show1, setShow1] = useState(false);

  return (
    <div>
      <div className=" bg-white ">
        <nav className="   py-3 border-b-4 border-fountain  mt-5 ">
          {/* For large and Medium-sized Screen */}
          <div className="flex justify-between ">
            <div className="hidden lg:flex flex-row items-center space-x-6">
              <p className="text-fountain pt-12">School Portal</p>
            </div>
            <div className="space-x-3  items-center">
              <div className="flex justify-center">
                <img src="./logo.jpg" className="w-14 h-12" alt="Img" />
              </div>
              <h1 className="hidden lg:block font-bold text-xl leading-6 text-gray-800">
                FOUNTAIN | ACADEMY
              </h1>
            </div>
            <div className="hidden lg:flex flex-row space-x-4">
              <em>
                <p className="text-fountain font-medium pt-12">
                  School Portal...
                </p>
              </em>
            </div>
            {/* Burger Icon */}
            <div
              id="bgIcon"
              onClick={() => setshow(!show)}
              className={`focus:outline-none pt-4  focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center lg:hidden cursor-pointer`}
            >
              <svg
                className={`${show ? "hidden" : ""}`}
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className=" transform duration-150"
                  d="M4 6H20"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12H20"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className=" transform duration-150"
                  d="M4 18H20"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className={`${show ? "block" : "hidden"}`}
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* Mobile and small-screen devices (toggle Menu) */}
          <div
            id="MobileNavigation"
            className={`${show ? "block" : "hidden"} lg:hidden mt-4 mx-auto`}
          >
            <div className="flex flex-row items-center justify-center space-x-6"></div>

            <ul className="space-y-4 tracking-wide mt-8">
              <li>
                <a className="px-4 py-5 flex items-center border-b-2 space-x-4 text-line group">
                  <span className="group-hover:text-fountain"></span>
                </a>
              </li>

              <li>
                <a
                  onClick={() => setShow0(!show0)}
                  className="px-4 py-5 flex items-center cursor-pointer border-b-2 justify-between space-x-4 text-tgray border-line group"
                >
                  <span className="group-hover:text-fountain">
                    Personal setup
                  </span>
                  <img src="https://img.icons8.com/material/24/000000/sort-down--v1.png" />
                </a>
                <div
                  className={`${
                    show0 ? "block" : "hidden"
                  } border-fountain border-2 my-2`}
                >
                  <a
                    href="/mainmenu"
                    className="px-4 py-3 flex items-center border-b-2 justify-between space-x-4 text-tgray border-line group"
                  >
                    <span className="group-hover:text-fountain text-sm">
                      Main Menu
                    </span>
                  </a>
                  <a
                    href="/personal2"
                    className="px-4 py-3 flex items-center border-b-2 justify-between space-x-4 text-tgray border-line group"
                  >
                    <span className="group-hover:text-fountain text-sm">
                      Personal details
                    </span>
                  </a>
                  <a
                    href="/editdetails"
                    className="px-4 py-3 flex items-center border-b-2 justify-between space-x-4 text-tgray border-line group"
                  >
                    <span className="group-hover:text-fountain text-sm">
                      Password management
                    </span>
                  </a>
                  <a
                    href="#"
                    className="px-4 py-3 flex items-center  justify-between space-x-4 text-tgray border-line group"
                  >
                    <span className="group-hover:text-fountain text-sm">
                      <LogOut />
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
                    href="/receipt"
                    className="px-4 py-3 flex items-center border-b-2 justify-between space-x-4 text-tgray border-line group"
                  >
                    <span className="group-hover:text-fountain text-sm">
                      Print Payment Reciept
                    </span>
                  </a>
                  <a
                    href="/timetable"
                    className="px-4 py-3 flex items-center border-b-2 justify-between space-x-4 text-tgray border-line group"
                  >
                    <span className="group-hover:text-fountain text-sm">
                      Print Term Time table
                    </span>
                  </a>
                  <a
                    href="/result"
                    className="px-4 py-3 flex items-center border-b-2 justify-between space-x-4 text-tgray border-line group"
                  >
                    <span className="group-hover:text-fountain text-sm">
                      Print Results
                    </span>
                  </a>
                  <a
                    href="/letter"
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
                <Link
                  to="/calender"
                  className="px-4 py-5 flex items-center border-b-2 space-x-4 text-tgray border-line group"
                >
                  <span className="group-hover:text-fountain">Calender</span>
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="px-4 py-5 flex items-center border-b-2 space-x-4 text-tgray border-line group"
                >
                  <span className="group-hover:text-fountain">
                    <LogOut />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
