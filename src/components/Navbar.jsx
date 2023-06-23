import {Link, Outlet} from 'react-router-dom';
const Navbar = ()=>{

    return(
        <>
        <nav className="bg-purple-400 flex flex-row justify-between items-center p-4">
            <span className="font-bolder text-2xl">easilyFamous &#8482;</span>
            <div>
                <ul className="flex flex-row">
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