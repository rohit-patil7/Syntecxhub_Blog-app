import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">

      {/* 🔝 Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* 🧾 About */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">About</h2>
          <p className="text-sm leading-6">
            A modern blogging platform where you can share ideas, explore
            content, and connect with creative minds.
          </p>
          <div className="mt-4 text-sm">
            <p>Email: support@blogify.com</p>
            <p>Phone: +91 9876543210</p>
          </div>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/blogs" className="hover:text-white transition">Blogs</Link>
            <Link to="/about" className="hover:text-white transition">About</Link>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
          </ul>
        </div>

        {/* 🏷️ Categories */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Categories</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="hover:text-white cursor-pointer">Technology</li>
            <li className="hover:text-white cursor-pointer">Lifestyle</li>
            <li className="hover:text-white cursor-pointer">Education</li>
            <li className="hover:text-white cursor-pointer">News</li>
          </ul>
        </div>
      </div>

      {/* 🔻 Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={assets.logo} alt="logo" className="w-8 h-8" />
            <h1 className="text-white font-bold text-lg">
              Blog<span className="text-blue-500">ify</span>
            </h1>
          </div>

          {/* Policies */}
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms</li>
            <li>© 2026 Blogify</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg">
            <span className="cursor-pointer hover:text-white">🌐</span>
            <span className="cursor-pointer hover:text-white">🐦</span>
            <span className="cursor-pointer hover:text-white">📸</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;