/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Side from "../components/layout/Side";

const UserSignin = () => {
  const [showpass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const tempNavigation = () => {
    navigate("/personal");
  };
  return (
    <div>
      <div className="px-4 lg:px-9">
        <Layout />
        <div className="flex ">
          <Side />
          <>
            <section class="w-screen">
              <div class="px-6 h-full text-gray-800">
                <div class="flex xl:justify-between   mt-24 lg:justify-between justify-between  flex-wrap h-full g-6">
                  <div class="xl:ml-20 w-full xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                    <form class=" w-full ">
                      <div class="flex flex-row items-center  justify-center lg:justify-start">
                        <p class="font-bold text-2xl mb-0 mr-4">Portal Login</p>
                      </div>

                      {/* <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                        <p class="text-center font-semibold mx-4 mb-0">Or</p>
                      </div> */}

                      <div class="mb-14 mt-14">
                        <input
                          type="text"
                          class="form-control block focus:outline-none focus:border-fountain focus:ring-fountain w-full h-14 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:bg-white "
                          id="exampleFormControlInput2"
                          placeholder="Student's ID"
                        />
                      </div>

                      <div class=" relative mb-12 flex justify-center items-center">
                        <input
                          class="form-control block focus:outline-none focus:border-fountain focus:ring-fountain w-full h-14 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white "
                          id="exampleFormControlInput2"
                          type={showpass ? "text" : "password"}
                          placeholder="Password"
                        />
                        <div
                          onClick={() => setShowPass(!showpass)}
                          className="absolute right-0 mt-2 mr-3 cursor-pointer"
                        >
                          <div id="show">
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                fill="#71717A"
                              />
                            </svg>
                          </div>
                          <div id="hide" className="hidden">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-eye-off"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="#27272A"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <line x1={3} y1={3} x2={21} y2={21} />
                              <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                              <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div class="flex justify-between items-center mb-6">
                        <div class="form-group form-check">
                          <input
                            type="checkbox"
                            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            id="exampleCheck2"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800"
                            for="exampleCheck2"
                          >
                            Remember me
                          </label>
                        </div>
                        <a href="#!" class="text-fountain">
                          Forgot password?
                        </a>
                      </div>

                      <div class="text-center lg:text-left">
                        <button
                          onClick={tempNavigation}
                          type="button"
                          class="inline-block px-7 py-3 bg-fountain w-full text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Login
                        </button>
                        <p class="text-sm  text-center font-semibold mt-2 pt-1 mb-0">
                          Do you want to enroll your kid ? {""}
                          <a
                            href="#!"
                            class="text-fountain hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                          >
                            ENROLL
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                  <div className="max-w-lg lg:w-1/3 w-full h-1/3 p-8 mt-20 shadow-lg shadow-tgray  border-fountain drop-shadow-2xl text-center text-fountain border-2 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                    School News
                  </div>
                </div>
              </div>
            </section>
          </>
        </div>
      </div>
    </div>
  );
};

export default UserSignin;
