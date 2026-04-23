import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden rounded-2xl">

      {/* 🖼️ Background Image */}
      <img
        src={assets.blog5}
        alt="hero"
        className="w-full h-full object-cover"
      />

      {/* 🌫️ Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>

      {/* ✨ Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white">
        <h1 className="text-3xl md:text-5xl font-bold max-w-xl leading-tight">
          Discover Stories, Ideas & Inspiration
        </h1>

        <p className="mt-4 text-gray-200 max-w-md">
          Explore blogs on technology, lifestyle, and creativity. Share your
          thoughts with the world.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Explore Blogs
          </button>

          <button className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black transition">
            Write Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;