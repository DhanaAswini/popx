import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    navigate("/account-settings"); // Redirect after login
  };

  return (
    <div className="bg-gray-100 w-96 p-8 rounded-sm shadow-md max-w-md">
      <h1 className="text-3xl font-bold black">Signin to your</h1>
      <h2 className="text-3xl font-bold black mb-6">PopX account</h2>
      <p className="font-semibold text-gray-400">Lorem ipsum dolor sit amet,</p>
      <p className="pb-4 font-semibold text-gray-400">
        consectetur adipiscing elit,
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold text-purple-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-purple-600 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>

        <button
          type="submit"
          className="mb-57 w-full bg-[#7B3FF6] text-white py-2 px-4 rounded hover:bg-[#5b15e8] transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
