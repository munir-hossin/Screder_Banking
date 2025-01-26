import appStore from "../assets/images/app-store.png"
import playStore from "../assets/images/play-store.png"
import bannerLogo from "../assets/images/banner-logo.png"
import bannerBg from "../assets/images/banner-bg.png"
import mobile from "../assets/images/mobile.png"

export default function Banner() {
  return (
        <div className="px-5 grid grid-cols-1 md:grid-cols-2">
            <div className="">
                <h1 className="text-5xl mt-36 mb-4 font-bold text-[rgb(51,7,113)] lg:w-3/4 leading-[58px] ">Stronger Banking,
                Greater Service <img className="inline-block" src={bannerLogo} alt="img" /> </h1>
                <p className="text-sm mb-12 text-[rgb(107,95,124)] lg:w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib ulum mollis lobort ringilla. Duis sed libero sit amet.</p>
                <ul className="flex">
                    <li className="py-3 pl-4 pr-10 border-[#dbdbdb] border-2 flex mr-5 items-center rounded-2xl cursor-pointer">
                        <img className="mr-3" src={appStore} alt="img" />
                        <span className="font-bold text-[rgb(51,7,113)]">App Store</span>
                        </li>
                    <li className="py-3 pl-4 pr-10 border-[#dbdbdb] border-2 flex mr-5 items-center rounded-2xl cursor-pointer">
                        <img className="mr-3" src={playStore} alt="img" />
                        <span className="font-bold text-[rgb(51,7,113)]">Play Store</span>
                        </li>
                </ul>
            </div>
            <div
            className="mt-32 z-50 flex justify-center"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px", // Set a height for visibility
        width:  "500px",
      }}
    >
     <img className="lg:h-[600px] mt-[-50px]" src={mobile} alt="iphon img" />
    </div>
        </div>
  )
}
