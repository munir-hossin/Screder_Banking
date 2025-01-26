import dAppIcon from "../assets/images/d-app-store.png"
import dPlayIcon from "../assets/images/d-play-store.png"
import dMobile from "../assets/images/d_mobile.png"

export default function DownloadApp() {
  return (
    <div className="mt-16">
      <div className="px-5 grid grid-cols-1 md:grid-cols-2">
           <div className="">
             <h1 className="text-5xl mt-36 mb-4 font-bold text-[rgb(51,7,113)] lg:w-3/4 leading-[58px] ">
             Download <br />
                the Mobile App
             </h1>
             <p className="text-sm mb-12 text-[rgb(107,95,124)] lg:w-3/4">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib ulum mollis lobort ringilla. Duis sed libero sit amet. onsectetur adipiscing elit.
             </p>
             <ul className="gap-5">
               <li className="py-3 pl-6  w-[242px] mb-4 border-[#dbdbdb] border-2 flex mr-5 items-center rounded-2xl cursor-pointer">
                 <img className="mr-8" src={dAppIcon} alt="img" />
                 <span className="font-bold text-[rgb(51,7,113)]">App Store</span>
               </li>
               <li className="py-3 pl-6 w-[242px]  border-[#dbdbdb] border-2 flex mr-5 items-center rounded-2xl cursor-pointer">
                 <img className="mr-8" src={dPlayIcon} alt="img" />
                 <span className="font-bold text-[rgb(51,7,113)]">Play Store</span>
               </li>
             </ul>
           </div>
           <div
             className="mt-32 z-50 flex justify-center"
          
           >
             <img className="lg:h-[600px] mt-[-50px]" src={dMobile} alt="iphon img" />
           </div>
         </div>
    </div>
  )
}
