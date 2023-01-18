import Banking_image from "../images/banking_image.png"
export const Info_website=()=>{
    return <div className="lg:h-[500px] w-[90%]  mx-auto  grid md:grid-cols-2">
        <div className="lg:col-span-1 flex align-middle">
            <img src={Banking_image}/>
        </div>
        <div className="lg:col-span-1 lg:text-2xl md:text-xl text-lg text-left py-8 px-12 my-auto">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates aliquid corrupti magnam ad quos nulla qui ipsa sit officia. Qui expedita tempora vel, doloremque eum perferendis pariatur et inventore repellat! Aliquam vero voluptatem culpa iusto quia porro eligendi repellendus quos, reiciendis ab, doloribus libero tenetur?</p>
        </div>

    </div>
}