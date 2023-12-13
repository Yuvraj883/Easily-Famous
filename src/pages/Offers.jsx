import { useEffect, useState } from "react";
import OfferCard from "../components/OfferCard";
import axios from "axios";

const key = '00b4e5c0f084ee04ceb376293f3be3c7';
// const baseURL = 'http://localhost:3001/api/v2';
const baseURL = 'https://easily-famous.onrender.com/api/v2'

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
          setOffers(response.data);
        }
      })
    }
    getOffers();
  }, []);

  if (offers === null) {
    return <div className="text-3xl mx-auto font-bolder flex justify-center items-center">loading...</div>
  }

  const filteredOffers = offers.filter(offer => offer.service === '2572');

  return (
    <>
      <div className="flex flex-col justify-center items-center p-4 overflow-hidden w-[100%]">
        {
          filteredOffers.map((offer, index) => (
            <OfferCard {...offer} id={index} key={index} />
          ))
        }
      </div>
    </>
  )
}

export default Offers;
