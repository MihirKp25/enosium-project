import { useState } from "react"
import { Image } from "../helpers/imagedata"
import { motion, useAnimation } from "framer-motion";

export const Imageslider = () => {
    const [currimg, setcurrimg] = useState(0);

    const animation1= useAnimation('elastic', 1000, 100);


    return <div>
        <div className="w-[100%] h-[500px] mx-auto mt-[3%] bg-gradient-to-r from-[#792ebe] to-[#2e0969] ">
            <div className="w-[100%] h-[100%] bg-center bg-no-repeat bg-cover grid grid-cols-12 " >
                <div className="col-span-7 h-[100%] grid grid-rows-4" onClick={() => {
                    setcurrimg((currimg - 1 + Image.length) % Image.length)
                }}>


                    <div className="row-span-1">
                    </div>
                    <div className="row-span-1">
                        <h1 className="text-left font-serif text-5xl pl-[7%] text-[#0a0a0a]">{Image[currimg].title}</h1>
                    </div>
                    <div className="row-span-2">
                        <h1 className="text-left pl-[7%] font-extralight text-[#8fd3fa]">{Image[currimg].description}</h1>
                    </div>


                </div>
                <div className="col-span-1 h-[100%]">

                </div>
                <div className="col-span-4 max-w-sm max-h-sm bg-center bg-no-repeat bg-cover " style={{ backgroundImage: `url(${Image[currimg].image})` }} onClick={() => {
                    setcurrimg((currimg + 1) % Image.length)
                }}>

                </div>
            </div>
        </div>

    </div>
}