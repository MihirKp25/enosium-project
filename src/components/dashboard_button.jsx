import { motion } from "framer-motion"


export const DashBoardDiv=()=>{
    return <div className="h-[300px] grid md:grid-cols-3 grid-rows-1 my-[10%]">
        <div className="md:col-span-1 row-span-1 grid grid-rows-3">
            <div className="row-span-1"></div>
            {/* <motion.button className="h-[70%] w-[35%] my-auto rounded-xl border-[#2e0969] bg-[#2e0969] flex text-center place-content-center mx-auto row-span-1 items-center text-2xl text-white hover:bg-[#5815c2] hover:border-[#5815c2]"
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.25 },
            }}
            >
                Get Started
            </motion.button> */}
            <button class="cta">
  <span>Get Started</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
            <div className="row-span-1"></div>
        </div>
        <div className="md:col-span-2 row-span-1 px-auto flex align-middle my-auto lg:text-3xl md:text-2xl text:3xl sm:text-xl text-[#2e0969] md:mr-44 text-center font-semibold md:pl-10 ml-20" >
        Take the first step towards financial freedom by using our loan prediction website to get a personalized loan plan
        </div>
    </div>
}