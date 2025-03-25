import { useNavigate } from "react-router-dom";

export default function AccountSettings() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 rounded-sm shadow-md max-w-md w-96">
      <h1 className="bg-white text-2xl text-gray-800 p-4 mb-6">
        Account Settings
      </h1>

      <div className=" px-8  flex items-center mb-6">
        <div className="mr-4">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover border-2 border-purple-200"
          />
        </div>
        <div>
          <p className="text-lg font-medium text-gray-900">Marry Doe</p>
          <p className="text-gray-600">marry@gmail.com</p>
        </div>
      </div>

      <div className="px-8 text-gray-600 font-medium mb-8 ">
        <p>Lorem Ipsum Dolor Sit Amet, Consetetur </p>
        <p>Elitr. Sed Diam Nonumy Eirmod Tempor </p>
        <p>Labore Et Dolore Magna Aliquyam Erat.</p>
      </div>

      <button
        onClick={() => navigate("/")}
        className=" mb-85 mx-7 px-28 bg-[#7B3FF6] text-white py-2 rounded hover:bg-[#5b15e8] transition"
      >
        Back to Home
      </button>
    </div>
  );
}
