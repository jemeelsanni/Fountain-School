import React from "react";
import Footer from "../../components/layout/web/Footer";
import Navbar from "../../components/layout/web/Navbar";


const Services = () => {
  return (
    
    <div className="font-sans">
      <Navbar/>
      <div className=" pt-24">
        <h1 className=" justify-center flex gap-2 px-10 ">
            <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">s</span>
            <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">e</span>
            <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">r</span>
            <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">v</span>
            <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">i</span>
            <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">c</span>
            <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">e</span>
            <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">s</span>
        </h1>

        <div className=" flex flex-wrap gap-6 p-5">

            <div className=" flex-grow flex-shrink basis-96 rounded-lg p-4 text-center hover:shadow-1xl">
                <i class="fas fa-hotel p-4 text-5xl text-orange"></i>
                <h3 className=" text-2xl text-sh3 capitalize ">affordable hotels</h3>
                <p className=" text-lg text-sp px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum,
                quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div className=" flex-grow flex-shrink basis-96 rounded-lg p-4 text-center hover:shadow-1xl">
                <i class="fas fa-utensils p-4 text-5xl text-orange"></i>
                <h3 className=" text-2xl text-sh3 capitalize ">food and drinks</h3>
                <p className=" text-lg text-sp px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum,
                quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div className=" flex-grow flex-shrink basis-96 rounded-lg p-4 text-center hover:shadow-1xl">
                <i class="fas fa-bullhorn p-4 text-5xl text-orange"></i>
                <h3 className=" text-2xl text-sh3 capitalize ">safety guide</h3>
                <p className=" text-lg text-sp px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum,
                quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>  
            <div className=" flex-grow flex-shrink basis-96 rounded-lg p-4 text-center hover:shadow-1xl">
                <i class="fas fa-globe-asia p-4 text-5xl text-orange"></i>
                <h3 className=" text-2xl text-sh3 capitalize ">around the world</h3>
                <p className=" text-lg text-sp px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum,
                quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>          
            <div className=" flex-grow flex-shrink basis-96 rounded-lg p-4 text-center hover:shadow-1xl">
                <i class="fas fa-plane p-4 text-5xl text-orange"></i>
                <h3 className=" text-2xl text-sh3 capitalize ">fastest travel</h3>
                <p className=" text-lg text-sp px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum,
                quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>   
            <div className=" flex-grow flex-shrink basis-96 rounded-lg p-4 text-center hover:shadow-1xl">
                <i class="fas fa-hiking p-4 text-5xl text-orange"></i>
                <h3 className=" text-2xl text-sh3 capitalize ">adventures</h3>
                <p className=" text-lg text-sp px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum,
                quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>              
        </div>
      </div>


      <Footer/>
    </div>
  );
};

export default Services;
