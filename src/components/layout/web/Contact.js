import React from "react";
import Footer from "./Footer";


const Contact = () => {
  return (
    <div className="px-20 pt-10">
    <section class="">
        <h2 class="text-3xl font-semibold text-center text-gray-800 text-fountain">
          CONTACT US
        </h2>
        <p class="mt-3 text-center text-gray-600 dark:text-gray-400">
          Contact us with any of the following means, or just send an email.
        </p>

        <div class="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
          <a
            href="#"
            class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
          >
            
            <svg
              class="w-5 h-5 fill-fountain"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill=""
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>

            <span class="mt-2"> 
            <p>info@schools.org</p>
            <p>principal@schools.org</p>
            <p>primaryinfo@schools.org</p>
            <p>headteacher@schools.org</p>
            <p>webmaster@schools.org</p>
            </span>
          </a>

          <a
            href="#"
            class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
          >
            <svg
              class="w-5 h-5 fill-fountain"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill=""
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>

            <span class="mt-2">
            CRECHE & NURSERY
            <br/>
            +234 8037054147
            <br/><br/>
            PRIMARY
            <br/>
            +234 8037054147
            </span>
          </a>

          <a
            href="#"
            class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
          >
            <svg
              class="w-5 h-5 fill-fountain"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill=""
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            
            <span class="mt-2">
            No 4B, Sabo Line Isale
              <br />
              Opposite Temitope Hospital
              <br />
              Amilegbe
              <br />
              Ilorin, Kwara State
              <br />
              Nigeria
            </span>
          </a>
        </div>

        <form
          class="mt-6 "
          target="_top"
          action="mailto:adetifaboluwatife@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div class="items-center ">
            <div class="w-full mx-2 my-3">
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Name:
              </label>

              <input
                required
                class="block w-full px-4 py-2 text-gray-700 bg-line "
                type="text"
              />
            </div>

            <div class="w-full mx-2 my-3">
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Email:
              </label>

              <input
                required
                class="block w-full px-4 py-2 text-gray-700 bg-line "
                type="email"
              />
            </div>
          </div>

          
            <div class="w-full mx-2 my-3">
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Phone:
              </label>

              <input
                required
                class="block w-full px-4 py-2 text-gray-700 bg-line "
                type="number"
              />
        

            
            
          </div>

          <div class="w-full mx-2">
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Message:
            </label>

            <textarea
              required
              class="block w-full h-40 px-4 py-2 text-gray-700 bg-line "
            ></textarea>
          </div>

          <div class="flex justify-center mt-6">
            <button class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Send Message
            </button>
          </div>
          <button
            type="submit"
            className=" text-white bg-button px-20 py-2 font-semibold  "
          >
            Send Message
          </button>
        </form>
      </section>
      <Footer/>
      
    </div>
  );
};

export default Contact;
