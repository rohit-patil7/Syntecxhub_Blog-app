import { useContext } from "react";
import BlogCard from "./BlogCard";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

const LatestBlogs = () => {
  const { blogData } = useContext(StoreContext);

  const latestBlogs = blogData?.slice(-6).reverse();

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">

      {/* 🔥 Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Latest Blogs
        </h1>

        <Link
          to="/blogs"
          className="text-blue-600 hover:underline text-sm"
        >
          View All →
        </Link>
      </div>

      {/* ⚠️ Empty State */}
      {(!blogData || blogData.length === 0) && (
        <div className="text-center text-gray-500 py-10">
          No blogs available yet 🚀
        </div>
      )}

      {/* 🧾 Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {latestBlogs?.map((blog) => (
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

export default LatestBlogs;