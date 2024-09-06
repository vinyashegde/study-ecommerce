import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Social media icons

const SubscribeFooter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle the email subscription logic here
    console.log("Subscribed with email: ", email);
    setEmail(''); // Clear the input field after subscription
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Left Column: Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Middle Column: Subscribe for Updates */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe for New Notes Upload Notifications</h3>
            <p className="text-gray-400 mb-6">Stay updated with the latest notes and materials for your study.</p>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full items-center"
            >
              <input
                type="email"
                className="p-2 w-full md:w-64 text-gray-800 rounded-l-md focus:outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Column: Social Media Icons */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white"><FaFacebook size={28} /></a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white"><FaTwitter size={28} /></a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white"><FaInstagram size={28} /></a>
              <a href="https://whatsapp.com" className="text-gray-400 hover:text-white"><FaWhatsapp size={28} /></a>
            </div>
          </div>

        </div>

        {/* Bottom Row: Copyright */}
        <div className="mt-12 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SubscribeFooter;
