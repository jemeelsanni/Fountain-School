import React from "react";
import Navbar from "../../components/layout/web/Navbar";
import Footer from "../../components/layout/web/Footer";
 
const Review = () => {
    return (
        <div className=" font-sans ">
            <Navbar />
            <div className=" pt-24 text-xs">
            <h1 className=" justify-center flex gap-2 px-10 ">
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">r</span>
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">e</span>
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">v</span>
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">i</span>
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">e</span>
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">w</span>
            </h1>
            <div className=" pb-8">
                <div>
                    <div class="swiper-slide">
                        <div className=" p-8 items-center text-center shadow-1xl rounded-lg ">
                            <img className="h-60 w-60 justify-center rounded-full object-cover mb-4" src="./pr pic1.jpg" alt="" />
                            <h3 className=" text-sh3 text-3xl font-semibold capitalize">john deo</h3>
                            <p className=" text-sp text-lg p-4">Lorem ipsum dolor  sit amet consectetur adipiscing elit. Ipsa adipsci 
                                quisqam snut nesciunt fugiat odit minus illum asperiores dlorum enim sint
                                quod ipsam distinctio molestias consectteur ducimus beatae, rephrendurit
                                exercitationem!</p>
                            <div class="stars">
                                <i class="fas fa-star text-xl text-orange"></i>
                                <i class="fas fa-star text-xl text-orange"></i>
                                <i class="fas fa-star text-xl text-orange"></i>
                                <i class="fas fa-star text-xl text-orange"></i>
                                <i class="far fa-star text-xl text-orange"></i>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>

    );
};

export default Review