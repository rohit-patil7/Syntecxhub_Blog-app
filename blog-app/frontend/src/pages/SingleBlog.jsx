import { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const SingleBlog = () => {
  const { id } = useParams();
  const { blogData, loading } = useContext(StoreContext);

  const blog = blogData.find((b) => b._id === id);

  // ⏳ Loading
  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading blog...
      </div>
    );
  }

  // ❌ Not found
  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-500">
        Blog not found 😔
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      {/* 🖼️ Image */}
      <img
        src={`http://localhost:4000/images/${blog.image}`}
        alt="blog"
        className="w-full h-[400px] object-cover rounded-2xl shadow-md mb-6"
      />

      {/* 🏷️ Category */}
      <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
        {blog.category}
      </span>

      {/* 📝 Title */}
      <h1 className="text-3xl md:text-4xl font-bold mt-4 text-gray-800">
        {blog.title}
      </h1>

      {/* 👤 Author */}
      <div className="flex items-center gap-3 mt-4">
        <img
          src={`http://localhost:4000/images/${blog.author?.image}`}
          alt="author"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="text-sm text-gray-600">
          <p className="font-medium">{blog.author?.name}</p>
          <p>
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* 📄 Content */}
      <p className="mt-6 text-gray-700 leading-relaxed text-lg">
        {blog.description}
      </p>
    </div>
  );
};

export default SingleBlog;