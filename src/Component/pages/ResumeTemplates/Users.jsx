import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "react-modal";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newRole, setNewRole] = useState("");
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Could not load users: " + err.message);
        setLoading(false);
      });
  }, [token]);

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter ? user.role === roleFilter : true;
    return matchesSearch && matchesRole;
  });

  const openRoleModal = (user) => {
    setSelectedUser(user);
    setNewRole(user.role);
    setIsModalOpen(true);
  };

  const updateRole = () => {
    axios
      .patch(
        `http://localhost:5000/user/${selectedUser._id}/role`,
        { role: newRole },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        toast.success("Role updated successfully");
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === selectedUser._id ? { ...user, role: newRole } : user
          )
        );
        setIsModalOpen(false);
      })
      .catch((err) => {
        toast.error("Could not update role: " + err.message);
      });
  };

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:5000/user/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success("User deleted successfully");
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      })
      .catch((err) => {
        toast.error("Could not delete user: " + err.message);
      });
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="bg-gradient-to-br from-orange-500 via-orange-700 to-black p-6 rounded-xl shadow-lg max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6"> Manage Users</h2>

        {/* Top Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">➕ Add New User</button>

          <input
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-orange-600 text-white w-80 px-2 py-2 rounded hover:bg-orange-700"
          />

          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-4 py-2 bg-orange-700 text-white rounded hover:bg-orange-400"
          >
            <option value="">All Roles</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="premium">Premium User</option>
          </select>
        </div>

        {/* User Table */}
        {loading ? (
          <p className="text-center text-white">Loading users...</p>
        ) : filteredUsers.length === 0 ? (
          <p className="text-center text-white">No users found.</p>
        ) : (
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-white text-sm md:text-base border-b border-orange-400">
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Change Role</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr
                  key={user._id}
                  className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white transition"
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2 capitalize">{user.role}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => openRoleModal(user)}
                      className="bg-orange-500 px-3 py-1 rounded text-black font-semibold hover:bg-orange-600"
                    >
                      Change Role
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="bg-red-600 px-3 py-1 rounded text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Modal for Role Update */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="max-w-md mx-auto mt-24 p-6 bg-black border border-orange-500 rounded-lg shadow-xl text-white"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <h2 className="text-xl font-bold mb-4">Update Role</h2>
          <p className="mb-2">User: {selectedUser?.name}</p>
          <select
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            className="w-full px-4 py-2 bg-orange-100 text-black rounded mb-4"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="premium">Premium User</option>
          </select>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={updateRole}
              className="px-4 py-2 bg-orange-500 text-black rounded font-semibold hover:bg-orange-600"
            >
              Update
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Users;