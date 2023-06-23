const Navbar = ()=>{
    return(
        <>
        <nav className="bg-purple-400 flex flex-row justify-between items-center p-4">
            <span className="font-bolder text-2xl">easilyFamous &#8482;</span>
            <div>
                <ul className="flex flex-row">
                    <li className="mx-1 px-1 cursor-pointer">Home</li>
                    <li className="mx-1 px-1 cursor-pointer ">Offers</li>
                </ul>
            </div>
        </nav>
        </>
    )
}
export default Navbar;