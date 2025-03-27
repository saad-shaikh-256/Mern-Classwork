import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LocalStorageDemo = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  const handleFormData = (e) => {
    e.preventDefault();
    if (checkValidation()) {
      console.log(data);
      localStorage.setItem("formData", JSON.stringify(data));
      navigate("/ShowlocalData");
    }
  };

  const checkValidation = () => {
    let error = {};
    let isValidate = true;
    if (!data.name) {
      isValidate = false;
      error.name = "Name is required";
    }

    if (!data.email) {
      isValidate = false;
      error.email = "Email is required";
    }
    if (!data.phone) {
      isValidate = false;
      error.phone = "Mobile Number is required";
    }

    setFormError(error);

    return isValidate;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          LocalStorage Demo
        </h1>
        <form onSubmit={handleFormData} className="space-y-6">
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                onChange={(e) => setData({ ...data, name: e.target.value })}
                value={data.name}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  formError.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formError.name && (
                <p className="mt-1 text-sm text-red-600">{formError.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                value={data.email}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  formError.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formError.email && (
                <p className="mt-1 text-sm text-red-600">{formError.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Phone Number"
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                value={data.phone}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  formError.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formError.phone && (
                <p className="mt-1 text-sm text-red-600">{formError.phone}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LocalStorageDemo;
