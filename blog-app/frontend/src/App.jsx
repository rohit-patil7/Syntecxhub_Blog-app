import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SingleBlog from "./pages/SingleBlog";
import Dashboard from "./pages/Dashboard";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import { StoreContext } from "./context/StoreContext";

const App = () => {
  const { user } = useContext(StoreContext);
  const location = useLocation();

  // ❗ Hide Navbar/Footer on auth pages
  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideLayout && <Navbar />}

      <div className={!hideLayout ? "max-w-7xl mx-auto px-4" : ""}>
        <Routes>

          {/* 🌐 Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:id" element={<SingleBlog />} />

          {/* 🔐 Auth Routes */}
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />

          {/* 🔒 Protected Route */}
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />

        </Routes>
      </div>

      {!hideLayout && <Footer />}

      <ToastContainer />
    </>
  );
};

export default App;