import React, { useState } from 'react';
import axios from 'axios';
import ReactGA from 'react-ga4';




// const key = 'c136e8c14dc7b35f17475ea8538c8fe2';
// const baseURL = `'https://indianprovider.com/api/v2`;
// const baseURL = 'http://localhost:3001/api/v2';
const baseURL = 'https://easily-famous.onrender.com/api/v2';


const PopupForm = ({ onClose, onSubmit }) => {
  const [profileUrl, setProfileUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    ReactGA.event({
      category:'Offer Claimed',
      action:'Offer button clicked', 
     
    })
    // console.log("handleSubmit");

    try {
      const response = await axios.post(baseURL, {
        link: profileUrl,
      
      }, {
        headers: {
          'Content-Type': 'application/json',
          // 'Origin':"https://indianprovider.com",
        },
      });

      // Assuming the response contains some data you want to handle
      // const responseData = response.data;
      // console.log('Response Data:', responseData);

      // Trigger the onSubmit callback
      onSubmit(profileUrl);

      // Close the pop-up
      onClose();
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-12 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">Enter Post URL</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="profileUrl" className="block text-sm font-medium text-gray-600">
              Post URL
            </label>
            <input
              type="text"
              id="profileUrl"
              value={profileUrl}
              onChange={(e) => setProfileUrl(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;



