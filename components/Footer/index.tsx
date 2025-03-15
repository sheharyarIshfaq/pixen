import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-12 border-t border-purple-200 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container px-8 mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-purple-600">
        <p>© {new Date().getFullYear()} Pixen. All rights reserved.</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-pink-600 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-pink-600 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-pink-600 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
