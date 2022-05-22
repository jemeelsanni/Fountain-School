import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Side from "./Side";
// import { Container, Nav, NavDropdown } from "react-bootstrap";

const Navbar = () => {
  const navContents = [
    { name: "Home", href: "/", current: "true" },
    { name: "About", href: "#", current: "false" },
    { name: "Blog", href: "/blog", current: "false" },
    // {name:'Home', href:"/", current:"true"}
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [show, setshow] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const dispatch = useDispatch();
  const logoutHandler = () => {};
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
                <img src="./logo.jpg" className="w-14 h-12" />
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

            <ul className="space-y-4 tracking-wide mt-2">
              <li>
                <a
                  href="#"
                  className="px-4 py-5 flex items-center border-b-2 space-x-4 text-tgray border-line group"
                >
                  <span className="group-hover:text-tgray">Register</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="px-4 py-5 flex items-center border-b-2 space-x-4 text-tgray border-line group"
                >
                  <span className="group-hover:text-tgray">
                    FAQ/Helpdesk
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="px-4 py-5 flex items-center border-b-2 space-x-4 text-tgray border-line group"
                >
                  <span className="group-hover:text-tgray">About</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="px-4 py-5 flex items-center border-b-2 space-x-4 text-tgray border-line group"
                >
                  <span className="group-hover:text-tgray">
                    Teacher's Login
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="px-4 py-5 flex items-center border-b-2 space-x-4 text-tgray border-line group"
                >
                  <span className="group-hover:text-tgray">
                    Student's Login
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="px-4 py-5 flex items-center space-x-4 text-line group"
                >
                  <span className="group-hover:text-tgray">Home</span>
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
