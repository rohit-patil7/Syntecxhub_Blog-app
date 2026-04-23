import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(StoreContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLink = (path) =>
    `cursor-pointer transition ${
      location.pathname === path
        ? "text-orange-500 font-semibold"
        : "text-gray-700 hover:text-orange-500"
    }`;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

        {/* 🔷 Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
           
          </Link>
          <span className="hidden sm:block text-xl font-bold">
             <span className="text-orange-500">Blogify</span>
          </span>
        </div>

        {/* 🔗 Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/" className={navLink("/")}>Home</Link>
          <Link to="/blogs" className={navLink("/blogs")}>Blogs</Link>
          <Link to="/about" className={navLink("/about")}>About</Link>
          <Link to="/contact" className={navLink("/contact")}>Contact</Link>
        </ul>

        {/* 🔐 Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Dashboard
              </Link>
              <button
                onClick={logoutUser}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* 📱 Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 space-y-3">
          <Link to="/" className={navLink("/")}>Home</Link>
          <Link to="/blogs" className={navLink("/blogs")}>Blogs</Link>
          <Link to="/about" className={navLink("/about")}>About</Link>
          <Link to="/contact" className={navLink("/contact")}>Contact</Link>

          <hr />

          {user ? (
            <>
              <Link to="/dashboard" className="block">Dashboard</Link>
              <button onClick={logoutUser} className="block text-left">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Sign In</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;