import React, { useState, useEffect } from 'react';
import PopupForm from '../components/PopupForm'; // Update the import path as needed
import OrderProcessingMessage from '../components/OrderProcessingMessage'; // Update the import path as needed

const NewOffers = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFormSubmit = (profileUrl) => {
    // Handle form submission logic here
    // console.log('Submitted profile URL:', profileUrl);

    // Show the processing message
    setIsProcessing(true);

    // Simulate a delay for demonstration purposes (replace with actual logic)
    setTimeout(() => {
      // After processing, hide the message
      setIsProcessing(false);
      // Close the pop-up
      handleClosePopup();
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">
          Get your free likes now! 🚀❤️
        </h2>
        <p className="text-gray-600">
          Increase your social media presence with our free likes service.
          Don't miss out on this amazing opportunity!
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleOpenPopup}
        >
          Claim Now
        </button>
      </div>

      {isPopupOpen && !isProcessing && (
        <PopupForm onClose={handleClosePopup} onSubmit={handleFormSubmit} />
      )}

      {isProcessing && <OrderProcessingMessage onClose={handleClosePopup} />}
    </div>
  );
};

export default NewOffers;
