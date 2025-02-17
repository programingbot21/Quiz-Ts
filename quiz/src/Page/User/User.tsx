// import React, { useState } from "react";
// import Sidebar from "../../components/Sidebar/Sidebar";


// const Users: React.FC = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: "User1" },
//     { id: 2, name: "User2" },
//   ]);

//   const handleDelete = (id: number) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="p-6 w-full">
//         <h2 className="text-2xl font-bold mb-4">User Management</h2>
//         <table className="w-full bg-white shadow-md rounded-lg">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="p-2">ID</th>
//               <th className="p-2">Name</th>
//               <th className="p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id} className="border-b">
//                 <td className="p-2">{user.id}</td>
//                 <td className="p-2">{user.name}</td>
//                 <td className="p-2">
//                   <button onClick={() => handleDelete(user.id)} className="bg-red-600 text-white px-3 py-1 rounded">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Users;
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const Users: React.FC = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
  ]);
  const [newUserName, setNewUserName] = useState("");

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleCreate = () => {
    const newUser = {
      id: users.length ? users[users.length - 1].id + 1 : 1,
      name: newUserName,
    };
    setUsers([...users, newUser]);
    setNewUserName("");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 w-full">
        <h2 className="text-2xl font-bold mb-4">User Management</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="New User Name"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            className="border p-2 mr-2"
          />
          <button onClick={handleCreate} className="bg-green-600 text-white px-3 py-1 rounded">
            Create
          </button>
        </div>
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">
                  <button onClick={() => handleDelete(user.id)} className="bg-red-600 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;