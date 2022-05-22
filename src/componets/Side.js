/* eslint-disable react/no-unknown-property */
import React from 'react'
import Layout from './Layout'

const Dashboard = () => {
  return (
<aside className="ml-[-100%] hidden lg:block pl-9 top-0 pb-3 px-6 w-1/4 flex flex-col justify-between h-screen border-r-2 border-fountain  bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
    <div>
       

    {/* <label className="block text-lg my-3 text-gray-600 :text-gray-200">
                  Bank
                </label>
                <select
                  required
                  className="block  w-full px-4 mb-4 pt-2 mt-2 text-tgray bg-white border rounded-md :bg-gray-800 :text-gray-300 :border-gray-600 focus:border-blue-400 :focus:border-blue-300 focus:ring-blue-300 focus:outtgray border-line-none focus:ring focus:ring-opacity-40"
                  style={{ paddingRight: "300px", paddingBottom: "5px" }}
                >
                    <option className="bg-white">
                        Test
                    </option>
                    <option className="bg-white">
                        Test1
                    </option>
                </select> */}

        <ul className="space-y-4 tracking-wide mt-8">
            
        <li>
                <a href="#" className="px-4 py-5 flex items-center border-b-2 space-x-4 text-gray-600 group">
                   
                    <span className="group-hover:text-tgray"></span>
                </a>
            </li>

            <li>
                <a href="#" className="px-4 py-5 flex items-center border-b-2 space-x-4 text-tgray border-line group">
                   
                    <span className="group-hover:text-tgray">Register</span>
                </a>
            </li>

            <li>
                <a href="#" className="px-4 py-5 flex items-center border-b-2 space-x-4 text-tgray border-line group">
                   
                    <span className="group-hover:text-tgray">FAQ/Helpdesk</span>
                </a>
            </li>

            <li>
                <a href="#" className="px-4 py-5 flex items-center border-b-2 space-x-4 text-tgray border-line group">
                   
                    <span className="group-hover:text-tgray">About</span>
                </a>
            </li>

            <li>
                <a href="#" className="px-4 py-5 flex items-center border-b-2 space-x-4 text-tgray border-line group">
                   
                    <span className="group-hover:text-tgray">Teacher's Login</span>
                </a>
            </li>

            <li>
                <a href="#" className="px-4 py-5 flex items-center border-b-2 space-x-4 text-tgray border-line group">
                   
                    <span className="group-hover:text-tgray">Student's Login</span>
                </a>
            </li>

            <li>
                <a href="#" className="px-4 py-5 flex items-center border-b-2 space-x-4 text-tgray border-line group">
                   
                    <span className="group-hover:text-tgray">Home</span>
                </a>
            </li>

        </ul>
    </div>
</aside>
  )
}

export default Dashboard