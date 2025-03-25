import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAccount({ onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: true,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Account creation logic here
    navigate("/account-settings");
  };

  return (
    <div className="bg-gray-100 p-8 pt-6 rounded-sm shadow-md max-w-md w-96 ">
      <h1 className="text-2xl font-bold text-black">Create your</h1>
      <h2 className="text-2xl font-bold text-black mb-6">PopX account</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold text-purple-600 mb-1">
            Full Name*
          </label>
          <input
            type="text"
            placeholder="Marry Doe"
            name="fullName"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-purple-600 mb-1">
            Phone number*
          </label>
          <input
            type="tel"
            placeholder="9980654321"
            name="phone"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-purple-600 mb-1">
            Email address*
          </label>
          <input
            type="email"
            placeholder="marry@gmail.com"
            name="email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-purple-600 mb-1">
            Password*
          </label>
          <input
            type="password"
            placeholder="********"
            name="password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-purple-600 mb-1">
            Company name*
          </label>
          <input
            type="text"
            placeholder="Doe Company"
            name="company"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center space-x-4">
          <label className="text-gray-700">Are you an Agency?</label>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="isAgency"
              id="agency-yes"
              checked={formData.isAgency}
              onChange={() =>
                setFormData((prev) => ({ ...prev, isAgency: true }))
              }
              className="h-4 w-4 text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor="agency-yes">Yes</label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="isAgency"
              id="agency-no"
              checked={!formData.isAgency}
              onChange={() =>
                setFormData((prev) => ({ ...prev, isAgency: false }))
              }
              className="h-4 w-4 text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor="agency-no">No</label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#7B3FF6] text-white py-2 px-4 rounded hover:bg-[#5b15e8] transition mt-2"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
