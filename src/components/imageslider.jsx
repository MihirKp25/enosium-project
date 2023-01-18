import { useState } from "react"
import { Image } from "../helpers/imagedata"
import { motion } from "framer-motion";

export const Imageslider = () => {
    const [currimg, setcurrimg] = useState(0);
    return <div>
        <div className="w-[100%] h-[600px] mx-auto bg-gradient-to-l from-[#2e0969] to-[#792ebe] z-1">
            <motion.div className="w-[100%] h-[100%] bg-center bg-no-repeat bg-cover grid sm:grid-cols-12 "

            >
                <div className="sm:col-span-7 h-[100%] grid grid-rows-4" onClick={() => {
                    setcurrimg((currimg - 1 + Image.length) % Image.length)
                }}>


                    <div className="row-span-1">
                    </div>
                    <motion.div className="row-span-1"
                        initial={{
                            y: 100,
                            opacity: 0
                        }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <h1 className="text-left font-serif text-5xl pl-[7%] text-[#0a0a0a]">{Image[currimg].title}</h1>
                    </motion.div>
                    <motion.div className="row-span-2"
                        initial={{
                            y: 100,
                            opacity: 0
                        }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2 }}>
                        <h1 className="text-left pl-[7%] font-extralight text-[#8fd3fa]">{Image[currimg].description}</h1>
                    </motion.div>


                </div>
                <div className="col-span-1 h-[100%] hidden sm:block">

                </div>
                <motion.div className="sm:col-span-4  bg-center bg-no-repeat bg-cover z-1 overflow-auto flex align-middle" style={{  }} onClick={() => {
                    setcurrimg((currimg + 1) % Image.length)
                }}
                    initial={{
                        x: 100,
                        opacity: 0
                    }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <img src={Image[currimg].image} className="my-auto"></img>

                </motion.div>
            </motion.div>
        </div>

    </div>
}