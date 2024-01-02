import React from 'react';

const FAQ = () => {
  const faqData = [
    {
      question: 'What is IndianProvider?',
      answer: 'IndianProvider is a platform that offers various services and products from India.'
    },
    {
      question: 'How can I contact support?',
      answer: 'You can contact our support team through the contact form on the website or by emailing support@indianprovider.com.'
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes, we have a refund policy. Please refer to our refund policy page for more details.'
    },

  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold">{item.question}</h3>
          <p className="mt-2">{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
