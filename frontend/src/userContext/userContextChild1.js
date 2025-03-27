import React, { useContext } from "react";
import { userContext } from "./userContextSetup";

const UserContextChild1 = () => {
  const username = useContext(userContext);

  return (
    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
      <div className="flex items-center space-x-3">
        <h2 className="text-lg font-medium text-gray-700">Username:</h2>
        <span className="text-xl font-bold text-blue-600">{username}</span>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        This value is received via React Context
      </p>
    </div>
  );
};

export default UserContextChild1;
