import React from "react";

const Navbar = () => {
   return (
      <header className="bg-white relative top-0 left-0 w-full z-50 shadow-sm">
         <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            {/* Logo on the left */}
            <a
               href="/"
               className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300"
            >
               Saad Shaikh
            </a>

            {/* Links in the center */}
            <div className="flex-1 flex justify-center">
               <ul className="flex space-x-10">
                  <li>
                     <a
                        href="https://www.deepseek.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-gray-600 hover:text-blue-600 transition-colors duration-300"
                     >
                        Deepseek
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.openai.com/chatgpt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-gray-600 hover:text-blue-600 transition-colors duration-300"
                     >
                        ChatGPT
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.gemini.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-gray-600 hover:text-blue-600 transition-colors duration-300"
                     >
                        Gemini
                     </a>
                  </li>
               </ul>
            </div>

            {/* Button on the right */}
            <a
               href="https://www.geeksforgeeks.org/mern-stack/"
               target="_blank"
               rel="noopener noreferrer"
               className="px-4 py-2 text-m font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
               Learn More
            </a>
         </nav>
      </header>
   );
};

export default Navbar;