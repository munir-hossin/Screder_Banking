import React from 'react'
import logo_img from "../assets/images/logo.png"



export default function Navbar() {
    return (
        <div className="bg-gradient-to-r from-[#fffaf5] to-[#fff] lg:flex justify-between py-2 px-5 mx-auto items-center bg-amber-50">
 
            <ul>
                <li>
                    <img className="cursor-pointer" src={logo_img} alt="img" />
                </li>
            </ul>

            <ul className="flex">
                <li className="mx-3 cursor-pointer hover:font-bold hover:text-[rgb(255,161,62)]">Features</li>
                <li className="mx-3 cursor-pointer hover:font-bold hover:text-[rgb(255,161,62)]">About us</li>
                <li className="mx-3 cursor-pointer hover:font-bold hover:text-[rgb(255,161,62)]">Pricing</li>
                <li className="mx-3 cursor-pointer hover:font-bold hover:text-[rgb(255,161,62)]">Contact us</li>
            </ul>

            <ul>
                <li>
                    <button className="font-bold text-[rgb(51,7,113)] cursor-pointer">Log in</button>
                    <button className="ml-7 py-3 px-6 text-white font-bold rounded-2xl bg-[rgb(145,29,162)] cursor-pointer">Sign up</button>
                </li>
            </ul>
              
            {/* <div style={{ clipPath: "polygon(0 14%, 100% 0, 100% 84%, 0 100%)", backgroundColor: "lightblue", width: "1240px", height: "1100px" }} className="mx-auto">
            </div> */}
          
        </div>
    )
}
