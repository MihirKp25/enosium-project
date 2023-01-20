import { useState } from "react"
import { Image } from "../helpers/imagedata"
import { motion } from "framer-motion";

export const Imageslider = () => {
    const [currimg, setcurrimg] = useState(0);
    const [check, setcheck]=useState(true)
    // setTimeout(() => {
    //     setcurrimg((currimg + 1) % Image.length)
    // }, 5000);
    return <div>
        <div className="w-[100%] h-[600px] mx-auto bg-gradient-to-l from-[#2e0969] to-[#792ebe] z-1">
            <motion.div className="w-[100%] h-[100%] bg-center bg-no-repeat bg-cover sm:grid sm:grid-cols-12 flex align-middle">
                <img src={Image[currimg].image} className="absolute flex align-middle sm:hidden mx-auto my-auto opacity-50"/>
                <div className="col-span-1 flex items-center justify-center text-5xl text-gray-400"><button><i class="fa-solid fa-less-than"></i></button></div>
                <div className="sm:col-span-6 h-[100%] grid grid-rows-4">


                    <div className="row-span-1">
                    </div>
                    <motion.div className="row-span-1"
                        initial={{
                            y: 100,
                            opacity: 0
                        }}
                        animate={{  y: 0, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <h1 className="text-left font-serif text-3xl sm:text-5xl pl-[7%] sm:text-[#0a0a0a] text-white">{Image[currimg].title}</h1>
                    </motion.div>
                    <motion.div className="row-span-2"
                        initial={{
                            y: 100,
                            opacity: 0
                        }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2 }}>
                        <h1 className="text-left pl-[7%] font-extralight sm:text-lg text-md text-[#8fd3fa]">{Image[currimg].description}</h1>
                    </motion.div>


                </div>
                <div className="col-span-1 h-[100%] hidden sm:block">

                </div>
                <motion.div className="sm:col-span-3  bg-center bg-no-repeat bg-cover z-1 overflow-auto sm:flex align-middle hidden" style={{  }} 
                    initial={{
                        x: 100,
                        opacity: 0
                    }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <img src={Image[currimg].image} className="my-auto"></img>

                </motion.div>
                <div className="col-span-1 flex items-center justify-center text-5xl text-gray-400"><button><i class="fa-solid fa-greater-than"></i></button></div>
            </motion.div>
        </div>

    </div>
}