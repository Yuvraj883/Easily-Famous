import { useState, useEffect } from "react";
import axios from "axios";
const Offers =()=>{
    const [offers, setOffers] = useState('');

    const key = '00b4e5c0f084ee04ceb376293f3be3c7';
    const baseURL = `https://indianprovider.com/api/v2`;

 useEffect (
    ()=>{
        function getOffers (){
            axios.get(baseURL, {params:{
                key:key,
                action:'services'
            }}).then((response)=>{
                setOffers(response.data);
                console.log(offers);
            })
        }
        getOffers();
    }, [baseURL]
 )

  
    return(
        <>
        Offers page
        {/* <button className="bg-red-500 text-white p-8" onClick={getOffers()}>Call API</button> */}
        </>
    )
}
export default Offers;