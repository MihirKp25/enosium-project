import { useState } from "react"
import Banking_image from "../images/banking_image.png"

export const Forminput = ()=>{
    
    const [num, setnum] = useState(1);
    return <div>
        {
            num==2 && (<div className="mb-20">
                
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className="col-span-1  flex justify-center mt-10">
                            
                            <div className="grid grid-rows-4  p-5 rounded-xl bg-[#ffffff]">
                            <h1 className="text-4xl text-left font-semibold">Form2</h1>
                                <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-red-600" placeholder="do something"/></div>
                                <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%] focus:border-[#f0f0f0] py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed]" placeholder="do something"/></div>
                                <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%] focus:border-[#f0f0f0] py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed]" placeholder="do something"/></div>
                                <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%] focus:border-[#f0f0f0] py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed]" placeholder="do something"/></div>

                            {/* <div className="w-full row-span-1"><input type="text"/></div>
                            <div className="w-full row-span-1"><input type="text"/></div>
                            <div className="w-full row-span-1"><input type="text"/></div>
                            <div className="w-full row-span-1"><input type="text"/></div> */}
                            </div>
                        </div>
                        <div className="col-span-1 hidden md:block">
                            <img src={Banking_image}/>
                        </div>
                </div>

                </div>)
        }
        {
            num==1 && (<div className="mb-20">
                
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className="col-span-1  flex justify-center mt-10">
                            
                            <div className="grid grid-rows-4  p-5 rounded-xl bg-[#ffffff]">
                            <h1 className="text-4xl text-left font-semibold">Form1</h1>
                                <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%]  py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed] outline-red-600" placeholder="do something"/></div>
                                <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%] focus:border-[#f0f0f0] py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed]" placeholder="do something"/></div>
                                <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%] focus:border-[#f0f0f0] py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed]" placeholder="do something"/></div>
                                <div className="row-span-1 w-[400px]"><label className="font-semibold uppercase text-gray-500">name</label><input type="text" className="w-[100%] focus:border-[#f0f0f0] py-3 bg-[#ffffff] border-b-2 px-1 border-[#ededed]" placeholder="do something"/></div>

                            {/* <div className="w-full row-span-1"><input type="text"/></div>
                            <div className="w-full row-span-1"><input type="text"/></div>
                            <div className="w-full row-span-1"><input type="text"/></div>
                            <div className="w-full row-span-1"><input type="text"/></div> */}
                            </div>
                        </div>
                        <div className="col-span-1 hidden md:block">
                            <img src={Banking_image}/>
                        </div>
                </div>

                </div>)
        }
    </div>
}