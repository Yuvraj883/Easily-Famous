import {Link, Outlet} from 'react-router-dom';
const Navbar = ()=>{

    return(
        <>
        <nav className="bg-purple-400 flex flex-row justify-between items-center text-white p-4">
            <span className="font-extrabold text-2xl bg-gradient-to-r bg-clip-text text-transparent from-orange-500 to-red-500">easilyFamous &#8482;</span>
            <div>
                <ul className="flex flex-row font-bold">
                    <li className="mx-1 px-1 cursor-pointer"><Link to="/">Home</Link> </li>
                    <li className="mx-1 px-1 cursor-pointer "><Link to="offers">Offers</Link> </li>
                </ul>
            </div>
        </nav>
        <Outlet/>
        </>

    )
}
export default Navbar;