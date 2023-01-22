import financial_future from "../images/financial_future.jpg"
export const Info_website2=()=>{
    return <div className="lg:h-[500px] w-[90%]  mx-auto mb-[20%] grid md:grid-cols-2">
        <div className="lg:col-span-1 flex align-middle">
            <img src={financial_future}/>
        </div>
        <div className="lg:col-span-1 lg:text-2xl md:text-xl text-lg text-left py-8 px-12 my-auto">
            <p className="text-3xl text-[#47026c] font-bold text-center">Don't let the fear of rejection keep you rom applying for a loan. With our loan prediction website you can take control of your credit and make informed decisions about your financial future</p>
        </div>

    </div>
}