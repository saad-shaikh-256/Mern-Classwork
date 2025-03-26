import React, { useState } from "react";

const Counter = () => {
   // State for Counter
   const [count, setCount] = useState(0);

   // Increment Function
   const Increment = () => {
      setCount(count + 1);
   };

   // Decrement Function (fixed the logic)
   const Decrement = () => {
      if (count > 0) {
         setCount(count - 1);
      }
   };

   // Reset Function
   const Reset = () => {
      setCount(0);
   };

   return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
         <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Counter</h1>

            <div className="text-center mb-8">
               <span className="text-5xl font-bold text-gray-800">{count}</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button
                  onClick={Increment}
                  className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md"
               >
                  Increment
               </button>

               <button
                  onClick={Decrement}
                  disabled={count === 0}
                  className={`px-6 py-2 font-medium rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md ${count === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-600 text-white hover:bg-gray-700'
                     }`}
               >
                  Decrement
               </button>

               <button
                  onClick={Reset}
                  className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-sm hover:shadow-md"
               >
                  Reset
               </button>
            </div>
         </div>
      </div>
   );
};

export default Counter;