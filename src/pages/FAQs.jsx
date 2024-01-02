import React from 'react';

const FAQ = () => {
  const faqData = [
    {
      question: 'What is Social Media Marketing (SMM)?',
      answer: 'Social Media Marketing (SMM) is a digital marketing strategy that utilizes social media platforms to promote products, services, or brands, and engage with the target audience.'
    },
    {
      question: 'Why is SMM important for my business?',
      answer: 'SMM is crucial for businesses to enhance brand visibility, drive website traffic, and connect with potential customers. It allows you to leverage the power of social media platforms for marketing and communication.'
    },
    {
      question: 'Which social media platforms should I focus on for marketing?',
      answer: 'The choice of social media platforms depends on your target audience and business goals. Popular platforms include Facebook, Instagram, Twitter, LinkedIn, and Pinterest. We can help you identify the most effective platforms for your business.'
    },
    {
      question: 'How can IndianProvider boost my social media presence?',
      answer: 'IndianProvider specializes in SMM services, offering strategic planning, content creation, and targeted campaigns to boost your social media presence. We employ industry-leading techniques to increase your brand visibility and engagement.'
    },
    {
      question: 'What is the role of hashtags in SMM?',
      answer: 'Hashtags play a crucial role in SMM by categorizing content and making it discoverable to a wider audience. Our team conducts hashtag research and optimization to ensure your content reaches the right audience.'
    },
    {
      question: 'How does IndianProvider measure SMM success?',
      answer: 'We use a variety of metrics, including reach, engagement, conversion rates, and more, to measure the success of your SMM campaigns. Our analytics provide valuable insights to optimize future strategies.'
    },
    {
      question: 'Is it necessary to run paid social media campaigns?',
      answer: 'While organic reach is valuable, paid social media campaigns can significantly enhance visibility and target specific demographics. We tailor campaigns based on your budget and objectives for optimal results.'
    },
    {
      question: 'Can SMM help with lead generation?',
      answer: 'Yes, SMM is an effective tool for lead generation. By creating engaging content, running targeted ads, and fostering community engagement, IndianProvider can help you generate quality leads for your business.'
    },
    // Add more FAQs as needed
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
