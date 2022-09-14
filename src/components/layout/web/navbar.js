/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState(false)
  const showsearchbar= () => {
    setSearch(!search)
  }
  return (
    <div className=" fixed top-0 left-0 right-0 z-50 flex justify-between bg-zinc justify-center items-center px-12 py-4 text-white text-xs  font-sans">
      <Link className=" text-3xl font-bold uppercase " to="/"><span className="text-orange">T</span>ravel</Link>
      <nav className="space-x-5">
        <Link className=" text-xl m-3 hover:text-orange" to="/">
          Home 
        </Link>
        <Link className=" text-xl m-3 hover:text-orange" to="/book">
          Book
        </Link>
        <Link className=" text-xl m-3 hover:text-orange" to="/packages">
          Packages
        </Link>
        <Link className=" text-xl m-3 hover:text-orange" to="/services">
          Services
        </Link>
        <Link className=" text-xl m-3 hover:text-orange" to="/gallery">
          Gallery 
        </Link>
        <Link className=" text-xl m-3 hover:text-orange" to="/review">
          Review
        </Link>
        <Link className=" text-xl m-3 hover:text-orange" to="/contact">
          Contact
        </Link>
      </nav>
      <div className=" text-2xl flex gap-5 ">
        <i onClick={showsearchbar} class="fas fa-search hover:text-orange" id="search-btn"></i>
        <i class="fas fa-user hover:text-orange" id="login-btn"></i>
      </div>{!search ? <></>:<>
      <form action="" className=" absolute top-16 left-0 right-0 px-3 py-6 bg-zinc border-t flex gap-3 clip-path items-center z-50">
        <input type="search" id="search-bar" className=" w-full p-1 text-zinc text-xl rounded-lg" placeholder="search here...."/>
        <label for="search-bar" class="fas fa-search text-2xl hover:text-orange "></label>
    </form>
    </>}
      
    </div>
    
    
  );
};
export default Navbar;


