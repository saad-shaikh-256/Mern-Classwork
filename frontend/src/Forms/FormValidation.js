import React, { useState } from "react";

const FormValidation = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    email: "",
    num: "",
    gender: "",
    country: "",
    checkbox: [],
  });

  const [formError, setFormErrors] = useState({});

  const submitForm = (event) => {
    event.preventDefault();
    if (checkValidation()) {
      console.log(data);
      setData({
        firstName: "",
        lastName: "",
        city: "",
        email: "",
        num: "",
        gender: "",
        country: "",
        checkbox: [],
      });
    }
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setData((prevData) => {
      if (checked) {
        return { ...prevData, checkbox: [...prevData.checkbox, value] };
      } else {
        return {
          ...prevData,
          checkbox: prevData.checkbox.filter((item) => item !== value),
        };
      }
    });
  };

  const handleRadioChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({ ...prevData, gender: value }));
  };

  const handleSelectChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({ ...prevData, country: value }));
  };

  const checkValidation = () => {
    let error = {};
    let isValidate = true;

    if (!data.firstName) {
      isValidate = false;
      error.firstName = "First Name is required";
    }

    if (!data.lastName) {
      isValidate = false;
      error.lastName = "Last Name is required";
    }

    if (!data.city) {
      isValidate = false;
      error.city = "City is required";
    }

    if (!data.email) {
      isValidate = false;
      error.email = "Email is required";
    }

    if (!data.num) {
      isValidate = false;
      error.num = "Mobile Number is required";
    }

    if (!data.gender) {
      isValidate = false;
      error.gender = "Please select your gender";
    }

    if (!data.country) {
      isValidate = false;
      error.country = "Please select a country";
    }

    if (data.checkbox.length === 0) {
      isValidate = false;
      error.checkbox = "Please select at least one interest";
    }

    setFormErrors(error);
    return isValidate;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Form Validation
        </h1>
        <form onSubmit={submitForm} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
                value={data.firstName}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  formError.firstName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formError.firstName && (
                <p className="mt-1 text-sm text-red-600">
                  {formError.firstName}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
                value={data.lastName}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  formError.lastName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formError.lastName && (
                <p className="mt-1 text-sm text-red-600">
                  {formError.lastName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
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

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="num"
                placeholder="Enter Phone Number"
                onChange={(e) => setData({ ...data, num: e.target.value })}
                value={data.num}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  formError.num ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formError.num && (
                <p className="mt-1 text-sm text-red-600">{formError.num}</p>
              )}
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                placeholder="Enter your City"
                onChange={(e) => setData({ ...data, city: e.target.value })}
                value={data.city}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  formError.city ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formError.city && (
                <p className="mt-1 text-sm text-red-600">{formError.city}</p>
              )}
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <select
                name="country"
                value={data.country}
                onChange={handleSelectChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  formError.country ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              {formError.country && (
                <p className="mt-1 text-sm text-red-600">{formError.country}</p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={data.gender === "Male"}
                    onChange={handleRadioChange}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={data.gender === "Female"}
                    onChange={handleRadioChange}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
              {formError.gender && (
                <p className="mt-1 text-sm text-red-600">{formError.gender}</p>
              )}
            </div>

            {/* Interests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interests
              </label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="Reading"
                    value="Reading"
                    checked={data.checkbox.includes("Reading")}
                    onChange={handleCheckboxChange}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2">Reading</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="Coding"
                    value="Coding"
                    checked={data.checkbox.includes("Coding")}
                    onChange={handleCheckboxChange}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2">Coding</span>
                </label>
              </div>
              {formError.checkbox && (
                <p className="mt-1 text-sm text-red-600">
                  {formError.checkbox}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;