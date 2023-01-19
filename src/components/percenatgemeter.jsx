import { useEffect, useState } from "react";

export const Percentage=()=>{
    const [percentage, setpercentage]=useState(0);

    let progressval=0;
    let progressendval=65;
    let speed=50;
    
    // useEffect(()=>{
    //     let progress=setInterval(()=>{
    //     progressval++;
    //      setpercentage(progressval);
    //      console.log(progressval);
    //     if(progressval===progressendval)
    //     {
    //         clearInterval(progress)
    //     }
    // }, speed)
    // }, [])

    return <div className="h-[400px] w-[400px] bg-[#cc3e3e] grid place-items-center relative">
            <div className="h-[250px] w-[250px] rounded-[50%] bg-white grid place-items-center absolute">
                <div className="h-[85%] w-[85%] rounded-[50%] bg-[#cc3e3e] relative text-center text-6xl">
                    <p className="my-[30%] font-bold">
                        {percentage}%
                        </p>
                </div>
            </div>
    </div>
}