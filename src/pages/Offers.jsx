import { useEffect, useState } from "react";
import OfferCard from "../components/OfferCard";
import axios from "axios";
const Offers =()=>{
    const [offers, setOffers] = useState(null);

    const key = '00b4e5c0f084ee04ceb376293f3be3c7';
    const baseURL = `https://indianprovider.com/api/v2`;


function getOffers (){
    axios.get(baseURL, {params:{
        key:key,
        action:'services'
    }}).then((response)=>{
        setOffers(response.data);
        console.log(offers);
    })
}

useEffect(()=>{
    getOffers();
},[]);

    return(
        <>
        {/* {

            // offers.map((offer, index)=>(
            //     <OfferCard props = {offer} key={index}/>
            )
            )
        } */}
        </>
    )
}
export default Offers;