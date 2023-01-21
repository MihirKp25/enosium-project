import { useState } from "react"
import Banking_image from "../images/banking_image.png"
import { motion, AnimatePresence } from "framer-motion";
import { Line, Circle } from "rc-progress";
import { ButtonToolbar } from "react-bootstrap";
import Personal_info_1 from "../images/personalinfo.png"
import bankingimage2 from "../images/bankingimage2good.png"
import Personal_info_2 from "../images/personalinfo2good.png"
import loan from "../images/loan.png"

export const Forminput = () => {

    const [num, setnum] = useState(1);
    return <div className="mb-[8%]">
        <div className="w-[90%] flex justify-center align-middle pl-[10%]">
            
        <Line
        percent={(100/5)*num}
        strokeColor="#2e0969"
        strokeWidth={1}
        trailColor="#dbb4ff"
        trailWidth={1}
        strokeLinecap="round"
        > </Line>
        </div>
         {/* <div className="grid grid-cols-2"> */}

{/* {
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
    num < 5 && (
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
    num==5 && 

<div className="flex justify-center p-3">
<motion.button className=" p-2 md:w-[20%] lg:w-[10%] hover:bg-[#4b1c77] w-[20%] rounded-md bg-[#792ebe] text-white uppercase sm:text-md text-sm md:text-xl" whileHover={{
                scale: 1.1,
                transition: { duration: 0.25 },
            }} 
            >submit</motion.button>
</div>
} */}

        
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
                            <h1 className="text-4xl text-left font-semibold uppercase">personal information-i</h1>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">Age</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Enter your current age" /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">telephone no.</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Personal phone no." /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">type of job you have done</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Choose the type of job you have performed" /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">working abroad</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Do you work out of India ?" /></div>

                        </div>
                    </div>
                    <div className="col-span-1 hidden md:block">
                        <img src={Personal_info_1} />
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

                        <div className="grid grid-rows-5  p-5 rounded-xl bg-[#ffffff]">
                            <h1 className="text-4xl text-left font-semibold uppercase">personal information-ii</h1>
                            <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">marital status</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Your marital status" /></div>
                            <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">employement time</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Number of years of employement" /></div>
                            <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">owned property</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Do you own any property?" /></div>
                            <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">type of housing</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Type of housing" /></div>
                            <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">current address stay</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Number of years you stayed in your current address" /></div>

                        </div>
                    </div>
                    <div className="col-span-1 hidden md:flex justify-center">
                        <img src={Personal_info_2} />
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

                        <div className="grid grid-rows-5  p-5 rounded-xl bg-[#ffffff]">
                            <h1 className="text-4xl text-left font-semibold uppercase">loan details</h1>
                            <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">purpose of taking loan</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Write your purpose of taking loan" /></div>
                            <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">loan amount</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Loan amount taken" /></div>
                            <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">gaurantor or debtor</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Choose from below fields according to you" /></div>
                            <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">time duration</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Time duration for loan" /></div>
                            <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">maintenance provider</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Number of people who will provide maintenance" /></div>

                        </div>
                    </div>
                    <div className="col-span-1 hidden md:block">
                        <img src={loan} />
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
                            <h1 className="text-4xl text-left font-semibold uppercase">banking deatils-i</h1>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">current account balance</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Amount in current account" /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">saving account balance</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Amount in savings account" /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">installement percentage</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Percentage of income paid as installement" /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">loan history</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Your loan history" /></div>

                        </div>
                    </div>
                    <div className="col-span-1 hidden md:block">
                        <img src={Banking_image} />
                    </div>
                </div>

            </motion.div></AnimatePresence>)
        }
        {
            num == 5 && (<AnimatePresence>
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

                        <div className="grid grid-rows-3  p-5 rounded-xl bg-[#ffffff]">
                            <h1 className="text-4xl text-left font-semibold uppercase">banking deatils-ii</h1>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">number of loans taken</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Number of loans taken from current bank" /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">other loan plans</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Specify your other plan of loans " /></div>
                            <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">Loan defaulted or not</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Choose from the below fields" /></div>
                            {/* <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">loan history</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Your loan history" /></div> */}

                        </div>
                    </div>
                    <div className="col-span-1 hidden md:block">
                        <img src={bankingimage2} />
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
                num < 5 && (
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
                num==5 && 

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