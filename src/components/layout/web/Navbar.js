import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-6 py-6">
      <img src="./logo.jpg" className="w-14 h-12" />
      <nav className="space-x-5">
        <a className=" font-semibold hover:text-fountain" href="">
          HOME
        </a>
        <a className=" font-semibold hover:text-fountain" href="">
          ABOUT
        </a>
        <a className=" font-semibold hover:text-fountain" href="">
          CONTACT US
        </a>
        <a className=" font-semibold hover:text-fountain" href="/userauth">
          PORTAL
        </a>
        <a className=" font-semibold hover:text-fountain" href="">
          PAYMENT
        </a>
      </nav>
    </div>
  );
};
export default Navbar;
