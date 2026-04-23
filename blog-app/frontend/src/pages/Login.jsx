import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StoreContext } from "../context/StoreContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loginUser } = useContext(StoreContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:4000/api/users/login",
        formData
      );

      if (res.data.success) {
        loginUser(res.data.user, res.data.token);
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Welcome Back 👋
        </h1>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            placeholder="Email"
            className="p-3 border rounded"
            required
          />

          <input
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
            type="password"
            placeholder="Password"
            className="p-3 border rounded"
            required
          />

          <button className="bg-orange-500 text-white py-2 rounded">
            {loading ? "Logging..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-4">
          Don’t have account?{" "}
          <Link to="/register" className="text-orange-500">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;