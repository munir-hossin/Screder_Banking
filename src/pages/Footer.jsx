import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import logo from "../assets/images/logo.png"

export default function Footer() {
  return (
    <div className="px-5 pt-20 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <div>
                <img className="mb-4" src={logo} alt="img" />
                <p className="text-[#6B5F7C] mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib ulum mollis lobort ringilla. Duis sed libero sit amet.
                </p>

                <ul className="flex">
                    <li className="bg-[#ECECEE] rounded-md mr-3 text-xl p-2 flex justify-center text-[#646464] cursor-pointer items-center"><FaFacebookF /></li>
                    <li className="bg-[#ECECEE] rounded-md mr-3 text-xl p-2 flex justify-center text-[#646464] cursor-pointer items-center"><FaTwitter /></li>
                    <li className="bg-[#ECECEE] rounded-md mr-3 text-xl p-2 flex justify-center text-[#646464] cursor-pointer items-center"><FaLinkedinIn /></li>
                </ul>
            </div>

            <div>
                <h6 className="mb-3 mt-5 font-bold text-[#330771]">Company</h6>
                <ul>
                    <li className="mb-3">About</li>
                    <li className="mb-3">Terms of Use</li>
                    <li className="mb-3">Privacy Policy</li>
                    <li className="mb-3">How it Works</li>
                    <li className="mb-3">Contact Us</li>
                </ul>
            </div>
            <div>
                <h6 className="mb-3 mt-5 font-bold text-[#330771]">Support</h6>
                <ul>
                    <li className="mb-3">Support Carrer</li>
                    <li className="mb-3">24h Service</li>
                    <li className="mb-3">Quick Chat</li>

                </ul>
            </div>
            <div>
                <h6 className="mb-3 mt-5 font-bold text-[#330771]">Contact</h6>
                <ul>
                    <li className="mb-3">WhatsApp</li>
                    <li className="mb-3">Support 24</li>
                  
                </ul>
            </div>
        </div>

        <div className="border-t border-gray-200 mb-5">
            <p className="flex justify-center py-2">Copyright © 2025. All rights reserved by Munir</p>
        </div>
    </div>
  )
}
