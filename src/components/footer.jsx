import { motion } from "framer-motion"


export const Footer=()=>{
    return <div id="footercontact" className="w-[100%] lg:h-72 md:h-[600px] h-[700px]  mb-[0%] grid md:grid-cols-5 grid-cols-3  lg:grid-cols-8 bg-gradient-to-l from-[#792ebe] to-[#2e0969] text-white px-6 py-6"> 
        <div className="col-span-3 md:col-span-3 grid grid-rows-2">
            <div className="row-span-1  text-left">
                <h1 className="text-xl ml-[3%] mt-[2%] font-bold">About us</h1>
                <p className="ml-[3%] mt-[2%]">We are team of Web developers and AI/ML developers from IIT Indore. We are tech enthusiast always finding solution of various problems through tech. </p>
            </div>
            <div className="row-span-1  grid grid-rows-3">
            <h1 className="text-xl ml-[3%] mt-[2%] text-left row-span-1 font-bold">Team members</h1>
            <div className="text-left ml-[3%] mt-[2%] row-span-2 grid grid-cols-2">

            <div className="col-span-1">
            <a href="https://github.com/madhaviit" target="_blank">Madhav kadam</a><br/>
            <a href="https://github.com/gauravmahendraker" target="_blank">Gaurav Mahenderakar</a>
            </div>
           <div className="col-span-1">
           <a href="https://github.com/MihirKp25" target="_blank">Mihir Patel</a><br/>
           <a href="https://github.com/aditiganvir28" target="_blank">Aditi Ganvir</a>
           </div>
            </div>
            </div>
        </div>
        <div className="col-span-3 text-left">
        <h1 className="text-xl ml-[3%] mt-[3%] font-bold">Our Services</h1>
                <p className="ml-[3%] mt-[3%] mr-[3%]">Our website provide prediction about loan payment through taking various inputs from users and also provide interest rate of different banks</p>
        </div>
        <div className="col-span-2 grid grid-rows-4 ">
    <div className="row-span-1  ml-[3%] mt-[2%] text-left text-xl font-bold"> Contact Us</div>
    
    
    {/* //input */}

    <div className="row-span-1  text-left pl-4">
        9898989898
        <br></br>
        <a href="mailto:cse210001050@iiti.ac.in" className="hover:text-sky-300">cse210001050@iiti.ac.in</a>
        {/* <input placeholder="Enter your email Address" className="bg-[#e2e3e4] text-left rounded-md  w-[90%] h-[90%] ml-[3%] mb-[2%] pl-[2%] text-black"></input> */}
    </div>
    {/* <div className="row-span-1 text-left">
        <motion.input type="submit" className="text-center border-solid rounded-md  w-[90%] h-[90%] ml-[3%] pl-[2%] bg-[#577de3] hover:bg-[#425fad] text-xl text-white font-semibold" value="Send" 
        whileHover={{
            scale: 1.03,
            transition: { duration: 0.25 },
        }}
        ></motion.input>

    </div> */}
    <div className="row-span-1 text-left footer-btn pl-4 ">
        
    {/* <button>
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button> */}
</div>
    <div className="row-span-1 "></div>

        </div>
    </div>
}