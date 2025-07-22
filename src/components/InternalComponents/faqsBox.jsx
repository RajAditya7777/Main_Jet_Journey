import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqsData = [
  {
    question: "How do I track a flight?",
    answer:
      "Enter the flight number or destination in the search bar on our home page or flight search page. You can track flights by airline code and flight number (e.g., AA1234) or search by destination airport to see all flights to that location.",
  },
  {
    question: "How accurate is the flight information?",
    answer:
      "Our flight information is updated in real-time from multiple reliable sources including airlines, airports, and air traffic control systems. While we strive for maximum accuracy, occasional delays in data updates may occur during extreme weather events or technical issues.",
  },
  {
    question: "Do I need to create an account to track flights?",
    answer:
      "No, you can track flights without creating an account. However, registered users can save favorite flights, set up notifications, and access their flight search history.",
  },
  {
    question: "Can I get notifications about flight status changes?",
    answer:
      "Yes, AeroTrip offers flight status notifications via email and mobile alerts. You can set up notifications for specific flights to receive updates about delays, gate changes, and other important information.",
  },
  {
    question: "Does AeroTrip work for international flights?",
    answer:
      "Yes, AeroTrip works for both domestic and international flights across most major airlines worldwide. Our coverage includes over 180 countries and more than 9,000 airports globally.",
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Yes, AeroTrip offers mobile apps for both iOS and Android devices. You can download them from the App Store or Google Play Store to track flights on the go.",
  },
  
  {
    question: "How do I reset my password?",
    answer:
      "To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions sent to your registered email address.",
  },
  {
    question: "Can I book flights through JetJourney?",
    answer:
      "Currently, JetJourney is focused on providing real-time flight tracking and information. Booking services may be added in the future.",
  },

];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl bg-white text-black p-8 rounded-2xl shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-xl">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>

      {faqsData.map((faq, index) => (
        <div
          key={index}
          className={`transition-all duration-300 ${index !== faqsData.length - 1 ? "border-b border-gray-300" : ""
            }`}
        >
          <button
            className="flex justify-between items-center w-full text-left text-lg font-medium px-2 py-4 hover:bg-blue-50 transition-colors"
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 px-2 ${openIndex === index
                ? "max-h-40 mt-1 opacity-100"
                : "max-h-0 opacity-0"
              }`}
          >
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;