import React from 'react';
// import SendButton from '../miniComponents/sendbutton';
import { MapPin, Phone, Mail} from "lucide-react";
import Footer from './footer';
import ContactForm from './InternalComponents/messageBox';
import FAQs from './InternalComponents/faqsBox';


export default function Contact() {
  return (
    <section>
      <div className='bg-[#0047AB] text-white py-10 sm:py-16 px-4 sm:px-8 md:px-16 text-center'>
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-base sm:text-lg max-w-2xl font-light mx-auto">
          Have questions or feedback? We'd love to hear from you!
        </p>
      </div>

      <div className="bg-gray-50 px-4 sm:px-8 md:px-16 py-10 sm:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mb-10">

          {/* Contact */}
          <div className="md:w-1/2 space-y-8 mb-8 md:mb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Get In Touch</h2>

            <div>
              <div className="flex items-start gap-3 mb-2 text-blue-600">
                <span>
                  <MapPin/>
                </span>
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Our Office</h3>
              </div>
              <p className="text-gray-600">Sky Tower, 123 Flight Street</p>
              <p className="text-gray-600">New York, NY 10001</p>
              <p className="text-gray-600">United States</p>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-2 text-blue-600">
                <span>
                  <Phone />
                </span>
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Phone</h3>
              </div>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600">Monday - Friday, 9am - 6pm EST</p>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-2 text-blue-600">
                <span>
                  <Mail />
                </span>
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Email</h3>
              </div>
              <p className="text-gray-600">info@jetjourney.com</p>
              <p className="text-gray-600">support@jetjourney.com</p>
            </div>

            
          </div>




          <div className="md:w-1/2 w-full">
            <ContactForm />
          </div>
        </div>
        <div className='flex justify-center w-full mt-8'>
          <div className='w-full max-w-2xl'>
            <FAQs />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}