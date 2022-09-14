import React from "react";
import Footer from "../../components/layout/web/Footer";
import Navbar from "../../components/layout/web/Navbar";
const Book = () => {
    return (
        <div className="font-sans">
            <Navbar/>
            <div className=" pt-24 text-xs">
                <h1 className=" justify-center flex gap-2 px-10 ">
                    <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">b</span>
                    <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">o</span>
                    <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">o</span>
                    <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">k</span>
                </h1>
            </div>
            <div className=" flex flex-wrap gap-6 p-8">

                <div className=" flex-grow flex-shrink basis-96">
                    <img className=" w-full" src="./pic 2.jpg" alt=""/>
                </div>
                <form className=" flex-grow flex-shrink basis-96 p-8 shadow-1xl rounded-lg" action="">
                    <div className=" p-2">
                        <h3 className=" text-base px-2 text-sp capitalize ">where to</h3>
                        <input type="text" placeholder="place name" className=" block border-2 border-headb px-2 rounded-lg border-solid w-1/2 text-lg text-sh3 focus:outline-none focus:border-orange"/>
                    </div>
                    <div className=" p-2">
                        <h3 className=" text-base px-2 text-sp capitalize ">how many </h3>
                        <input type="number" placeholder="number of guests" className=" block border-2 border-headb px-2 rounded-lg border-solid w-1/2 text-lg text-sh3 focus:outline-none focus:border-orange"/>
                    </div>
                    <div className=" p-2">
                        <h3 className=" text-base px-2 text-sp capitalize ">arrivals</h3>
                        <input type="date" className=" block border-2 border-headb px-2 rounded-lg border-solid w-1/2 text-lg text-sh3 focus:outline-none focus:border-orange"/>
                    </div>
                    <div className=" p-2">
                        <h3 className=" text-base px-2 text-sp capitalize ">leaving</h3>
                        <input type="date" className=" block border-2 border-headb px-2 rounded-lg border-solid w-1/2 text-lg text-sh3 focus:outline-none focus:border-orange"/>
                    </div>
                    <input type="submit"class="btn" className=" block ml-2 bg-orange px-2 rounded-lg border-solid w-1/2 text-lg capitalize text-white" value="book now"/>
                </form>

            </div>
            <Footer/>
            
        </div>
        
        )
    }
    export default Book