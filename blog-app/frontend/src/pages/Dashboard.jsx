import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const API = "http://localhost:4000/api/blogs";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("list");
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: null,
  });

  const [blogs, setBlogs] = useState([]);

  // 🔹 Handle input
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // 🔹 Fetch user blogs
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API}/user/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(res.data.blogs || res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // 🔹 Create blog
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("category", formData.category);
      data.append("description", formData.description);

      if (formData.image) {
        data.append("image", formData.image);
      }

      const res = await axios.post(API, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.message);

      // ✅ Reset form properly
      setFormData({
        title: "",
        category: "",
        description: "",
        image: null,
      });

      fetchBlogs(); // 🔥 refresh list
      setActiveTab("list");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error");
    }
  };

  // 🔹 Delete blog
  const removeBlog = async (id) => {
    try {
      const res = await axios.delete(`${API}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success(res.data.message);
      setBlogs((prev) => prev.filter((b) => b._id !== id));
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* 🔥 Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        <button
          className={`w-full text-left py-2 px-4 mb-2 rounded ${
            activeTab === "post" ? "bg-orange-500" : "bg-gray-700"
          }`}
          onClick={() => setActiveTab("post")}
        >
          Post Blog
        </button>

        <button
          className={`w-full text-left py-2 px-4 rounded ${
            activeTab === "list" ? "bg-orange-500" : "bg-gray-700"
          }`}
          onClick={() => setActiveTab("list")}
        >
          My Blogs
        </button>
      </div>

      {/* 🔥 Main */}
      <div className="flex-1 p-6">

        {/* 📝 Create Blog */}
        {activeTab === "post" && (
          <div className="max-w-xl bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">Create Blog</h2>

            <form onSubmit={submitHandler} className="flex flex-col gap-4">
              <input
                name="title"
                value={formData.title}
                onChange={onChangeHandler}
                placeholder="Title"
                className="p-2 border rounded"
                required
              />

              <input
                name="category"
                value={formData.category}
                onChange={onChangeHandler}
                placeholder="Category"
                className="p-2 border rounded"
                required
              />

              <textarea
                name="description"
                value={formData.description}
                onChange={onChangeHandler}
                placeholder="Description"
                className="p-2 border rounded"
                required
              />

              <input type="file" onChange={fileHandler} />

              <button className="bg-black text-white py-2 rounded">
                Publish
              </button>
            </form>
          </div>
        )}

        {/* 📋 Blog List */}
        {activeTab === "list" && (
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">My Blogs</h2>

            <table className="w-full text-center border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Title</th>
                  <th className="p-2 border">Category</th>
                  <th className="p-2 border">Image</th>
                  <th className="p-2 border">Delete</th>
                </tr>
              </thead>

              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog._id}>
                    <td className="border p-2">{blog.title}</td>
                    <td className="border p-2">{blog.category}</td>
                    <td className="border p-2">
                      <img
                        src={`http://localhost:4000/images/${blog.image}`}
                        className="w-16 h-16 object-cover mx-auto"
                      />
                    </td>
                    <td
                      className="border p-2 text-red-500 cursor-pointer"
                      onClick={() => removeBlog(blog._id)}
                    >
                      Delete
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;