import React, { useRef } from "react";

const UseReferenceDemo = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
    console.log("Input is focused");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          useRef Demo
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            ref={inputRef}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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

export default UseReferenceDemo;
