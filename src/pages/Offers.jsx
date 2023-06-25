import { useEffect, useState } from "react";
import OfferCard from "../components/OfferCard";
import axios from "axios";

const key = '00b4e5c0f084ee04ceb376293f3be3c7';
const baseURL = `https://indianprovider.com/api/v2`;
const Offers = () => {
    const [offers, setOffers] = useState(null);

   

    useEffect(() => {

        function getOffers() {
            axios.get(baseURL, {
                params: {
                    key: key,
                    action: 'services'
                }
            }).then((response) => {
    
                if (Array.isArray(response?.data) && response?.data.length) {
                    setOffers(response['data']);
                    // console.log(offers);
                }
    
            })
        }
        getOffers();
    }, []);
    if (offers === null) {
        return <div className="text-3xl mx-auto font-bolder flex justify-center items-center">loading...</div>
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center p-4 overflow-hidden w-[100%]">
                {

                    offers.map((offer, index) => (
                        <OfferCard {...offer} id={index} key={index} />
                    )
                    )
                }
            </div>
        </>
    )
}
export default Offers;