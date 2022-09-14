import React from "react";
import Navbar from "../../components/layout/web/Navbar";
import Footer from "../../components/layout/web/Footer";
import { Link } from "react-router-dom";

const Gallery = () => {
    return(
        <div className=" font-sans">
            <Navbar />
            <div className=" pt-24 text-xs">
                <h1 className=" justify-center flex gap-2 px-10 ">
                    <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">g</span>
                    <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">a</span>
                    <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">l</span>
                    <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">l</span>
                    <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">e</span>
                    <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">r</span>
                    <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">y</span>
                </h1>

                <div className=" flex flex-wrap gap-6 p-16">
                    <div className=" overflow-hidden shadow-1xl border-2 border-solid border-white rounded-lg flex-grow flex-shrink basis-96 h-64 relative">
                        <img className=" w-full h-full object-cover" src="./g-1.jpg" alt=""/>
                        <div className=" absolute -top-full items-center left-0 h-full w-full text-center bg-bs p-8 pt-20 hover:top-0">
                            <h3 className=" text-2xl text-orange">amazing places</h3>
                            <p className=" p-2 text-lg text-white">lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tnetur.</p>
                            <Link to="/gallery" className=" inline-block mt-2 bg-orange text-white text-lg capitalize cursor-pointer px-2 py-2">see more</Link>
                        </div>
                    </div>
                    <div className=" overflow-hidden shadow-1xl border-2 border-solid border-white rounded-lg flex-grow flex-shrink basis-96 h-64 relative">
                        <img className=" w-full h-full object-cover" src="./g-2.jpg" alt=""/>
                        <div className=" absolute -top-full left-0 h-full w-full text-center bg-bs p-8 pt-20 hover:top-0">
                            <h3 className=" text-2xl text-orange">amazing places</h3>
                            <p className=" p-2 text-lg text-white">lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tnetur.</p>
                            <Link to="/gallery" className=" inline-block mt-2 bg-orange text-white text-lg capitalize cursor-pointer px-2 py-2">see more</Link>
                        </div>
                    </div>
                    <div className=" overflow-hidden shadow-1xl border-2 border-solid border-white rounded-lg flex-grow flex-shrink basis-96 h-64 relative ">
                        <img className=" w-full h-full object-cover" src="./g-3.jpg" alt=""/>
                        <div className=" absolute -top-full left-0 h-full w-full text-center bg-bs p-8 pt-20 hover:top-0">
                            <h3 className=" text-2xl text-orange">amazing places</h3>
                            <p className=" p-2 text-lg text-white">lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tnetur.</p>
                            <Link to="/gallery" className=" inline-block mt-2 bg-orange text-white text-lg capitalize cursor-pointer px-2 py-2">see more</Link>
                        </div>
                    </div>
                    <div className=" overflow-hidden shadow-1xl border-2 border-solid border-white rounded-lg flex-grow flex-shrink basis-96 h-64 relative">
                        <img className=" w-full h-full object-cover" src="./g-4.jpg" alt=""/>
                        <div className=" absolute -top-full left-0 h-full w-full text-center bg-bs p-8 pt-20 hover:top-0">
                            <h3 className=" text-2xl text-orange">amazing places</h3>
                            <p className=" p-2 text-lg text-white">lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tnetur.</p>
                            <Link to="/gallery" className=" inline-block mt-2 bg-orange text-white text-lg capitalize cursor-pointer px-2 py-2">see more</Link>
                        </div>
                    </div>
                    <div className=" overflow-hidden shadow-1xl border-2 border-solid border-white rounded-lg flex-grow flex-shrink basis-96 h-64 relative">
                        <img className=" w-full h-full object-cover" src="./g-5.jpg" alt=""/>
                        <div className=" absolute -top-full left-0 h-full w-full text-center bg-bs p-8 pt-20 hover:top-0">
                            <h3 className=" text-2xl text-orange">amazing places</h3>
                            <p className=" p-2 text-lg text-white">lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tnetur.</p>
                            <Link to="/gallery" className=" inline-block mt-2 bg-orange text-white text-lg capitalize cursor-pointer px-2 py-2">see more</Link>
                        </div>
                    </div>
                    <div className=" overflow-hidden shadow-1xl border-2 border-solid border-white rounded-lg flex-grow flex-shrink basis-96 h-64 relative ">
                        <img className=" w-full h-full object-cover" src="./g-6.jpg" alt=""/>
                        <div className=" absolute -top-full left-0 h-full w-full text-center bg-bs p-8 pt-20 hover:top-0">
                            <h3 className=" text-2xl text-orange">amazing places</h3>
                            <p className=" p-2 text-lg text-white">lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tnetur.</p>
                            <Link to="/gallery" className=" inline-block mt-2 bg-orange text-white text-lg capitalize cursor-pointer px-2 py-2">see more</Link>
                        </div>
                    </div>
                    <div className=" overflow-hidden shadow-1xl border-2 border-solid border-white rounded-lg flex-grow flex-shrink basis-96 h-64 relative">
                        <img className=" w-full h-full object-cover" src="./g-7.jpg" alt=""/>
                        <div className=" absolute -top-full left-0 h-full w-full text-center bg-bs p-8 pt-20 hover:top-0">
                            <h3 className=" text-2xl text-orange">amazing places</h3>
                            <p className=" p-2 text-lg text-white">lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tnetur.</p>
                            <Link to="/gallery" className=" inline-block mt-2 bg-orange text-white text-lg capitalize cursor-pointer px-2 py-2">see more</Link>
                        </div>
                    </div>
                    <div className=" overflow-hidden shadow-1xl border-2 border-solid border-white rounded-lg flex-grow flex-shrink basis-96 h-64 relative">
                        <img className=" w-full h-full object-cover" src="./g-8.jpg" alt=""/>
                        <div className=" absolute -top-full left-0 h-full w-full text-center bg-bs p-8 pt-20 hover:top-0">
                            <h3 className=" text-2xl text-orange">amazing places</h3>
                            <p className=" p-2 text-lg text-white">lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tnetur.</p>
                            <Link to="/gallery" className=" inline-block mt-2 bg-orange text-white text-lg capitalize cursor-pointer px-2 py-2">see more</Link>
                        </div>
                    </div>
                    <div className=" overflow-hidden shadow-1xl border-2 border-solid border-white rounded-lg flex-grow flex-shrink basis-96 h-64 relative ">
                        <img className=" w-full h-full object-cover" src="./g-9.jpg" alt=""/>
                        <div className=" absolute -top-full left-0 h-full w-full text-center bg-bs p-8 pt-20 hover:top-0">
                            <h3 className=" text-2xl text-orange">amazing places</h3>
                            <p className=" p-2 text-lg text-white">lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tnetur.</p>
                            <Link to="/gallery" className=" inline-block mt-2 bg-orange text-white text-lg capitalize cursor-pointer px-2 py-2">see more</Link>
                        </div>
                    </div>
                
                    

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Gallery