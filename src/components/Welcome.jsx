import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="pt-102 bg-gray-100 p-8 w-96 rounded-sm shadow-md">
      <h1 className="text-3xl font-bold text-left text-black mb-4">
        Welcome to PopX
      </h1>
      <p>Lorem ipsum dolor sit amet,</p>
      <p className="pb-6">consectetur adipiscing elit,</p>

      <div className="space-y-4">
        <button
          onClick={() => navigate("/create-account")}
          className="w-full bg-[#7B3FF6] text-white py-2 px-4 rounded hover:bg-[#5b15e8] transition"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/login")}
          className="w-full font-semibold bg-[#D0A8FF] text-gray-800 py-2 px-4 rounded hover:bg-[#ac70f0] transition"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
