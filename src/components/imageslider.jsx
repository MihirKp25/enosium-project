import { useState } from "react"
import { Image } from "../helpers/imagedata"
import { motion } from "framer-motion";

export const Imageslider = () => {
    const [currimg, setcurrimg] = useState(0);
    return <div>
        <div className="w-[100%] h-[500px] mx-auto mt-[3%] bg-gradient-to-r from-[#792ebe] to-[#2e0969] ">
            <motion.div className="w-[100%] h-[100%] bg-center bg-no-repeat bg-cover grid grid-cols-12 "

            >
                <div className="col-span-7 h-[100%] grid grid-rows-4" onClick={() => {
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
                <div className="col-span-1 h-[100%]">

                </div>
                <motion.div className="col-span-4 max-w-sm max-h-sm bg-center bg-no-repeat bg-cover " style={{ backgroundImage: `url(${Image[currimg].image})` }} onClick={() => {
                    setcurrimg((currimg + 1) % Image.length)
                }}
                    initial={{
                        x: 100,
                        opacity: 0
                    }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                >

                </motion.div>
            </motion.div>
        </div>

    </div>
}