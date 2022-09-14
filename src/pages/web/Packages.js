import React from "react";
import Navbar from "../../components/layout/web/Navbar";
import Footer from "../../components/layout/web/Footer";
import { Link } from "react-router-dom";

const Packages = () => {
    return (
        <div className=" font-sans">
            <Navbar />
            <div className=" pt-24 text-xs">
            <h1 className=" justify-center flex gap-2 px-10 ">
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">p</span>
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">a</span>
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">c</span>
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">k</span>
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">a</span>
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">g</span>
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">e</span>
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">s</span>
            </h1>

            <div className=" flex flex-wrap gap-8 p-24">

                <div className=" flex-grow flex-shrink basis-96 rounded-lg overflow-hidden shadow-1xl">
                    <img className=" h-64 w-full object-cover" src="./p-1.jpg" alt=""/>
                    <div className=" p-6">
                        <h3 className=" text-xl capitalize font-medium text-sh3"> <i class="fas fa-map-marker-alt text-orange"></i> mumbai </h3>
                        <p className=" text-lg">Lorem ipsum dolor sit amet consecteur adipisicing elit. Veritatis, nam!</p>
                        <div class="stars">
                            <i class="fas fa-star text-lg text-orange"></i>
                            <i class="fas fa-star text-lg text-orange"></i>
                            <i class="fas fa-star text-lg text-orange"></i>
                            <i class="fas fa-star text-lg text-orange"></i>
                            <i class="fas fa-star text-lg text-orange"></i>
                            <i class="far fa-star text-lg text-orange"></i>
                        </div>
                        <div>
                            <div className="text-xl text-sh3 pt-2"> $90.00 <span className=" text-sp pt-2 line-through">$120.00</span></div>
                            <Link to="/packages" className=" inline-block mt-2 bg-orange text-white text-lg capitalize cursor-pointer px-2 py-2">book now</Link>
                        </div>
                    </div>
                </div>

                <div className=" flex-grow flex-shrink basis-96 rounded-lg overflow-hidden shadow-1xl">
                    <img className=" h-64 w-full object-cover" src="./p-2.jpg" alt=""/>
                    <div className=" p-6">
                        <h3 className=" text-xl capitalize font-medium text-sh3"> <i class="fas fa-map-marker-alt text-orange"></i> hawaii </h3>
                        <p className=" text-lg">Lorem ipsum dolor sit amet consecteur adipisicing elit. Veritatis, nam!</p>
                        <div class="stars">
                            <i class="fas fa-star text-lg text-orange"></i>
                            <i class="fas fa-star text-lg text-orange"></i>
                            <i class="fas fa-star text-lg text-orange"></i>
                            <i class="fas fa-star text-lg text-orange"></i>
                            <i class="fas fa-star text-lg text-orange"></i>
                            <i class="far fa-star text-lg text-orange"></i>
                        </div>
                        <div>
                        <div className="text-xl text-sh3 pt-2"> $90.00 <span className=" text-sp pt-2 line-through">$120.00</span></div>
                            <Link to="/packages" className=" inline-block mt-2 bg-orange text-white text-lg capitalize cursor-pointer px-2 py-2">book now</Link>
                        </div>
                    </div>
                </div>

                <div className=" flex-grow flex-shrink basis-96 rounded-lg overflow-hidden shadow-1xl">
                        <img className=" h-64 w-full object-cover" src="./p-3.jpg" alt=""/>
                        <div className=" p-6">
                            <h3 className=" text-xl capitalize font-medium text-sh3"> <i class="fas fa-map-marker-alt text-orange"></i> sydney </h3>
                            <p className=" text-lg">Lorem ipsum dolor sit amet consecteur adipisicing elit. Veritatis, nam!</p>
                            <div class="stars">
                                <i class="fas fa-star text-lg text-orange"></i>
                                <i class="fas fa-star text-lg text-orange"></i>
                                <i class="fas fa-star text-lg text-orange"></i>
                                <i class="fas fa-star text-lg text-orange"></i>
                                <i class="fas fa-star text-lg text-orange"></i>
                                <i class="far fa-star text-lg text-orange"></i>
                            </div>
                            <div>
                            <div className="text-xl text-sh3 pt-2"> $90.00 <span className=" text-sp pt-2 line-through">$120.00</span></div>
                            <Link to="/packages" className=" inline-block mt-2 bg-orange text-white text-lg capitalize cursor-pointer px-2 py-2">book now</Link>
                            </div>
                        </div>
                    </div>
            
                    <div className=" flex-grow flex-shrink basis-96 rounded-lg overflow-hidden shadow-1xl">
                            <img className=" h-64 w-full object-cover" src="./p-4.jpg" alt=""/>
                            <div className=" p-6">
                                <h3 className=" text-xl capitalize font-medium text-sh3"> <i class="fas fa-map-marker-alt text-orange"></i> paris </h3>
                                <p className=" text-lg">Lorem ipsum dolor sit amet consecteur adipisicing elit. Veritatis, nam!</p>
                                <div class="stars">
                                    <i class="fas fa-star text-lg text-orange"></i>
                                    <i class="fas fa-star text-lg text-orange"></i>
                                    <i class="fas fa-star text-lg text-orange"></i>
                                    <i class="fas fa-star text-lg text-orange"></i>
                                    <i class="fas fa-star text-lg text-orange"></i>
                                    <i class="far fa-star text-lg text-orange"></i>
                                </div>
                                <div>
                                <div className="text-xl text-sh3 pt-2"> $90.00 <span className=" text-sp pt-2 line-through">$120.00</span></div>
                            <Link to="/packages" className=" inline-block mt-2 bg-orange text-white text-lg capitalize cursor-pointer px-2 py-2">book now</Link>
                                </div>
                            </div>
                        </div>

                        <div className=" flex-grow flex-shrink basis-96 rounded-lg overflow-hidden shadow-1xl">
                                <img className=" h-64 w-full object-cover" src="./p-5.jpg" alt=""/>
                                <div className=" p-6">
                                    <h3 className=" text-xl capitalize font-medium text-sh3"> <i class="fas fa-map-marker-alt text-orange"></i> tokyo </h3>
                                    <p className=" text-lg">Lorem ipsum dolor sit amet consecteur adipisicing elit. Veritatis, nam!</p>
                                    <div class="stars">
                                        <i class="fas fa-star text-lg text-orange"></i>
                                        <i class="fas fa-star text-lg text-orange"></i>
                                        <i class="fas fa-star text-lg text-orange"></i>
                                        <i class="fas fa-star text-lg text-orange"></i>
                                        <i class="fas fa-star text-lg text-orange"></i>
                                        <i class="far fa-star text-lg text-orange"></i>
                                    </div>
                                    <div>
                                    <div className="text-xl text-sh3 pt-2"> $90.00 <span className=" text-sp pt-2 line-through">$120.00</span></div>
                            <Link to="/packages" className=" inline-block mt-2 bg-orange text-white text-lg capitalize cursor-pointer px-2 py-2">book now</Link>
                                    </div>
                                </div>
                            </div>
                    
                            <div className=" flex-grow flex-shrink basis-96 rounded-lg overflow-hidden shadow-1xl">
                                    <img className=" h-64 w-full object-cover" src="./p-6.jpg" alt=""/>
                                    <div className=" p-6">
                                        <h3 className=" text-xl capitalize font-medium text-sh3"> <i class="fas fa-map-marker-alt text-orange"></i> egypt </h3>
                                        <p className=" text-lg">Lorem ipsum dolor sit amet consecteur adipisicing elit. Veritatis, nam!</p>
                                        <div class="stars">
                                            <i class="fas fa-star text-lg text-orange"></i>
                                            <i class="fas fa-star text-lg text-orange"></i>
                                            <i class="fas fa-star text-lg text-orange"></i>
                                            <i class="fas fa-star text-lg text-orange"></i>
                                            <i class="fas fa-star text-lg text-orange"></i>
                                            <i class="far fa-star text-lg text-orange"></i>
                                        </div>
                                        <div>
                                        <div className="text-xl text-sh3 pt-2"> $90.00 <span className=" text-sp pt-2 line-through">$120.00</span></div>
                            <Link to="/packages" className=" inline-block mt-2 bg-orange text-white text-lg capitalize cursor-pointer px-2 py-2">book now</Link>
                                        </div>
                                    </div>
                                </div>
            </div>
            </div>
            <Footer />


        </div>
    );
};

export default Packages