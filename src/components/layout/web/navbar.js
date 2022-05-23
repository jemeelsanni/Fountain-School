import React from "react";

const Navbar = () => {
    return (
        <div>
            <img src="./logo.jpg" className="w-14 h-12 pt-4 pl-9 "/>
            <nav className="justify-end pr-9 space-x-4">
                <a className="group-hover:text-fountain" href="">Home</a>
                <a className="group-hover:text-fountain" href="">About</a>
                <a className="group-hover:text-fountain" href="">Contact Us</a>
                <a className="group-hover:text-fountain" href="">Portal</a>
                <a className="group-hover:text-fountain" href="">Payment</a>

            </nav>
        </div>
    )
}
export default Navbar