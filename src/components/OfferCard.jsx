const OfferCard = ({name, rate, max, min, service, id})=>{
    
    return(
        <>
        {/* Design for large screens */}
            <div className="bg-white flex flex-row justify-between items-center w-[80%] m-2 p-2 shadow-lg ">
                <div>
                 <span className="font-semibold text-xl">{id+1}.</span>   
                <h1 className="font-semibold text-2xl inline ">{name}</h1>
                <p className="font-semibold"> Min:{min} Max:{max}</p>
                <h3 className="font-semibold">Price: &#8377; {rate}</h3>
                </div>
                <button className="bg-green-500 px-8 py-2 m-4 cursor-pointer text-white font-bold rounded-sm">Order</button>
                
            </div>
            
        </>
    )
}
export default OfferCard; 