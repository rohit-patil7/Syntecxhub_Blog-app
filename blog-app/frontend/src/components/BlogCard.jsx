import { Link } from "react-router-dom";

const BlogCard = ({
  id,
  title,
  category,
  image,
  author_name,
  author_image,
  date,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      {/* 🖼️ Image */}
      <Link to={`/blog/${id}`}>
        <img
          src={
            image
              ? `http://localhost:4000/images/${image}`
              : "https://via.placeholder.com/400x250"
          }
          alt="blog"
          className="w-full h-52 object-cover cursor-pointer hover:scale-105 transition duration-300"
        />
      </Link>

      {/* 📄 Content */}
      <div className="p-4">

        {/* Category */}
        <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
          {category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 mt-3 line-clamp-2">
          {title}
        </h2>

        {/* Author + Date */}
        <div className="flex items-center gap-3 mt-4">

          <img
            src={
              author_image
                ? `http://localhost:4000/images/${author_image}`
                : "https://i.pravatar.cc/40"
            }
            alt="author"
            className="w-9 h-9 rounded-full object-cover"
          />

          <div className="text-sm text-gray-600">
            <p className="font-medium">{author_name}</p>
            <p>
              {new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;