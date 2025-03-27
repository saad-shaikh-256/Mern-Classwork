import React, { useEffect, useState } from "react";

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect called", count);
  }, [count]);

  const Increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          useEffect Demo
</h1>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-medium text-gray-600 mb-1">
              Current Count
            </h2>
            <h3 className="text-2xl font-bold text-gray-800">{count}</h3>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-medium text-gray-600 mb-1">
              useEffect Calls
            </h2>
            <h3 className="text-2xl font-bold text-gray-800">{count}</h3>
          </div>
        </div>

        <button
          onClick={Increment}
          className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          Increment Counter
        </button>
      </div>
    </div>
  );
};

export default UseEffectDemo;
