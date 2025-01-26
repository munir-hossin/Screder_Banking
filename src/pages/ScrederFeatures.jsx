import feature1 from "../assets/images/feature1.png"
import feature2 from "../assets/images/feature2.png"
import feature3 from "../assets/images/feature3.png"
import feature4 from "../assets/images/feature4.png"
import feature5 from "../assets/images/feature5.png"
import feature6 from "../assets/images/feature6.png"

export default function ScrederFeatures() {
    return (
        <div className="py-10 ">
            {/* <div className="px-5 bg-[rgb(51,7,113)] mx-auto z-10 max-w-2xl h-[906px] transform -rotate-1">
      <h2 className="text-white">hello world</h2>
    </div> */}


            <div
                style={{
                    clipPath: "polygon(0 14%, 100% 0, 100% 84%, 0 100%)",
                    backgroundColor: "#330771",
                    width: "100%", // ✅ Full width
                    height: "1140px"
                }}
                className="mx-auto mt-[-180px] "
            >

                <h2 className="mx-5 text-4xl text-white font-bold pt-[196px]">Screder Features</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 px-5">
                    <div className="text-white border  text-center px-10  py-8 mt-12 rounded bg-gradient-to-b bg-fuchsia-950 from-fuchsia-950 to-blue-800 cursor-pointer">
                        <div className="mx-auto w-24 h-24 border flex justify-center items-center rounded-full">
                            <img className="" src={feature1} alt="img" />
                        </div>
                        <h4 className="font-bold mt-6">Multi Currency</h4>
                        <p>
                        We realize ideas from simple <br /> toomplex. <span className="font-bold text-[rgb(255,161,62)]">Read More</span>
                        </p>
                    </div>
                    <div className="text-white border  text-center px-10 py-8 mt-12 rounded bg-gradient-to-b bg-fuchsia-950 from-fuchsia-950 to-blue-800 cursor-pointer">
                        <div className="mx-auto w-24 h-24 border flex justify-center items-center rounded-full">
                            <img className="" src={feature2} alt="img" />
                        </div>
                        <h4 className="font-bold mt-6">Multi Currency</h4>
                        <p>
                        We realize ideas from simple <br /> toomplex. <span className="font-bold text-[rgb(255,161,62)]">Read More</span>
                        </p>
                    </div>
                    <div className="text-white border  text-center px-10 py-8 mt-12 rounded bg-gradient-to-b bg-fuchsia-950 from-fuchsia-950 to-blue-800 cursor-pointer">
                        <div className="mx-auto w-24 h-24 border flex justify-center items-center rounded-full">
                            <img className="" src={feature3} alt="img" />
                        </div>
                        <h4 className="font-bold mt-6">Multi Currency</h4>
                        <p>
                        We realize ideas from simple <br /> toomplex. <span className="font-bold text-[rgb(255,161,62)]">Read More</span>
                        </p>
                    </div>
                    <div className="text-white border  text-center px-10 py-8 mt-12 rounded bg-gradient-to-b bg-fuchsia-950 from-fuchsia-950 to-blue-800 cursor-pointer">
                        <div className="mx-auto w-24 h-24 border flex justify-center items-center rounded-full">
                            <img className="" src={feature4} alt="img" />
                        </div>
                        <h4 className="font-bold mt-6">Multi Currency</h4>
                        <p>
                        We realize ideas from simple <br /> toomplex. <span className="font-bold text-[rgb(255,161,62)]">Read More</span>
                        </p>
                    </div>
                    <div className="text-white border  text-center px-10 py-8 mt-12 rounded bg-gradient-to-b bg-fuchsia-950 from-fuchsia-950 to-blue-800 cursor-pointer">
                        <div className="mx-auto w-24 h-24 border flex justify-center items-center rounded-full">
                            <img className="" src={feature5} alt="img" />
                        </div>
                        <h4 className="font-bold mt-6">Multi Currency</h4>
                        <p>
                        We realize ideas from simple <br /> toomplex. <span className="font-bold text-[rgb(255,161,62)]">Read More</span>
                        </p>
                    </div>
                    <div className="text-white border  text-center px-10 py-8 mt-12 rounded bg-gradient-to-b bg-fuchsia-950 from-fuchsia-950 to-blue-800 cursor-pointer">
                        <div className="mx-auto w-24 h-24 border flex justify-center items-center rounded-full">
                            <img className="" src={feature6} alt="img" />
                        </div>
                        <h4 className="font-bold mt-6">Multi Currency</h4>
                        <p>
                        We realize ideas from simple <br /> toomplex. <span className="font-bold text-[rgb(255,161,62)]">Read More</span>
                        </p>
                    </div>




                   
                </div>
            
            </div>

        </div>
    )
}
