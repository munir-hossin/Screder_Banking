import tree1 from "../assets/images/tree1.png"
import tree2 from "../assets/images/tree2.png"

export default function Tree() {
    return (
        <section className="mt-44 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="shadow-2xl rounded-2xl bg-white text-center p-5 md:p-10 mx-[50px] ">
                    <img src={tree1} alt="Tree img" />
                    <p className="mt-4 text-2xl leading-9 md:mt-10 font-bold text-[#330771]">
                    Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Ps lor sit
                        consectetur adipiscing elit.
                    </p>
                    </div>
                <div className="shadow-2xl rounded-2xl bg-white text-center p-5 md:p-10 mx-[50px] ">
                <img className="block mx-auto" src={tree2} alt="Tree img" />
                    <p className="mt-4 text-2xl leading-9 md:mt-10 font-bold text-[#330771]">
                    Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Ps lor sit
                        consectetur adipiscing elit.
                    </p>
                    </div>
             
            </div>
        </section>
    )
}
