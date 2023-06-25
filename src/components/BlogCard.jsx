import { useState } from "react";
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'
const BlogCard = ({title, body})=>{
    const [readMore, setReadMore] = useState(false);

    const handleReadMore = ()=>{
        setReadMore(!readMore);
    }

    return(
        <>
        {/* Design for large screens */}
        <div className="md:flex hidden flex-col justify-center items-center shadow-lg p-4 rounded-md mx-auto w-[80%] m-2 ">
            <h1 className="text-xl font-bold ">{title}</h1>
            <p className={readMore?'inline': 'line-clamp-3'}>
                {body}
            </p>
            <p onClick={handleReadMore} className="text-blue-500 cursor-pointer ">{
                !readMore?<IoMdArrowDropdown className="text-blue-500 text-2xl"/>: <IoMdArrowDropup className="text-blue-500 text-2xl "/>
            }</p>
        </div>
        {/* Design for small screens */}
        <div className="md:hidden flex flex-col justify-center items-center shadow-lg p-4 rounded-md mx-auto w-[100%] m-2 ">
            <h1 className="text-xl font-bold ">{title}</h1>
            <p className={readMore?'inline': 'line-clamp-3'}>
                {body}
            </p>
            <p onClick={handleReadMore} className="text-blue-500 cursor-pointer ">{
                !readMore?<IoMdArrowDropdown className="text-blue-500 text-2xl"/>: <IoMdArrowDropup className="text-blue-500 text-2xl "/>
            }</p>
        </div>
        </>
    )
}
export default BlogCard; 