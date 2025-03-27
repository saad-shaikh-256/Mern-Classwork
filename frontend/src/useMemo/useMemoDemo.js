import React, { useMemo, useState } from "react";

const UseMemoDemo = () => {
  const [add, setAdd] = useState(0);
  const [state, setState] = useState(false);

  const addition = () => {
    setAdd(add + 1);
  };

  function count(add1) {
    for (let index = 0; index < 200000000; index++) {
      return add1;
    }
  }

  const number = useMemo(() => {
    return count(add);
  }, [add]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          useMemo Demo
        </h1>

        <div className="flex flex-col gap-6">
          {/* Counter Section */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center gap-2">
              <span className="text-2xl font-bold">Count:</span>
              <span className="text-2xl font-bold min-w-[50px] text-center">
                {number}
              </span>
            </div>
            <button
              onClick={addition}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium w-full"
            >
              Increment Counter
            </button>
          </div>

          {/* Toggle Section */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setState(!state)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium w-full"
            >
              Toggle State
            </button>
            <h2
              className={`text-xl font-medium text-center ${state ? "text-green-600" : "text-gray-600"}`}
            >
              {state ? "State: Active" : "State: Inactive"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseMemoDemo;
