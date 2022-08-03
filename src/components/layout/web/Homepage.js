import React from "react";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div>
      {/*!-- Landing page section starts--*/}
      <section className=" mx-8">
        <div className=" pl-9 py-4">
          <div className="flex justify-center">
            <img src="./logo.jpg" className=" w-96 h-72 pt-1  " />
          </div>
          <div className="flex justify-center">
            <h2 class="mb-2 text-4xl font-bold">FOUNTAIN ACADEMY</h2>
          </div>
          <div className="flex justify-center">
            <p class="mb-2 font-bold">where learning begins...</p>
          </div>
          <div className="flex justify-center">
            <button class=" rounded-full bg-enroll text-white px-4 py-1">
              ENROLL NOW
            </button>
          </div>
        </div>
      </section>
      {/*!-- Landing page section ends--*/}

      {/*!-- Welcome section starts--*/}
      <section className=" mx-8">
        <div className=" bg-welcome py-4">
          <div className=" pl-9">
            <div>
              <h2 className="text-2xl font-semibold">Welcome Address</h2>
              <p className=" w-96">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu dis
                quis at dui tincidunt risus nisi ligula consequat. Velit amet
                blandit amet est massa dui. Dictum dictumst tortor fusce risus
                diam. At diam posuere sit fringilla. Porttitor porttitor
                pellentesque maecenas amet, aliquet diam dolor. Aliquam blandit
                commodo ullamcorper sed est. Egestas lacinia purus nunc, gravida
                odio a nunc pellentesque senectus. Convallis mi aenean in morbi
                consectetur donec ac mattis. Laoreet vestibulum rhoncus
                adipiscing commodo viverra parturient sed amet.
              </p>
            </div>
            <button class=" rounded-full bg-button text-white px-4 py-1">
              READ MORE
            </button>
          </div>
        </div>
      </section>
      {/*!-- Welcome section ends--*/}

      {/*!-- Service section starts--*/}
      <section className="  container mx-8 mb-20">
        <div className="">
          <div>
            <h2 className=" text-3xl font-bold text-gray-800 dark:text-gray-100 my-8">
              OUR SERVICES
            </h2>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className=" container flex-1 overflow-hidden shadow-sm relative bg-creche h-80 ">
                <p className=" justify-center text-3xl font-bold text-white dark:text-gray-100">
                  CRECHE
                </p>
              </div>
              <div className="container flex-1 overflow-hidden shadow-sm relative bg-Nursery h-72">
                <p className=" text-3xl font-bold text-white dark:text-gray-100">
                  NURSERY
                </p>
              </div>
              <div className="container flex-1 overflow-hidden shadow-sm relative bg-Primary h-64">
                <p className=" text-3xl font-bold text-white dark:text-gray-100">
                  PRIMARY
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*!-- Service section ends--*/}

      {/*!-- Statement section starts--*/}
      <section className=" container mt-10 mx-8 bg-statements">
        <div className=" py-20">
          <div className=" ml-16 mt-11 space-x-8">
            <a
              className="text-2xl font-bold text-gray-800 dark:text-gray-100 "
              href=""
            >
              OUR VISION
            </a>
            <a
              className="text-2xl font-bold text-gray-800 dark:text-gray-100 "
              href=""
            >
              OUR MISSION
            </a>
            <a
              className="text-2xl font-bold text-gray-800 dark:text-gray-100 "
              href=""
            >
              CORE VALUES
            </a>
          </div>
          <div className=" mt-10">
            <div class="  flex justify-evenly">
              <div class="flex items-center justify-center lg:justify-start">
                <div class="max-w-lg">
                  <img
                    class="object-cover object-center w-full h-64 rounded-md shadow"
                    src="./books.jpg"
                    className=" w-96 h-72 pt-1"
                    alt=""
                  />
                </div>
              </div>
              <div class=" mt-9 ml-8 lg:w-1/2">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  VISION
                </h2>
                <p class="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultrices duis nisl elementum aliquet lectus massa, mauris
                  scelerisque. Quis lacinia proin nec adipiscing donec. Velit
                  massa tristique sed leo enim eu pharetra turpis. Odio turpis
                  pretium ipsum dis ut curabitur ornare non sit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*!-- Statement section ends--*/}

      {/*!-- Leaders section starts--*/}
      <section className="  container mx-8 my-8">
        <h2 className=" text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10">
          SCHOOL LEADERS
        </h2>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className=" container flex-1 overflow-hidden shadow-sm relative bg-white">
            <img
              class="object-cover object-center w-full h-64 rounded-md "
              src="./headmaster.jpg"
              className=" w-96 h-72 pt-1"
              alt=""
            />
            <h2 class="mb-1 text-xl font-bold">Sandra Bullocks</h2>
            <p className=" font-medium">Headmaster</p>
          </div>

          <div className="container flex-1 overflow-hidden shadow-sm relative bg-white">
            <img
              class="object-cover object-center w-full h-64 rounded-md "
              src="./secretary.jpg"
              className=" w-96 h-72 pt-1"
              alt=""
            />
            <h2 class="mb-1 text-xl font-bold">Nancy Bullocks</h2>
            <p className=" font-medium">Secretary</p>
          </div>

          <div className="container flex-1 overflow-hidden shadow-sm relative bg-white">
            <img
              class="object-cover object-center w-full h-64 rounded-md "
              src="./headteacher.jpg"
              className=" w-96 h-72 pt-1"
              alt=""
            />
            <h2 class="mb-1 text-xl font-bold">Paul Rosetti</h2>
            <p className=" font-medium">Headteacher</p>
          </div>
        </div>
      </section>
      {/*!-- Leaders section ends--*/}

      {/*!-- Testimonials section starts--*/}
      <section className="my-8 mx-8 bg-testimonies">
        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
          <h1 className="text-4xl font-semibold leading-none text-center">
            Parent Testimonies
          </h1>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
          <div className="flex flex-col items-center mx-12 lg:mx-0">
            <div className="relative text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute top-0 left-0 w-8 h-8 dark:text-coolGray-700"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              <p className="px-6 py-1 text-lg italic">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute bottom-0 right-0 w-8 h-8 dark:text-coolGray-700"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
            <p>Mr. Rotimi Shefiu</p>
          </div>
          <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
            <div className="relative text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="absolute top-0 left-0 w-8 h-8 dark:text-coolGray-700"
              >
                <path
                  fill="currentColor"
                  d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                ></path>
              </svg>
              <p className="px-6 py-1 text-lg italic">
                Accusantium illum cupiditate harum asperiores iusto quos quasi
                quis quae! Fugit doloribus, voluptatum quidem magnam velit
                excepturi nobis, reprehenderit ducimus incidunt quisquam quae
                veritatis, quos iure harum.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="absolute bottom-0 right-0 w-8 h-8 dark:text-coolGray-700"
              >
                <path
                  fill="currentColor"
                  d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                ></path>
              </svg>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
            <p>Engr. Bolu Adetifa</p>
          </div>
        </div>
      </section>
      {/*!-- Testimonials section ends--*/}

      <Footer />
    </div>
  );
};
export default Homepage;
