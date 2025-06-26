import { useState } from 'react';

const Settings = () => {
  const [fullName, setFullName] = useState('Jenny P.');
  const [email, setEmail] = useState('jenny.p@example.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [fileName, setFileName] = useState('No file chosen');
  const [previewUrl, setPreviewUrl] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    } else {
      setFileName('No file chosen');
      setPreviewUrl('');
    }
  };

  const saveChanges = () => {
    if (fullName && email) {
      alert('Profile updated successfully!');
    } else {
      alert('Please fill in all required fields (Full Name, Email).');
    }
  };

  const updatePassword = () => {
    if (currentPassword && newPassword && confirmNewPassword) {
      if (newPassword !== confirmNewPassword) {
        alert('New Password and Confirm New Password do not match.');
        return;
      }
      alert('Password updated successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } else {
      alert('Please fill in all password fields.');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div
      className={`min-h-screen flex items-start justify-center p-6 ${
        darkMode
          ? 'bg-gradient-to-br from-black via-[#1a0900] to-black text-orange-500'
          : 'bg-gray-100 text-gray-800'
      }`}
    >
      <div
        className={`w-full max-w-4xl  shadow-2xl overflow-hidden ${
          darkMode
            ? 'bg-gradient-to-br from-black via-[#1a0900] to-black'
            : 'bg-white'
        }`}
      >
        {/* Header */}
        <div
          className={`py-6 px-8 text-center ${
            darkMode
              ? ''
              : 'bg-gray-50 text-gray-800'
          }`}
        >
          <h1 className="text-4xl font-extrabold tracking-wide">Profile Settings</h1>
        </div>

        {/* Profile Photo */}
        <section className="p-8">
          <h2 className="text-xl font-semibold mb-6 text-orange-400">Profile Photo</h2>
          <div className="grid grid-col md:flex-row items-center md:items-start gap-8">
            <div className="w-28 h-28 rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden bg-black shrink-0">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Profile Preview"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-orange-300 text-5xl font-extrabold select-none">JP</span>
              )}
            </div>
            <label
              className="cursor-pointer bg-gradient-to-r mr-52 btn from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2 px-5 rounded-md shadow-lg flex items-center select-none transition-transform transform hover:scale-105"
              title="Upload Profile Picture"
            >
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileUpload}
              />
              Choose File
              <span className="ml-3 text-sm text-gray-200 truncate max-w-xs">
                ({fileName})
              </span>
            </label>
          </div>
        </section>

        {/* Update Information */}
        <section className="p-8">
          <h2 className="text-xl font-semibold mb-6 text-orange-400">Update Information</h2>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className={`w-full p-4 rounded-lg ${
                  darkMode
                    ? 'bg-black text-white placeholder-gray-500 focus:ring-orange-600 focus:ring-2 focus:outline-none'
                    : 'bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-orange-600 focus:ring-2 focus:outline-none'
                } transition-shadow shadow-sm`}
                placeholder="Your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                autoComplete="name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full p-4 rounded-lg ${
                  darkMode
                    ? 'bg-black text-white placeholder-gray-500 focus:ring-orange-600 focus:ring-2 focus:outline-none'
                    : 'bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-orange-600 focus:ring-2 focus:outline-none'
                } transition-shadow shadow-sm`}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
          </div>
          <button
            onClick={saveChanges}
            className="mt-8 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-xl transition-transform transform hover:scale-105"
          >
            Save Changes
          </button>
        </section>

        {/* Change Password */}
        <section className="p-8">
          <h2 className="text-xl font-semibold mb-6 text-orange-400">Change Password</h2>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="currentPassword"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                className={`w-full p-4 rounded-lg ${
                  darkMode
                    ? 'bg-black text-white placeholder-gray-500 focus:ring-orange-600 focus:ring-2 focus:outline-none'
                    : 'bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-orange-600 focus:ring-2 focus:outline-none'
                } transition-shadow shadow-sm`}
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className={`w-full p-4 rounded-lg ${
                  darkMode
                    ? 'bg-black text-white placeholder-gray-500 focus:ring-orange-600 focus:ring-2 focus:outline-none'
                    : 'bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-orange-600 focus:ring-2 focus:outline-none'
                } transition-shadow shadow-sm`}
                placeholder="Create a new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                autoComplete="new-password"
              />
            </div>
            <div>
              <label
                htmlFor="confirmNewPassword"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmNewPassword"
                className={`w-full p-4 rounded-lg ${
                  darkMode
                    ? 'bg-black text-white placeholder-gray-500 focus:ring-orange-600 focus:ring-2 focus:outline-none'
                    : 'bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-orange-600 focus:ring-2 focus:outline-none'
                } transition-shadow shadow-sm`}
                placeholder="Confirm your new password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                autoComplete="new-password"
              />
            </div>
          </div>
          <button
            onClick={updatePassword}
            className="mt-8 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-xl transition-transform transform hover:scale-105"
          >
            Update Password
          </button>
        </section>

        {/* Dark Mode Toggle */}
        <section className="p-8 flex justify-between items-center">
          <span className="text-xl font-semibold text-orange-400 flex items-center gap-3 select-none">
            ☀️ Dark Mode
          </span>
          <label
            htmlFor="darkModeToggle"
            className="relative inline-flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="darkModeToggle"
              className="sr-only peer"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <div
              className={`w-14 h-7 rounded-full transition-colors duration-300 peer-focus:ring-4 peer-focus:ring-orange-300 ${
                darkMode ? 'bg-black peer-checked:bg-orange-500' : 'bg-gray-300 peer-checked:bg-orange-500'
              }`}
            >
              <span
                className={`absolute left-0 top-0.5 bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-7`}
              />
            </div>
          </label>
        </section>
      </div>
    </div>
  );
};

export default Settings;
