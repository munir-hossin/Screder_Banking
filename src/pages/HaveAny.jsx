import hMobile1 from "../assets/images/h-mobile1.png"
import hMobile2 from "../assets/images/h-mobile2.png"

export default function HaveAny() {
    return (
        <div className="px-5 mx-auto">

        <div className="mt-10 mb-5 rounded-2xl mx-auto  bg-gradient-to-r from-[rgb(255,161,62)] via-[rgb(85,33,104)] to-[rgb(51,7,113)]">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative block">
                    <div className="absolute top-[100px] right-32 overflow-hidden">
                        <img src={hMobile2} alt="img" />
                    </div>
                    <div className="absolute md:top-[41px] right-54 overflow-hidden">
                        <img src={hMobile1} alt="img" />
                    </div>
                </div>

                <div>
                    <h2 className="pt-32 font-bold text-5xl text-white">Have any Questions?</h2>
                    <p className="pb-3 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib ulum mollis lobort ringilla. Duis sed libero sit.</p>
                    <button className="mt-3 py-4 block mb-16 px-8 font-bold rounded-2xl border-none cursor-pointer hover:bg-gray-200  bg-white">Get Started</button>
                </div>

                <div>
                </div>
            </div>
        </div>
        </div>
    )
}



