import React from "react";

const StudentTable = (props) => {
  const studentMark = props.studentMarks;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 px-6 py-4">
          <h4 className="text-white text-center text-xl font-semibold">
            Student Data
          </h4>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Roll No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PHP
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Java
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Python
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {studentMark.map((student, idx) => {
                  let rollNo = idx + 1;
                  let marks1 = student.marks1;
                  let marks2 = student.marks2;
                  let marks3 = student.marks3;
                  let total = marks1 + marks2 + marks3;
                  let per = total / 3;
                  let roundedPer = Math.round(per);

                  // Function to apply text color if marks are below 40
                  const markClass = (marks) =>
                    marks < 40 ? "text-red-600 font-medium" : "text-gray-900";

                  return (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {rollNo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {student.name}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${markClass(marks1)}`}
                      >
                        {marks1}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${markClass(marks2)}`}
                      >
                        {marks2}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${markClass(marks3)}`}
                      >
                        {marks3}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${markClass(total)}`}
                      >
                        {total}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${markClass(roundedPer)}`}
                      >
                        {roundedPer}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;
