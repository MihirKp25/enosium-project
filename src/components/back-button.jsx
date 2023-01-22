import { Link } from "react-router-dom"

export const Backbutton=()=>{
    return(
        <div style={{width: "100%", display:"flex", justifyContent: "flex-end"}}>
        <Link to="/"><button className="back-button">
            <div class="arrow-wrapper">
        <div class="arrow"></div>

    </div>
    Home
    
</button>
</Link>
</div>
    )
}