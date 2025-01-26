import base1 from "../assets/images/base1.png"
import base2 from "../assets/images/base2.png"

export default function GetPhysic() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
            <img src={base1} alt="Get Physic imag" />
            <img src={base2} alt="Get Physic imag" />
        </div>
        <div></div>
    </div>
  )
}
