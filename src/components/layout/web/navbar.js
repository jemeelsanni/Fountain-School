import React from "react"; 
import About from "./About";
import Contact from "./Contact";

const Navbar = () => {
    return (
        <div className="flex justify-between px-20 py-6">
            <img src="./logo.jpg" className="w-14 h-12"/>
            <nav className="space-x-5">
                <a className=" font-semibold hover:text-fountain" href="#">HOME</a>
                <a className=" font-semibold hover:text-fountain" href="./About.js">ABOUT</a>
                <a className=" font-semibold hover:text-fountain" href="./Contact.js">CONTACT US</a>
                <a className=" font-semibold hover:text-fountain" href="">PORTAL</a>
                <a className=" font-semibold hover:text-fountain" href="">PAYMENT</a>

            </nav>
        </div>
    )
}
export default Navbar