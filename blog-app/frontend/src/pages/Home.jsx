import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LatestBlogs from "../components/LatestBlogs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      
      {/* 🔥 Hero Section */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <Hero />
      </div>

      {/* 🧾 Latest Blogs */}
      <LatestBlogs />

      {/* 🔻 Footer */}
      <Footer />
    </div>
  );
};

export default Home;