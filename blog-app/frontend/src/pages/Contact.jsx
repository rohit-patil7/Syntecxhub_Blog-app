import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* 🔥 Title */}
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-10">
        Contact <span className="text-blue-600">Us</span>
      </h1>

      {/* 🧾 Main Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* 📄 Contact Info */}
        <div>
          <p className="text-gray-600 mb-4">
            Have questions, feedback, or ideas? We'd love to hear from you!
          </p>

          <div className="space-y-3 text-gray-700">
            <p>📧 Email: support@blogify.com</p>
            <p>📞 Phone: +91 7276004434</p>
            <p>📍 Location: Mumbai, India</p>
          </div>

          {/* 🖼️ Image */}
          <img
            src={assets.contact}
            alt="contact"
            className="mt-6 rounded-xl shadow-md"
          />
        </div>

        {/* 📨 Contact Form */}
        <form className="bg-white p-6 rounded-xl shadow-md space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;