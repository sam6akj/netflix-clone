import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Social Icons */}
        <div className="flex space-x-8 mb-6 pl-3">
          <a href="#" className="text-white hover:text-gray-400 transition duration-200">
            <Facebook />
          </a>
          <a href="#" className="text-white hover:text-gray-400 transition duration-200">
            <Instagram />
          </a>
          <a href="#" className="text-white hover:text-gray-400 transition duration-200">
            <Twitter />
          </a>
          <a href="#" className="text-white hover:text-gray-400 transition duration-200">
            <Youtube />
          </a>
        </div>
        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left pl-4">
          <ul>
            <li className="mb-2 hover:text-white">
              <a href="#">Audio Description</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Investor Relations</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Legal Notices</a>
            </li>
          </ul>
          <ul>
            <li className="mb-2 hover:text-white">
              <a href="#">Help Centre</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Jobs</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Cookie Preferences</a>
            </li>
          </ul>
          <ul>
            <li className="mb-2 hover:text-white">
              <a href="#">Gift Cards</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Terms of Use</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Corporate Information</a>
            </li>
          </ul>
          <ul>
            <li className="mb-2 hover:text-white">
              <a href="#">Media Centre</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Privacy</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Service Code and Copyright */}
        <div className="text-center sm:text-left mt-6 pl-4">
          <button className="text-gray-400 border border-gray-400 px-4 py-1 text-sm hover:text-white hover:border-white">
            Service Code
          </button>
          <p className="mt-4 text-gray-600 text-sm">
            © 2024-2025 Netflix, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;