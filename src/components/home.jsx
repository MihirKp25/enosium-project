import { DashBoardDiv } from "./dashboard_button"
import { Footer } from "./footer"
import { Imageslider } from "./imageslider"
import { Navbar } from "./navbar"
import NewsSlider from "./newsSlider"

export const Home=()=>{
    return <div>
        <Navbar/>
        <Imageslider/>
        <DashBoardDiv/>
        <NewsSlider/>
        <Footer/>
    </div>
}