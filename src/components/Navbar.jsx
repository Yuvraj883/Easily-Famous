import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState('false');

    const handleSetNav = () => {
        setNav(!nav);
    }

    return (
        <>
            {/* Design for large screens */}
            <nav className="bg-purple-600 hidden md:flex flex-row justify-between items-center text-white p-4">
                <span className="font-extrabold text-2xl bg-gradient-to-r bg-clip-text text-transparent from-yellow-500 to-red-500">easilyFamous &#8482;</span>
                <div>
                    <ul className="flex flex-row font-bold">
                        <li className="mx-1 px-1 cursor-pointer"><Link to="/">Home</Link> </li>
                        <li className="mx-1 px-1 cursor-pointer "><Link to="offers">Offers</Link> </li>
                    </ul>
                </div>
            </nav>
            {/* Design for small screens */}
            
                <div className='flex bg-red-600 p-4 w-100% justify-between items-center cursor-pointer  pr-2 md:hidden' onClick={handleSetNav}>
                    <span className="font-extrabold text-2xl bg-gradient-to-r bg-clip-text text-transparent from-yellow-500 to-red-500">easilyFamous &#8482;</span>
                    <div>
                        {
                            nav ? <AiOutlineMenu className='text-white' size={20} /> : <AiOutlineClose className='text-white' size={20} />
                        }
                    </div>
                </div>
                    <div className={!nav ? 'top-0 left-0 w-[60%] h-full fixed bg-gradient-to-br to-red-400 from-red-600 text-white  p-4 ease-in-out duration-500' : 'fixed w-[60%] h-full p-4 top-0 left-[-100%] ease-in-out duration-500'}>
                        <ul className="flex flex-col font-bold mt-8 text-lg">
                        <Link className='w-[100%] mx-1 px-1 cursor-pointer' to="/">Home</Link> 
                            <hr className='border-white'/>
                          <Link className='w-[100%] mx-1 px-1 cursor-pointer' to="offers">Offers</Link> 
                            <hr className='border-white'/>

                        </ul>
                    </div>
            

            <Outlet />
        </>

    )
}
export default Navbar;