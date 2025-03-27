import React, { useRef, useState } from "react";

const UseReferencePractical = () => {
  const emailRef = useRef();
  const numRef = useRef();
  const passRef = useRef();
  const [validation, setValidation] = useState(true);

  const focusInput = () => {
    const isValid = checkValidation();
    if (!isValid) {
      if (emailRef.current.value === "") {
        emailRef.current.focus();
      } else if (numRef.current.value === "") {
        numRef.current.focus();
      } else if (passRef.current.value === "") {
        passRef.current.focus();
      }
    } else {
      console.log(
        emailRef.current.value,
        numRef.current.value,
        passRef.current.value
      );
    }
  };

  const checkValidation = () => {
    if (
      emailRef.current.value === "" ||
      numRef.current.value === "" ||
      passRef.current.value === ""
    ) {
      setValidation(false);
      return false;
    }
    setValidation(true);
    return true;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          useRef Practical
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            ref={numRef}
            type="tel"
            placeholder="Enter Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            ref={passRef}
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <button
          onClick={focusInput}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          Focus Input
        </button>
      </div>
    </div>
  );
};

export default UseReferencePractical;
