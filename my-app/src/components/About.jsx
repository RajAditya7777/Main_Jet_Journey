import React from 'react';

import {Shield,Star,Users,TrendingUp} from "lucide-react";

import Footer from './footer';

const impact = [
  { number: "10M+", label: "Flights Tracked" },
  { number: "5M+", label: "Happy Users" },
  { number: "200+", label: "Airports Covered" },
  { number: "100+", label: "Airlines" },
];

const visionCards = [
  {
    icon: <TrendingUp className='h-9 w-9'/>,
    title: "Expand Coverage",
    description: "We're working to include even more airlines and airports in our tracking system.",
  },
  {
    icon: <Star className='h-9 w-9'/>,
    title: "Enhanced Features",
    description: "We're developing new tools to provide even more detailed flight information.",
  },
  {
    icon: <Shield className='h-9 w-9'/>,
    title: "Personalized Experiences",
    description: "Our goal is to tailor our service to your specific travel needs and preferences.",
  },
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://physicaleducationandwellness.mit.edu/wp-content/uploads/Untitled-1.png",
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "https://harvardtechnologyreview.com/wp-content/uploads/2023/10/image.jpeg",
  },
  {
    name: "Priya Patel",
    role: "Head of Data Science",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/3c106b207908211.66e6dc84617fb.jpg",
  },
  {
    name: "James Wilson",
    role: "Customer Experience Director",
    image: "https://static-wbd-cdn.wbd.com/s3_assets/images/person/2024-08/james-gunn-800x800.jpg",
  },
];

export default function About() {
  return (
    <section>
      {/* Intro Section */}
      <div className='bg-[#0047AB] text-white py-16 px-4 sm:px-8 md:px-16 text-center'>
        <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4">About JetJourney</h1>
        <p className="text-white text-base sm:text-lg max-w-2xl font-light mx-auto">
          Your trusted partner for real-time flight tracking and status updates.
        </p>
        <br />
        <p className="text-white mt-2 max-w-2xl font-light mx-auto">
          Launched in 2025, JetJourney has quickly become the go-to platform for travelers seeking accurate, timely information on flights worldwide.
        </p>
      </div>

      {/*Mission*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-8 md:px-16 py-10 items-center bg-[#F9FAFB] max-w-7xl mx-auto">
        <div className="flex justify-center">
          <img src="/map.png" alt="World map with airplane" className="rounded-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl object-cover transition-transform duration-300 hover:scale-105 mx-auto" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6 ">
            At JetJourney, our mission is to empower travelers with accurate,
            real-time flight information, reducing the stress and uncertainty that
            often comes with air travel.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600"><Shield/></span>
              <div><strong>Reliability</strong><br />We provide accurate, up-to-date information you can trust.</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600"><Star/></span>
              <div><strong>Excellence</strong><br />We strive for excellence in every aspect of our service.</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600"><Users/></span>
              <div><strong>Customer Focus</strong><br />Your needs and preferences drive our development.</div>
            </li>
          </ul>
        </div>
      </div>

      {/*Impact*/}
      <div className="text-center py-16 bg-[#F9FAFB]">
        <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Since our launch, we've helped millions of travelers stay informed and make better decisions about their journeys.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16 ">
          {impact.map((ele, i) => (
            <div key={i} className="bg-white shadow-lg rounded-xl py-10 px-4 flex flex-col items-center  hover:shadow-lg transition duration-300 hover:-translate-y-1">
              <h3 className="text-blue-600 text-3xl font-bold">{ele.number}</h3>
              <p className="text-gray-700 mt-2 text-lg text-center">{ele.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/*Vision*/}
      <div className="text-center py-16 px-6 bg-[#F9FAFB]">
        <h2 className="text-3xl font-bold mb-4">Our Vision for the Future</h2>
        <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
          As we look ahead, we're committed to expanding our services, integrating new technologies,
          and creating an even more seamless travel experience for our users.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visionCards.map((card, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 text-2xl mb-2 flex justify-center items-center">{card.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* members and all that */}
      <div className="text-center py-16 px-6 bg-[#F9FAFB]">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Our diverse team of aviation enthusiasts, data scientists, and tech experts
          work together to provide you with the best flight tracking experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-72 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
