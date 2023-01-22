import { useEffect, useState } from "react";
import { Appcontext } from "../App";
import { useContext } from "react";
import { Line, Circle } from "rc-progress";



import "react-circular-progressbar/dist/styles.css";

export const Percentage=()=>{
    const [percentage, setpercentage]=useState("");
//    let percentage="";
    const { dataInput, setDataInput, finalpercent, setFinalpercent } = useContext(Appcontext);
    const speed=200;
    let val = 0;
    let check=0;

        useEffect(()=>{
                let progress=setTimeout(()=>{
                    setpercentage(finalpercent);
                    
                  //  console.log(percentage);
                    
                }, 1000)

                
        }, [])
    
        
        // progress();

    return (
    <div className=" pt-[80px] pb-[80px] sm:w-[500px] w-[300px] mx-auto mb-[90px] bg-[#f0f0f0] rounded-xl shadow-2xl">

    
    <div className="w-[200px] h-[200px] flex justify-center align-middle mx-auto">
        <div className="absolute  w-[200px] h-[200px] z-99">

        <Circle
        percent={percentage}
        strokeColor="blue"
        strokeWidth={4}
        trailColor="lightblue"
        trailWidth={4}
        strokeLinecap="round"
        />
        </div>
        <p className=" flex justify-center flex-col text-center text-6xl h-full text-[#7f4ac0] ">
            {percentage}%
        </p>
      
        
    

    </div>
    <div className="text-xl text-[#3d289d] p-4 flex justify-center ">
        {
            percentage>=50 && percentage<=70 && (
                <p className="text-[#ddba3b] font-semibold">There are chances that you'll default. 😊</p>
            )
        }
        {
            percentage<=50 && (
                <p className="text-[#c32929] font-semibold">There are very less chances that you'll default. 😒</p>
            )
        }
        {
            percentage>=70 && percentage<=90 && (
                <p className="text-[#42e1ec] font-semibold">There are preety good chances that you'll default. 😁</p>
            )
        }
        {
            percentage>=90 && percentage<=100 && (
                <p className="text-[#2cba44] font-semibold">There are high chances that you'll default. 🤩</p>
            )
        }
    </div>
   
    </div>
    );
}