import { useState } from "react"
import Banking_image from "../images/banking_image.png"
import { motion, AnimatePresence } from "framer-motion";
import { Line, Circle } from "rc-progress";
import { ButtonToolbar } from "react-bootstrap";
import Personal_info_1 from "../images/personalinfo.png"
import bankingimage2 from "../images/bankingimage2good.png"
import Personal_info_2 from "../images/personalinfo2good.png"
import loan from "../images/loan.png"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Appcontext } from "../App";
import { useContext } from "react";
import { useEffect } from "react";

export const Forminput = () => {

    const [num, setnum] = useState(1);
    const { dataInput, setDataInput, finalpercent, setFinalpercent } = useContext(Appcontext);
    
    return <div className="mb-[8%]">
        <div className="w-[90%] flex justify-center align-middle pl-[10%] ">

            <Line
                percent={(100 / 5) * num}
                strokeColor="#2e0969"
                strokeWidth={1}
                trailColor="#dbb4ff"
                trailWidth={1}
                strokeLinecap="round"
            > </Line>
        </div>

        <form>

                {/* -------------------------form 1------------------------------------------- */}
            {
               num===1 && (
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
                            // style={{ display: num == 1 ? "block" : "none" }}
                        >

                            <div className="grid grid-cols-1 md:grid-cols-2 ">
                                <div className="col-span-1  flex justify-center mt-10">

                                    <div className="grid grid-rows-4  p-5 rounded-xl bg-[#ffffff] shadow-xl hover:shadow-md hover:shadow-[#dbc4f1] shadow-[#dbc4f1]">


                                        <h1 className="text-4xl text-left font-semibold uppercase">personal information-i</h1>


                                        <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">Age</label><input type="number" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Enter your current age" /></div>
                                       
                                        <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500"> do you have telephone no. ?</label>
                                        
                                        <select onChange={(e) => {
                                            setDataInput({
                                                ...dataInput,
                                                check_telephone: e.target.value
                                            })
                                        }} defaultChecked="" 
                                        value={dataInput.check_telephone} 
                                        className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" 
                                        placeholder="Personal phone no." >
                                            <option value="" disabled selected><span className="text-[#4e4c4c]">Choose from below options</span></option>
                                            <option value="1">yes</option>
                                            <option value="0">no</option>
                                        </select>

                                        </div>

                                        <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">type of job you have done</label>
                                        <select type="text" 
                                        className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" 
                                        onChange={(e)=>{
                                            setDataInput({
                                                ...dataInput,
                                                type_of_job: e.target.value
                                            })
                                        }}
                                        value={dataInput.type_of_job}
                                        >
                                            <option value="" disabled selected><p className="text-[#4e4c4c]">Choose the type of job you have performed</p></option>
                                            <option value="2">skilled employee / official</option>
                                            <option value="-1">unskilled - resident</option>
                                            <option value="4">management/ self-employed/highly qualified employee/ officer</option>
                                            <option value="-2">unemployed/ unskilled - non-resident</option>
                                        </select></div>
                                        <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">working abroad</label><select type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Do you work out of India ?" >
                                            <option value="" disabled selected><span className="text-[#4e4c4c]">Do you work out of India ?</span></option>
                                            <option>yes</option>
                                            <option>no</option>
                                        </select></div>

                                    </div>
                                </div>
                                <div className="col-span-1 hidden md:block">
                                    <img src={Personal_info_1} />
                                </div>
                            </div>

                        </motion.div></AnimatePresence>)
            }
            {
                num===2 && (
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
                            style={{ display: num == 2 ? "block" : "none" }}
                        >

                            <div className="grid grid-cols-1 md:grid-cols-2 ">
                                <div className="col-span-1  flex justify-center mt-10">

                                    <div className="grid grid-rows-5  p-5 rounded-xl bg-[#ffffff] shadow-xl hover:shadow-md hover:shadow-[#9f9ff3] shadow-[#9f9ff3]">
                                        <h1 className="text-4xl text-left font-semibold uppercase">personal information-ii</h1>
                                        <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">marital status</label><select type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#2e76be] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Your marital status" 
                                        onChange={(e)=>{
                                            setDataInput({
                                                ...dataInput,
                                                marital_status: e.target.value
                                            })
                                        }}
                                        value={dataInput.marital_status}
                                        >
                                            <option value="" disabled selected><span className="text-[#4e4c4c]">Your marital status</span></option>
                                            <option value="-4">male and married/widowed</option>
                                            <option value="0">male and single</option>
                                            <option value="-1">female and divorced/seperated/married</option>
                                            <option value="-2">male and divorced/seperated</option>
                                        </select></div>
                                        <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">employement time</label><select type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#2e76be] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Number of years of employement" >
                                            <option value="" disabled selected><span className="text-[#4e4c4c]">Number of years of employement</span></option>
                                            <option>between 1 and 4 years</option>
                                            <option>greater than 4 years</option>
                                            <option>less than a year</option>
                                            <option>unemployed</option>
                                        </select></div>
                                        <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">owned property</label><select type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#2e76be] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Do you own any property?" 
                                        onChange={(e)=>{
                                            setDataInput({
                                                ...dataInput,
                                                owned_property: e.target.value
                                            })
                                        }}
                                        value={dataInput.owned_property}
                                        >
                                            <option value="" disabled selected><span className="text-[#4e4c4c]">Do you own any property?</span></option>
                                            <option value="1">Real Estate</option>
                                            <option value="1">car or other property</option>
                                            <option value="3">building society savings agreement/life insurance</option>
                                            <option value="-1">No property</option>
                                        </select></div>
                                        <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">type of housing</label><select type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#2e76be] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Type of housing" >
                                            <option value="" disabled selected><span className="text-[#4e4c4c]">Type of housing</span></option>
                                            <option>own</option>
                                            <option>for free</option>
                                            <option>rent</option>
                                        </select></div>
                                        <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">current address stay</label><select type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#2e76be] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Number of years you stayed in your current address" >
                                            <option value="" disabled selected><span className="text-[#4e4c4c]">Number of years you stayed in your current address</span></option>

                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select></div>

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

                                <div className="grid grid-rows-5  p-5 rounded-xl bg-[#ffffff] shadow-xl hover:shadow-md hover:shadow-[#dbf39f] shadow-[#dff1b0]">
                                    <h1 className="text-4xl text-left font-semibold uppercase">loan details</h1>
                                    <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">purpose of taking loan</label><select type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#bebe2e] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Write your purpose of taking loan" >
                                        <option value="" disabled selected><span className="text-[#4e4c4c]">Choose your purpose of taking loan</span></option>
                                        <option>New Car Purchase</option>
                                        <option>Purchase of radio/television</option>
                                        <option>Purchase of domestic appliances</option>
                                        <option>Education Loan</option>
                                        <option>Loan for business establishment</option>
                                        <option>Purchase of furniture/equipment</option>
                                        <option>Loan for retraining</option>
                                        <option>Other repairs</option>
                                        <option>Old Car Repair</option>
                                    </select></div>
                                    <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">loan amount</label><select type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#bebe2e] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Loan amount taken" 
                                    onChange={(e)=>{
                                        setDataInput({
                                            ...dataInput,
                                            loan_amt: e.target.value
                                        })
                                    }}
                                    value={dataInput.loan_amt}
                                    >
                                        <option value="" disabled selected><span className="text-[#4e4c4c]">Loan amount to be taken</span></option>
                                        <option value="2">0-750</option>
                                        <option value="3">750-1000</option>
                                        <option value="4">1000-1300</option>
                                        <option value="6">1300-3000</option>
                                        <option value="8">3000-10000</option>
                                        <option value="10">{'>'}10000</option>
                                    </select></div>
                                    <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">gaurantor or debtor</label><select type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#bebe2e] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Choose from below fields according to you" 
                                    onChange={(e)=>{
                                        setDataInput({
                                            ...dataInput,
                                            gaurantor: e.target.value
                                        })
                                    }}
                                    value={dataInput.gaurantor}
                                    >
                                        <option value="" disabled selected><span className="text-[#4e4c4c]">Choose from below fields according to you</span></option>
                                        <option value="2">Gaurantor</option>
                                        <option value="1">co-applicant</option>
                                        <option value="0">none</option>

                                    </select></div>
                                    <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">time duration</label><input type="number" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#bebe2e] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Time duration for loan" /></div>
                                    <div className="row-span-1 w-[400px] mb-3"><label className="font-semibold uppercase text-gray-500">maintenance provider</label><select type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#bebe2e] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Number of people who will provide maintenance" 
                                    onChange={(e)=>{
                                        setDataInput({
                                            ...dataInput,
                                            maintenance_provider: e.target.value
                                        })
                                    }}
                                    value={dataInput.maintenance_provider}
                                    >
                                        <option value="" disabled selected><span className="text-[#4e4c4c]">Number of people who will provide maintenance</span></option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select></div>

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

                                <div className="grid grid-rows-4  p-5 rounded-xl bg-[#ffffff] shadow-xl hover:shadow-md hover:shadow-[#9f9ff3] shadow-[#9f9ff3]">
                                    <h1 className="text-4xl text-left font-semibold uppercase">banking details-i</h1>
                                    <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">current account balance</label><select type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#1f1fbd] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Amount in current account" 
                                    onChange={(e)=>{
                                        setDataInput({
                                            ...dataInput,
                                            amt_in_cuur_acct: e.target.value
                                        })
                                    }}
                                    value={dataInput.amt_in_cuur_acct}
                                    >
                                        <option value="" disabled selected><span className="text-[#4e4c4c]">Amount in current account</span></option>
                                        <option value="1">between 0 and 200</option>
                                        <option value="0">less than 0</option>
                                        <option value="-1">no current account</option>
                                        <option value="2">greater than 200</option>
                                    </select></div>
                                    <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">saving account balance</label><select type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#1f1fbd] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Amount in savings account" 
                                    onChange={(e)=>{
                                        setDataInput({
                                            ...dataInput,
                                            ant_in_sav_acct: e.target.value
                                        })
                                    }}
                                    value={dataInput.ant_in_sav_acct}
                                    >
                                        <option value="" disabled selected><span className="text-[#4e4c4c]">Amount in savings account</span></option>
                                        <option value="1">less than 100</option>
                                        <option value="3">between 500 and 1000</option>
                                        <option value="2">between 100 and 500</option>
                                        <option value="4">no savings account</option>
                                        <option value="-1">greater than 1000</option>

                                    </select></div>
                                    <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">installement percentage</label><select type="number" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#1f1fbd] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Percentage of income paid as installement" 
                                    onChange={(e)=>{
                                        setDataInput({
                                            ...dataInput,
                                            per_of_income: e.target.value
                                        })
                                    }}
                                    value={dataInput.per_of_income}
                                    >
                                        <option value="" disabled selected><span className="text-[#4e4c4c]">Percentage of income paid as installement</span></option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                    </select></div>
                                    <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">loan history</label><select type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#1f1fbd] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Your loan history" 
                                    onChange={(e)=>{
                                        setDataInput({
                                            ...dataInput,
                                            loan_history: e.target.value
                                        })
                                    }}
                                    value={dataInput.loan_history}
                                    >
                                        <option value="" disabled selected><span className="text-[#4e4c4c]">Your loan history</span></option>
                                        <option value="-2">critical account/other loans existing (not at this bank)</option>
                                        <option value="0">existing loans paid back duly till now</option>
                                        <option value="0">all loans at this bank paid back duly</option>
                                        <option value="2">delay in paying off loans in the past</option>
                                        <option value="4">no loans taken/all loans paid back duly</option>
                                    </select></div>

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

                                <div className="grid grid-rows-3  p-5 rounded-xl bg-[#ffffff] shadow-xl hover:shadow-md hover:shadow-[#9f9ff3] shadow-[#9f9ff3]">
                                    <h1 className="text-4xl text-left font-semibold uppercase">banking details-ii</h1>
                                    <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">number of loans taken</label><select type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Number of loans taken from current bank" 
                                    onChange={(e)=>{
                                        setDataInput({
                                            ...dataInput,
                                            number_of_loans_taken: e.target.value
                                        })
                                    }}
                                    value={dataInput.number_of_loans_taken}
                                    >
                                        <option value="" disabled selected><span className="text-[#4e4c4c]">Number of loans taken from current bank</span></option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option></select>
                                    </div>
                                    <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">other loan plans</label><select type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Specify your other plan of loans " 
                                    onChange={(e)=>{
                                        setDataInput({
                                            ...dataInput,
                                            other_loan_plan: e.target.value
                                        })
                                    }}
                                    value={dataInput.other_loan_plan}
                                    >
                                        <option value="" disabled selected><span className="text-[#4e4c4c]">Specify your other plan of loans</span></option>

                                        <option value="1">none</option>
                                        <option value="-1">stores</option>
                                        <option value="0">bank</option>
                                    </select></div>
                                    {/* <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">Loan defaulted or not</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Choose from the below fields" /></div> */}
                                    {/* <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">loan history</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-[#792ebe] hover:shadow-md hover:shadow-[#dbc4f1]" placeholder="Your loan history" /></div> */}

                                </div>
                            </div>
                            <div className="col-span-1 hidden md:block">
                                <img src={bankingimage2} />
                            </div>
                        </div>

                    </motion.div></AnimatePresence>)
            }
        </form>

        <div className="grid grid-cols-2">

            {
                num > 1 ? (
                    <div className="col-span-1 flex justify-center p-3">
                        <motion.button className=" p-2 md:w-[40%] lg:w-[30%] hover:bg-[#4b1c77] w-[50%] rounded-md bg-[#792ebe] text-white uppercase sm:text-md text-sm md:text-xl" whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.25 },
                        }}
                            onClick={() => {
                                setnum(num - 1)
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
                            onClick={() => {
                                setnum(num + 1)
                            }}
                        >next</motion.button>
                    </div>)
            }
        </div>

        {
            num == 5 &&

            <div className="flex justify-center p-3">
                <motion.button className=" p-2 md:w-[20%] lg:w-[10%] hover:bg-[#4b1c77] w-[20%] rounded-md bg-[#792ebe] text-white uppercase sm:text-md text-sm md:text-xl" whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25 },
                }}

                onClick={async ()=>{
                    console.log(dataInput);
                    try{
                        const response = await fetch('http://127.0.0.1:5000/predict', {
                            method: 'post',
                            headers: {
                                'Content-Type' : 'application/json'
                                },
                            body: JSON.stringify(dataInput)
                            
                        }).then((res)=>res.text())
                        .then(text=>{
                            console.log(text)
                            setFinalpercent(text)
                        })
                        // console.log('Completed!', response);
                    }
                    catch(err) {
                        console.error(`Error: ${err}`);
                      }

                }}
                >submit</motion.button>
            </div>
        }




    </div>
}