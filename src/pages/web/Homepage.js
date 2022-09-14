import React from "react";
import Footer from "../../components/layout/web/Footer";
import Navbar from "../../components/layout/web/Navbar";
import { Link } from "react-router-dom";
import SlideNextButton from "../../components/slider";


  



const Homepage = () => {
  
    return (
        
        <div className=" text-xs w-full font-sans ">
          <Navbar/>
            <div className=" w-full min-h-screen flex flex-col justify-center items-center relative z-0">
              <div className=" text-center">
                <h3 className=" text-7xl text-white uppercase ">adventure is worthwhile</h3>
                <p className=" text-4xl text-white p-20 capitalize">discover new places with us, adventure awaits</p>
                <Link to="/about" class=" inline-block mt-4 text-white capitalize px-3 py-2 border-orange border-solid border-2 text-lg bg-orange">
                  discover more</Link> 
              </div>

              <div className=" p-1 flex gap-1 rounded-full bg-black top-40 ">
              <SlideNextButton/>
              </div>

              <div className=" absolute object-fit h-full w-full -z-10">
                  <video src="./video 1.mp4" className=" w-full h-full" id="video-slider" loop autoplay muted></video>
              </div>
            </div>

            <Footer/>
      </div>


    )
}
export default Homepage