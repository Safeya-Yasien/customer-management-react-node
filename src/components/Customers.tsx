import { Eye } from "lucide-react";

const Customers = () => {
  const customers = [
    {
      id: 1,
      fullName: "Ahmed Ali",
      gender: "Male",
      country: "Egypt",
      age: 28,
      lastUpdated: "2025-10-20",
    },
    {
      id: 2,
      fullName: "Sara Khaled",
      gender: "Female",
      country: "UAE",
      age: 31,
      lastUpdated: "2025-10-22",
    },
    {
      id: 3,
      fullName: "Omar Hassan",
      gender: "Male",
      country: "Saudi Arabia",
      age: 25,
      lastUpdated: "2025-10-18",
    },
  ];

  return (
    <div className="bg-[#252A30] rounded-2xl p-6 overflow-auto h-full">
      <h2 className="text-white text-xl font-semibold mb-4">Customers</h2>

      <table className="min-w-full border-collapse">
        <thead>
          <tr className="text-gray-300 text-left border-b border-gray-700">
            <th className="p-3">#</th>
            <th className="p-3">Full Name</th>
            <th className="p-3">Gender</th>
            <th className="p-3">Country</th>
            <th className="p-3">Age</th>
            <th className="p-3">Last Updated</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((c, index) => (
            <tr
              key={c.id}
              className="text-gray-200 border-b border-gray-700 hover:bg-[#2F343B] transition"
            >
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{c.fullName}</td>
              <td className="p-3">{c.gender}</td>
              <td className="p-3">{c.country}</td>
              <td className="p-3">{c.age}</td>
              <td className="p-3">{c.lastUpdated}</td>
              <td className="p-3 flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 rounded-md text-white text-sm hover:bg-blue-500 flex items-center gap-1">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-600 rounded-md text-white text-sm hover:bg-red-500 flex items-center gap-1">
                  Delete
                </button>
                <button className="px-3 py-1 bg-green-600 rounded-md text-white text-sm hover:bg-green-500 flex items-center gap-1">
                  <Eye className="w-4 h-4" /> View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
