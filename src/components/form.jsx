import { useState } from "react"
import Banking_image from "../images/banking_image.png"
import { motion, AnimatePresence } from "framer-motion";
import { ButtonToolbar } from "react-bootstrap";

export const Forminput = () => {

    const [num, setnum] = useState(1);
    return <div className="mb-[8%]">
        {
            num == 1 && (
            <AnimatePresence>
            <motion.div className="mb-20"
            initial={{
                scale: 0.5,
                opacity: 0
            }}
            animate={{
                scale: 1, 
                opacity: 1
            }}
            transition={{
                delay: 0.5,
                duration: 1
            }}
            exit={{
                scale: 0.5,
                opacity: 0,
            }}
            
            >

                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <div className="col-span-1  flex justify-center mt-10">

                        <div className="grid grid-rows-4  p-5 rounded-xl bg-[#ffffff]">
                            <h1 className="text-4xl text-left font-semibold">Form1</h1>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="do something" /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="do something" /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="do something" /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="do something" /></div>

                        </div>
                    </div>
                    <div className="col-span-1 hidden md:block">
                        <img src={Banking_image} />
                    </div>
                </div>

            </motion.div></AnimatePresence>)
        }
        {
            num == 2 && (
                <AnimatePresence>
                <motion.div className="mb-20"
            initial={{
                scale: 0.5,
                opacity: 0
            }}
            animate={{
                scale: 1, 
                opacity: 1
            }}
            transition={{
                delay: 0.5,
                duration: 1
            }}
            exit={{
                scale: 0.5,
                opacity: 0,
            }}
            
            >

                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <div className="col-span-1  flex justify-center mt-10">

                        <div className="grid grid-rows-4  p-5 rounded-xl bg-[#ffffff]">
                            <h1 className="text-4xl text-left font-semibold">Form2</h1>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="do something" /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="do something" /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="do something" /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="do something" /></div>

                        </div>
                    </div>
                    <div className="col-span-1 hidden md:block">
                        <img src={Banking_image} />
                    </div>
                </div>

            </motion.div></AnimatePresence>)
        }
        {
            num == 3 && (<AnimatePresence>
                <motion.div className="mb-20"
            initial={{
                scale: 0.5,
                opacity: 0
            }}
            animate={{
                scale: 1, 
                opacity: 1
            }}
            transition={{
                delay: 0.5,
                duration: 1
            }}
            exit={{
                scale: 0.5,
                opacity: 0,
            }}
            
            >

                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <div className="col-span-1  flex justify-center mt-10">

                        <div className="grid grid-rows-4  p-5 rounded-xl bg-[#ffffff]">
                            <h1 className="text-4xl text-left font-semibold">Form3</h1>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="do something" /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="do something" /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="do something" /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="do something" /></div>

                        </div>
                    </div>
                    <div className="col-span-1 hidden md:block">
                        <img src={Banking_image} />
                    </div>
                </div>

            </motion.div></AnimatePresence>)
        }
        {
            num == 4 && (<AnimatePresence>
                <motion.div className="mb-20"
            initial={{
                scale: 0.5,
                opacity: 0
            }}
            animate={{
                scale: 1, 
                opacity: 1
            }}
            transition={{
                delay: 0.5,
                duration: 1
            }}
            exit={{
                scale: 0.5,
                opacity: 0,
            }}
            
            >

                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <div className="col-span-1  flex justify-center mt-10">

                        <div className="grid grid-rows-4  p-5 rounded-xl bg-[#ffffff]">
                            <h1 className="text-4xl text-left font-semibold">Form4</h1>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="do something" /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="do something" /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="do something" /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="do something" /></div>

                        </div>
                    </div>
                    <div className="col-span-1 hidden md:block">
                        <img src={Banking_image} />
                    </div>
                </div>

            </motion.div></AnimatePresence>)
        }


        <div className="grid grid-cols-2">

            {
                num > 1 ? (
                    <div className="col-span-1 flex justify-center p-3">
                        <motion.button className=" p-2 md:w-[40%] lg:w-[30%] hover:bg-[#4b1c77] w-[50%] rounded-md bg-[#792ebe] text-white uppercase sm:text-md text-sm md:text-xl" whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.25 },
                        }} 
                        onClick={()=>{
                            setnum(num-1)
                        }}
                        >previous</motion.button>
                    </div>) : 
                    (<div className="col-span-1 flex justify-center p-3">
                    
                </div>)
            }


            {
                num < 4 && (
                    <div className="col-span-1 flex justify-center p-3">
                        <motion.button className=" p-2 md:w-[40%] lg:w-[30%] hover:bg-[#4b1c77] w-[50%] rounded-md bg-[#792ebe] text-white uppercase sm:text-md text-sm md:text-xl" whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.25 },
                        }} 
                        onClick={()=>{
                            setnum(num+1)
                        }}
                        >next</motion.button>
                    </div>)
            }
        </div>

            {
                num==4 && 

        <div className="flex justify-center p-3">
            <motion.button className=" p-2 md:w-[20%] lg:w-[10%] hover:bg-[#4b1c77] w-[20%] rounded-md bg-[#792ebe] text-white uppercase sm:text-md text-sm md:text-xl" whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.25 },
                        }} 
                        >submit</motion.button>
        </div>
            }




    </div>
}