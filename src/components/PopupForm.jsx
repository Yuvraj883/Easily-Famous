import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactGA from 'react-ga4';

const baseURL = 'https://easily-famous.onrender.com/api/v2';

const PopupForm = ({ onClose, onSubmit }) => {
  const [profileUrl, setProfileUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setLoading] = useState(false); // New state for loading indication
  const [countdown, setCountdown] = useState(20); // Countdown timer

  useEffect(() => {
    let timer;
    if (isLoading && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000); // Decrease countdown every second
    } else if (countdown === 0) {
      setLoading(false); // If countdown reaches 0, stop loading
      onSubmit(profileUrl); // Perform submit action
      onClose(); // Close the pop-up
    }
    return () => clearTimeout(timer);
  }, [isLoading, countdown, onSubmit, onClose, profileUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    ReactGA.event({
      category: 'Offer Claimed',
      action: 'Offer button clicked',
    });

    setIsSubmitting(true);
    setLoading(true); // Show loading indication

    // Simulate API request delay for demonstration purposes
    setTimeout(() => {
      setIsSubmitting(false);
      setLoading(false); // Stop loading indication
    }, 20000); // Assuming API request takes 20 seconds
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-12 rounded shadow-md relative">
        <h2 className="text-2xl font-bold mb-6">Enter Post URL</h2>
        {isLoading && (
          <div className="absolute top-0 right-0 mr-4 mt-2 text-sm text-gray-500">
            {`Please wait... (${countdown}s)`}
          </div>
        )}
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
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
