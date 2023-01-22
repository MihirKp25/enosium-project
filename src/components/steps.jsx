import Step1 from "../images/fill_personal_details.png";
import Step2 from "../images/fill_banking_details.png";
import Step3 from "../images/progress-circle.png"

export const Steps =()=>{
    return(
        <div className="steps-container">
           <div className="step1">
            <div className="steps-image">
                <div className="less-than">
            <i class="fa-solid fa-less-than"></i>
            </div>
                <img src={Step1}></img>
                <div className="greater-than">
                <i class="fa-solid fa-greater-than"></i>
                </div>
            </div>
            <div className="steps-title">
                <p>Fill Your Personal details</p>
            </div>
            </div> 
            <div className="step2">
            <div className="steps-image">
            <div className="less-than">
            <i class="fa-solid fa-less-than"></i>
            </div>
                <img src={Step2}></img>
                <div className="greater-than">
                <i class="fa-solid fa-greater-than"></i>
                </div>
            </div>
            
            <div className="steps-title">
                <p>Fill Your Banking details</p>
            </div>
            </div> 
            <div className="step3">
            <div className="steps-image">
            <div className="less-than">
            <i class="fa-solid fa-less-than"></i>
            </div>
                <img src={Step3}></img>
                <div className="greater-than">
                <i class="fa-solid fa-greater-than"></i>
                </div>
            </div>
            <div className="steps-title">
                <p>Get to know Loan Prediction</p>
            </div>
            </div> 
        </div>
    )
}