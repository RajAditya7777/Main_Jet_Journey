import React, { useState } from "react";
// import emailjs from "emailjs-com";
import SendButton from "../../miniComponents/sendbutton";

const ContactForm = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleSend = (e) => {
        e.preventDefault();
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
    };

    return (
        <div className="w-full max-w-3xl">
            <form>
                <div className="bg-white rounded-2xl p-8 shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-xl">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Message Us!</h2>
                    <p className="text-gray-600 mb-6 font-light">
                        Fill out the form below and we'll get back to you as soon as possible.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <div className="w-full md:w-[48%]">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Enter your Full name"
                                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                required
                            />
                        </div>

                        <div className="w-full md:w-[48%]">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Enter your Email ID"
                                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                required
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <select
                            name="subject"
                            className="w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            required
                        >
                            <option value="">Select a subject</option>
                            <option value="Flight Information">Flight Information</option>
                            <option value="Booking Issues">Booking Issues</option>
                            <option value="Feedback">Feedback</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="How can we help you?"
                            className="w-full border border-gray-300 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            required
                        ></textarea>
                    </div>

                    <div className="mt-6">
                        <SendButton onClick={handleSend} />
                    </div>
                </div>
            </form>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-black bg-opacity-40 absolute inset-0"></div>
                    <div className="relative bg-white rounded-lg shadow-lg px-8 py-6 text-xl font-semibold text-blue-700 animate-fade-in">
                        Message sent.
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactForm;