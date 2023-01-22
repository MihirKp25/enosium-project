import { useEffect, useState } from "react";
import { Line, Circle } from "rc-progress";



import "react-circular-progressbar/dist/styles.css";

export const Percentage=()=>{
    // const [percentage, setpercentage]=useState("");
   let percentage="";
    const [progressval, setprogressval]=useState(0);
    const [progressendval, setprogressendval]=useState(65);
    const speed=200;
    let val = 0;
    let check=0;

        useEffect(()=>{
                let progress=setTimeout(()=>{
                    // setpercentage(progressendval);
                    
                  //  console.log(percentage);
                    
                }, 1000)

                
        }, [])
    
        
        // progress();

    return (
    <div>

    
    <div className="w-[400px] h-[400px]">
        <div className="absolute border-2 border-black w-[400px] h-[400px] z-99">

        <Circle
        percent={percentage}
        strokeColor="blue"
        strokeWidth={4}
        trailColor="lightblue"
        trailWidth={4}
        strokeLinecap="round"
        />
        </div>
        <p className=" flex justify-center flex-col text-center text-8xl h-full text-[#7f4ac0] border-2 border-[#c81d1d] ">
            {percentage}%
        </p>
        <div>
        {{percentage}}
        </div>
        
    

    </div>
   
    </div>
    );
}