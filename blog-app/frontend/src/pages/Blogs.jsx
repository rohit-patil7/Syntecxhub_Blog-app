import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Blogs = () => {
  const { blogData, loading } = useContext(StoreContext);

  return (
    <div className="max-w-7xl mx-auto px-4">

      {/* 🔥 Hero */}
      <Hero />

      {/* 🧾 Header */}
      <div className="text-center mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          All Blogs
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          Explore all articles from our community. Discover ideas, learn new
          things, and stay inspired 🚀
        </p>
      </div>

      {/* ⏳ Loading */}
      {loading && (
        <div className="text-center py-10 text-gray-500">
          Loading blogs...
        </div>
      )}

      {/* ❌ Empty */}
      {!loading && blogData.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No blogs available yet 😔
        </div>
      )}

      {/* 🧾 Blog Grid */}
      <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {blogData.map((blog) => (
          <BlogCard
            key={blog._id}
            id={blog._id}
            title={blog.title}
            image={blog.image}
            category={blog.category}
            author_name={blog.author?.name}
            author_image={blog.author?.image}
            date={blog.createdAt}
          />
        ))}

      </div>
    </div>
  );
};

export default Blogs;