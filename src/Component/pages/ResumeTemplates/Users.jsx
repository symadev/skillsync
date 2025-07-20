import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { FaTrash, FaUserShield, FaUser, FaCrown } from "react-icons/fa";
import UseAxiosSecure from "../../AdminRoutes/UseAxiosSecure";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newRole, setNewRole] = useState("");
  const token = localStorage.getItem("access-token");
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("users", { headers: { Authorization: `Bearer ${token}` } })
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
    axiosSecure
      .patch(`/users/${selectedUser._id}/role`, { role: newRole })
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
    axiosSecure
      .delete(`/users/${id}`)
      .then(() => {
        toast.success("User deleted successfully");
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      })
      .catch((err) => {
        toast.error("Could not delete user: " + err.message);
      });
  };

  return (
    <div className="min-h-screen bg-black p-4 md:p-6">
      <div className="bg-gradient-to-br from-orange-500 via-orange-700 to-black p-4 md:p-6 rounded-xl shadow-lg max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Manage Users</h2>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gradient-to-r from-orange-700 to-orange-400 w-full md:w-80 px-4 py-2 rounded text-white placeholder-white focus:outline-none"
          />
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-4 py-2 bg-gradient-to-r from-orange-700 to-orange-400 text-white rounded w-full md:w-auto"
          >
            <option value="">All Roles</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="premium">Premium User</option>
          </select>
        </div>

        {/* Table */}
        {loading ? (
          <p className="text-center text-white">Loading users...</p>
        ) : filteredUsers.length === 0 ? (
          <p className="text-center text-white">No users found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2 min-w-[700px]">
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
                  <tr key={user._id} className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white transition">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2 capitalize flex items-center gap-1">
                      {user.role === "admin" && <FaUserShield />}
                      {user.role === "user" && <FaUser />}
                      {user.role === "premium" && <FaCrown />}
                      {user.role}
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => openRoleModal(user)}
                        className="bg-orange-400 px-3 py-1 rounded text-white font-semibold hover:bg-orange-600"
                      >
                        Change Role
                      </button>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="bg-red-600 px-3 py-1 rounded text-white hover:bg-red-700 flex items-center gap-1"
                      >
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="max-w-md mx-auto mt-24 p-6 bg-black border border-orange-500 rounded-lg shadow-xl text-white"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Change User Role</h2>
          <p className="text-center mb-4">
            Changing role for <span className="font-semibold">{selectedUser?.name}</span>
          </p>
          <select
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            className="w-full px-4 py-2 bg-orange-100 text-black rounded mb-4"
          >
            <option value="user">👤 User</option>
            <option value="admin">🛡️ Admin</option>
            <option value="premium">👑 Premium</option>
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
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Update Role
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Users;
