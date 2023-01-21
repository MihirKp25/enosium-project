
import { Bar_graph } from "./bar_graph"
import { Footer } from "./footer"
import { Forminput } from "./form"
import { Navbar } from "./navbar"

export const Dashboard=()=>{
    return(
        <>
        <h1 className="text-center text-6xl font-bold p-5 text-[#d03ac1]">Welcome to dashboard</h1>
        <Forminput/>
        
        <Bar_graph/>
        <Footer/>
        </>
    )
}