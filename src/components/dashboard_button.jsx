import { motion } from "framer-motion"


export const DashBoardDiv=()=>{
    return <div className="h-[300px] grid grid-cols-2 ">
        <div className="col-span-1 grid grid-rows-3">
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
        <div className="col-span-1 items-center mx-auto my-auto text-left text-lg text-[#2e0969]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad in aliquid explicabo, ducimus necessitatibus rerum ipsa doloribus cumque ipsum aperiam asperiores animi natus incidunt.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum doloribus illum, optio facere numquam magnam rem enim? Dolorum molestiae soluta, quae doloremque ducimus vel.
        </div>
    </div>
}