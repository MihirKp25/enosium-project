import { useEffect, useState } from "react"
import data from "../helpers/db.json"
import { motion } from "framer-motion";

export const Bar_graph=()=>{
    const items= data;

    return(
        <div className="intrest-rates-bar-graph">
          <h1>Intrest Rates on Car Loan</h1>
        <div class="bar-graph bar-graph-vertical bar-graph-two">
        <div class="bar-one bar-container">
        <div className="bank-names">
              {
                items.map((item)=>{
                  return(
                    <div class="year"><p className="names
                    ">{item.bankName}</p></div>
                  )
                })
              }
            
            </div>
          <div className="percentage-bar">
            {
                items.map((item)=>{
                    return(
                    
                    <motion.div  initial={{width:0, height: "5%"}} animate={{width:item.intrest_rate*40, height:"5%"}} transition={{duration: 2, delay:0}} class="bar" data-percentage={`${item.intrest_rate}%`} style={{height:"5%"}}></motion.div>
                    
                    )
                })
            }
            </div>
           
            </div>
</div>
        </div>
    )
}