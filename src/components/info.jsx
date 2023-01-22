import LoanOnline from "../images/loanOnline.png"
export const Info_website=()=>{
    return <div id="about" className="lg:h-[500px] w-[90%]  mx-auto  grid md:grid-cols-2">
        <div className="lg:col-span-1 flex align-middle" >
            <img src={LoanOnline}/>
        </div>
        <div className="lg:col-span-1 lg:text-2xl md:text-xl text-lg text-left py-8 px-12 my-auto">
            <p className="text-xl md:text-3xl text-[#47026c] font-bold text-center" >Take the guesswork out of loan approvals with our prediction technology</p>
        </div>

    </div>
}