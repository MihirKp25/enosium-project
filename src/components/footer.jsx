import { motion } from "framer-motion"


export const Footer=()=>{
    return <div className="w-[100%] h-60  mb-[0%] grid grid-cols-8 bg-gradient-to-l from-[#792ebe] to-[#2e0969] text-white"> 
        <div className="col-span-3 grid grid-rows-2">
            <div className="row-span-1  text-left">
                <h1 className="text-xl ml-[3%] mt-[2%] font-bold">About us</h1>
                <p className="ml-[3%] mt-[2%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet perspiciatis architecto et illo ea vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae autem hic doloremque, id suscipit!</p>
            </div>
            <div className="row-span-1  grid grid-rows-3">
            <h1 className="text-xl ml-[3%] mt-[2%] text-left row-span-1 font-bold">Team members</h1>
            <div className="text-left ml-[3%] mt-[2%] row-span-2 grid grid-cols-2">

            <div className="col-span-1">
                <p>Madhav kadam</p>
                <p>Gaurav Mahenderakar</p>
            </div>
           <div className="col-span-1">
           <p>Mihir Patel</p>
                <p>Aditi Ganvir</p>
           </div>
            </div>
            </div>
        </div>
        <div className="col-span-2 text-left">
        <h1 className="text-xl ml-[3%] mt-[3%] font-bold">Our Services</h1>
                <p className="ml-[3%] mt-[3%] mr-[3%]">Lorem ipsum dolor sit amet, cerspiciatis architecto et illo ea vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae autem hic doloremque, id suscipit!</p>
        </div>
        <div className="col-span-3 grid grid-rows-4 ">
    <div className="row-span-1  ml-[3%] mt-[2%] text-left text-xl font-bold"> Contact Us</div>
    
    
    {/* //input */}

    <div className="row-span-1  text-left ">
        <input placeholder="Enter your email Address" className="bg-[#e2e3e4] text-left rounded-md  w-[90%] h-[90%] ml-[3%] pl-[2%] text-black"></input>
    </div>
    <div className="row-span-1 text-left">
        <motion.input type="submit" className="text-center border-solid rounded-md  w-[90%] h-[90%] ml-[3%] pl-[2%] bg-[#577de3] hover:bg-[#425fad] text-xl text-white font-semibold" value="Send" 
        whileHover={{
            scale: 1.03,
            transition: { duration: 0.25 },
        }}
        ></motion.input>

    </div>
    <div className="row-span-1 "></div>

        </div>
    </div>
}