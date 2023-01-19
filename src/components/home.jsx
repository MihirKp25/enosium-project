import { DashBoardDiv } from "./dashboard_button"
import { Footer } from "./footer"
import { Forminput } from "./form"
import { Imageslider } from "./imageslider"
import { Info_website } from "./info"
import { Info_website1 } from "./info1"
import { Info_website2 } from "./info2"
import { Navbar } from "./navbar"
import NewsSlider from "./newsSlider"
import { Percentage } from "./percenatgemeter"

export const Home=()=>{
    return <div id="home">
        <Navbar/>
        <Imageslider/>
        <DashBoardDiv/>
        {/* <NewsSlider/> */}
        <Info_website/>
        <Info_website1/>
        <Info_website2/>
       <Forminput/>
        {/* <Percentage/> */}
        <Footer/>
    </div>
}