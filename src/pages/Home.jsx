import { useEffect } from "react";
import blogs from "../blogs";
import BlogCard from "../components/BlogCard";
import ReactGA from 'react-ga';


const Home = ()=>{

   useEffect(()=>{
        ReactGA.pageview(window.location.pathname);
   },[])
    return(
        <>
      <div className="w-[100%] flex flex-col overflow-hidden justify-center items-center p-8"> 
      {
            blogs.map((blog, index) =>(
                <BlogCard {...blog} key={index} />
            ))
        }
        
      </div>
        </>
    )
}
export default Home;