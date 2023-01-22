import loan_approval from "../images/loan_approval.jpg"
export const Info_website1=()=>{
    return <div className="lg:h-[500px] w-[90%]  mx-auto grid md:grid-cols-2 mt-[70px]">
        <div className="lg:col-span-1 lg:text-2xl md:text-xl text-lg text-left py-8 px-12 my-auto hidden md:block">
            <p className="text-xl md:text-3xl text-[#47026c] font-bold text-center">Our prediction technology takes into account a wide range of factors, including your credit history, income and other financial information, to give you an accurate and reliable prediction of your loan approval chances</p>
        </div>
        <div className="lg:col-span-1 md:flex align-middle hidden ">
            <img src={loan_approval}/>
        </div>
        <div className="lg:col-span-1 flex align-middle md:hidden">
            <img src={loan_approval}/>
        </div>
        <div className="lg:col-span-1 lg:text-2xl md:text-xl text-lg text-left py-8 px-12 my-auto md:hidden">
<p className="text-xl md:text-3xl text-[#47026c] font-bold text-center">Our prediction technology takes into account a wide range of factors, including your credit history, income and other financial information, to give you an accurate and reliable prediction of your loan approval chances</p>        </div>

    </div>
}