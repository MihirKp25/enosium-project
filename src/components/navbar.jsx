import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

export const Navbar=()=>{
    const [sidebar, setSidebar]= useState(false);
    return(
        <div className="Container">
            <div className={sidebar?"sidebar2":"sidebar"}>
        <button onClick={()=>{
            setSidebar(!sidebar)
        }}><i className={`fa-solid ${sidebar? "fa-xmark" : "fa-bars"}`}></i></button></div>
        <div className="nav-logo">
        <a>Website</a>
        </div>
        
        <div className={sidebar? "container1" : "display-none"}>
        <div className="nav-components">
            <ul>
                <li><a href="#about">Home</a></li>
                <li><a href="#home">Dashboard</a></li>
                <li><a href="#skills">About</a></li>
                
            </ul>

        </div>
        
        </div>
        <div className={sidebar?"nav-login2":"nav-login"}>
            <button >Sign In</button>
        </div>
        
    </div>
    )
}