import React from "react";
import Navbar from "../../components/layout/web/Navbar";
import Footer from "../../components/layout/web/Footer";

const Contact = () => {
    return (

        <div className=" font-sans">
            <Navbar />
            <div className=" pt-24 text-xs">
            <h1 className=" justify-center flex gap-2 px-10 ">
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">c</span>
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">o</span>
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">n</span>
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">t</span>
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">a</span>
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">c</span>
                <span className=" text-4xl uppercase font-semibold bg-headb px-3 pb-2 text-orange rounded-lg  inline-block">t</span>

            </h1>
            <div className=" flex flex-wrap gap-6 items-center p-16">

                <div className=" flex-grow flex-shrink basis-90">
                    <img className=" w-full" src="./contact-image.jpg" alt=""/>
                </div>

                <form className=" flex-grow flex-shrink basis-90" action="">
                    <div className=" flex flex-wrap gap-3 ">
                        <input type="text" placeholder="name" className=" w-2/5 p-4 text-xl text-sp outline-none bg-bsx capitalize"/>
                        <input type="email" placeholder="email" className=" w-2/4  p-4 text-xl text-sp outline-none  bg-bsx capitalize"/>
                    </div>
                    <br />
                    <div className=" flex flex-wrap  gap-3">
                        <input type="number" placeholder="number" className=" w-2/5  p-4 text-xl text-sp outline-none bg-bsx capitalize" />
                        <input type="text" placeholder="subject" className=" w-2/4  p-4 text-xl text-sp outline-none bg-bsx capitalize"/>
                    </div>
                    <textarea name="message" id="" cols="30" rows="" className=" h-60 resize-none w-11/12 my-4 p-4 text-xl text-sp outline-none  bg-bsx capitalize"></textarea>
                    <input type="submit" className=" inline-block mt-1 bg-orange text-white text-lg capitalize cursor-pointer px-2 py-2" value="send message"/>
                </form>
            </div>
            </div>
            <Footer />
        </div>

    );
};

export default Contact