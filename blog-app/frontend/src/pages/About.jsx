import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* 🔥 Title */}
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-10">
        About <span className="text-blue-600">Blogify</span>
      </h1>

      {/* 🧾 Main Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* 📄 Text */}
        <div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Welcome to <span className="text-blue-600 font-semibold">Blogify</span>,
            your go-to platform for discovering and sharing amazing content.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            We believe in the power of ideas and storytelling. Whether you're a
            developer, designer, or just someone who loves reading — this is your space.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our mission is to make blogging simple, beautiful, and accessible to everyone.
          </p>
        </div>

        {/* 🖼️ Image */}
        <div>
          <img
            src={assets.about}
            alt="about"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* 🚀 Features Section */}
      <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold text-lg mb-2">✍️ Easy Writing</h3>
          <p className="text-gray-600 text-sm">
            Create and publish blogs with a clean and simple interface.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold text-lg mb-2">🌍 Community</h3>
          <p className="text-gray-600 text-sm">
            Connect with writers and readers from around the world.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold text-lg mb-2">🚀 Fast & Modern</h3>
          <p className="text-gray-600 text-sm">
            Built with modern tech for speed, performance, and great UX.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;