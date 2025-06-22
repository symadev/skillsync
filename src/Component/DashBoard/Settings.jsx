import { useState } from 'react';

const Settings = () => {
  const [fullName, setFullName] = useState('Jenny P.'); // Pre-fill for demonstration
  const [email, setEmail] = useState('jenny.p@example.com'); // Pre-fill for demonstration
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [fileName, setFileName] = useState('No file chosen');
  const [previewUrl, setPreviewUrl] = useState(''); // Initial state for profile pic
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for the black theme

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
      // Here you would typically send data to a backend API
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
      // Here you would typically send data to a backend API
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } else {
      alert('Please fill in all password fields.');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark-mode', !darkMode); // For global theme change if needed
  };

  return (
    // Outer container for the whole page background, now solid black
    <div className={`min-h-screen flex items-start justify-center p-6 ${darkMode ? 'bg-black text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
      {/* Main content container mimicking the card-like structure */}
      <div className={`w-full max-w-4xl rounded-lg shadow-xl overflow-hidden ${darkMode ? 'bg-[#0a0400]' : 'bg-white'} `}>
        
        {/* Header - Centered text */}
        <div className={`py-6 px-8 ${darkMode ? 'bg-black text-orange-400' : 'bg-gray-50 text-gray-800'} '}`}>
          <h1 className="text-3xl font-semibold text-center">Profile Settings</h1>
        </div>




   {/* Profile Photo Section - Grid view for content */}
        {/* REMOVED: border-b and its conditional classes */}
        <section className={`p-8`}>
          <h2 className="text-xl font-medium mb-5 text-orange-400 justify-start">Profile Photo</h2>
          {/* Changed from flex to grid, and adjusted alignment for grid */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center justify-items-center md:justify-items-start gap-4 md:gap-6">
            {/* Profile image placeholder/preview */}
            <div className="w-24 h-24 rounded-full border-2 border-orange-500 flex items-center justify-center overflow-hidden bg-black md:col-start-1">
              {previewUrl ? (
                <img src={previewUrl} alt="Profile Preview" className="w-full h-full object-cover rounded-full" />
              ) : (
                <span className="text-orange-300 text-4xl font-bold">JP</span> // Initials placeholder
              )}
            </div>
            {/* File input and label */}
            <label className="  space-x-2 cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 shadow-md md:col-start-1">
              <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
              <span>Choose File</span>
              <span className="text-sm text-gray-200">({fileName})</span>
            </label>
          </div>
        </section>




        {/* Update Information Section */}
        <section className={`p-8 border-b ${darkMode ? 'border-orange-700' : 'border-gray-200'}`}>
          <h2 className="text-xl font-medium mb-5 text-orange-400">Update Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-gray-300">Profile</label>
              <input
                type="text"
                id="fullName"
                className={`w-full p-3 rounded-md ${darkMode ? 'bg-black border border-orange-500 text-white placeholder-gray-500' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-orange-600`}
                placeholder="Your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className={`w-full p-3 rounded-md ${darkMode ? 'bg-black border border-orange-500 text-white placeholder-gray-500' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-orange-600`}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={saveChanges}
            className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:bg-orange-700 text-white font-semibold py-2.5 px-6 rounded-md transition-colors duration-200 shadow-md"
          >
            Save Changes
          </button>
        </section>

        {/* Change Password Section */}
        <section className={`p-8 border-b ${darkMode ? 'border-orange-700' : 'border-gray-200'}`}>
          <h2 className="text-xl font-medium mb-5 text-orange-400">Change Password</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium mb-2 text-gray-300">Current Password</label>
              <input
                type="password"
                id="currentPassword"
                className={`w-full p-3 rounded-md ${darkMode ? 'bg-black border border-orange-500 text-white placeholder-gray-500' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-orange-600`}
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium mb-2 text-gray-300">New Password</label>
              <input
                type="password"
                id="newPassword"
                className={`w-full p-3 rounded-md ${darkMode ? 'bg-black border border-orange-500 text-white placeholder-gray-500' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-orange-600`}
                placeholder="Create a new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirmNewPassword" className="block text-sm font-medium mb-2 text-gray-300">Confirm New Password</label>
              <input
                type="password"
                id="confirmNewPassword"
                className={`w-full p-3 rounded-md ${darkMode ? 'bg-black border border-orange-500 text-white placeholder-gray-500' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-orange-600`}
                placeholder="Confirm your new password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={updatePassword}
            className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:bg-orange-700 text-white font-semibold py-2.5 px-6 rounded-md transition-colors duration-200 shadow-md"
          >
            Update Password
          </button>
        </section>

        {/* Dark Mode Toggle Section */}
        <section className="p-8 flex justify-between items-center">
          <span className="text-xl font-medium text-orange-400 flex items-center gap-2">
            ☀️ Dark Mode
          </span>
          {/* Custom styled toggle switch */}
          <label htmlFor="darkModeToggle" className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="darkModeToggle"
              className="sr-only peer"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            {/* Slider track */}
            <div className={`w-12 h-6 ${darkMode ? 'bg-black peer-checked:bg-orange-500' : 'bg-gray-300 peer-checked:bg-orange-500'} rounded-full peer peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-300 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white`}></div>
          </label>
        </section>
      </div>
    </div>
  );
};

export default Settings;