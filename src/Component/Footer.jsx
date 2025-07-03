import React from 'react';
import { Mail } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">ResumeBuilder</h2>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Create professional resumes effortlessly with our intuitive resume builder. Stand out from the crowd with customizable templates.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://www.facebook.com/syma.sultana.75" target="_blank" rel="noopener noreferrer" title="Facebook"
                className="bg-gradient-to-r from-orange-400 to-orange-600 p-2 sm:p-2.5 rounded-lg hover:from-orange-500 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                <FaFacebookF className="text-white sm:w-5 sm:h-5" />
              </a>
              <a href="https://x.com/symadev_E2002" target="_blank" rel="noopener noreferrer" title="Twitter (X)"
                className="bg-gradient-to-r from-orange-400 to-orange-600 p-2 sm:p-2.5 rounded-lg hover:from-orange-500 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                <FaTwitter className="text-white sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.linkedin.com/in/symasultana/" target="_blank" rel="noopener noreferrer" title="LinkedIn"
                className="bg-gradient-to-r from-orange-400 to-orange-600 p-2 sm:p-2.5 rounded-lg hover:from-orange-500 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                <FaLinkedinIn className="text-white sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.instagram.com/midnighttwinkle_/" target="_blank" rel="noopener noreferrer" title="Instagram"
                className="bg-gradient-to-r from-orange-400 to-orange-600 p-2 sm:p-2.5 rounded-lg hover:from-orange-500 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                <FaInstagram className="text-white sm:w-5 sm:h-5" />
              </a>
              <a href="mailto:symasultana02@gmail.com" title="Email"
                className="bg-gradient-to-r from-orange-400 to-orange-600 p-2 sm:p-2.5 rounded-lg hover:from-orange-500 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                <Mail size={18} className="text-white sm:w-5 sm:h-5" />
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div className="mt-6 sm:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Home</a></li>
              <li><a href="/templates" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Templates</a></li>
              <li><a href="/builder" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Resume Builder</a></li>
              <li><a href="/cover-letter" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Cover Letter</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Blog</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>

          {/* Features */}
          <div className="mt-6 sm:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Features</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">ATS-Friendly Templates</a></li>
              <li><a href="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">PDF Download</a></li>
              <li><a href="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Custom Design</a></li>
              <li><a href="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Real-time Preview</a></li>
              <li><a href="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Skills Optimizer</a></li>
              <li><a href="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Multiple Formats</a></li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="mt-6 sm:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Support</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center">
                <Mail className="text-orange-400 mr-2 sm:mr-3 flex-shrink-0" size={16} title="Email Icon" />
                <a href="mailto:support@resumebuilder.com" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">
                  symasultana02@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-400 text-xs sm:text-sm">📞</span>
                </div>
                <a href="tel:+15551234567" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">
                  +8801794621507
                </a>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-400 text-xs sm:text-sm">📍</span>
                </div>
                <span className="text-gray-300 text-sm sm:text-base">Khulna, Bangladesh</span>
              </div>
              <div className="pt-2 sm:pt-3">
                <a href="/help" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base block">Help Center</a>
                <a href="/privacy" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base block mt-2">Privacy Policy</a>
                <a href="/terms" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base block mt-2">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
              © 2025 ResumeBuilder. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">
                Privacy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">
                Terms
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
