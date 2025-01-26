import { IoIosCheckmark } from "react-icons/io"
import base1 from "../assets/images/base1.png"
import base2 from "../assets/images/base2.png"

export default function GetPhysic() {
    return (
    
            <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="relative">
                <img className="absolute top-10 left-0" src={base1} alt="Get Physic imag" />
                <img className="absolute top-40 left-36" src={base2} alt="Get Physic imag" />
            </div>
            <div className="sm:ml-2 lg:ml-20 mt-12">
                <h2 className="text-4xl mb-8 lg:w-3/4 font-bold text-[#330771]">Get Physic Visa Card
                    and Virtual Card</h2>

                {[...Array(3)].map((_, index) =>
                    <ul key={index} className="flex items-center mb-6">
                        <li className="w-6 h-6 flex justify-center items-center shadow-md rounded-full bg-fuchsia-800 text-white text-xl mr-5"><IoIosCheckmark /></li>
                        <li className="text-xl text-[#6B5F7C]">Manage your expenses</li>
                    </ul>
                )}


                <button className="mt-3 py-4 px-8 font-bold rounded-2xl border-none cursor-pointer hover:bg-amber-600 text-white bg-[#FFA13E]">Get Started</button>
            </div>
        </div>
     
    )
}
