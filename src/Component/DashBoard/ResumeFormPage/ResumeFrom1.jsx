import { useState } from 'react';

const ResumeForm1 = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;
  
  const [formData, setFormData] = useState({
    name: 'Nusrat',
    surname: 'Jahan',
    city: 'Chittagong',
    postcode: '4000',
    country: 'Bangladesh',
    phone: '31 251 5678',
    email: 'symasultana0@gmail.com'
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    console.log('Next: Education');
  };

  const handlePreview = () => {
    console.log('Preview resume');
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  const steps = [
    { id: 1, name: 'Personal Info', active: true },
    { id: 2, name: 'Education', active: false },
    { id: 3, name: 'Experience', active: false },
    { id: 4, name: 'Skills', active: false },
    { id: 5, name: 'Projects', active: false },
    { id: 6, name: 'Summary', active: false }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header with Progress Bar */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white p-6">
        <div className="max-w-7xl mx-auto">
          {/* Go Back Button */}
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 text-white hover:text-orange-200 transition-colors duration-200 font-medium mb-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </button>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold">Resume Completion</span>
              <span className="font-bold">{Math.round(progressPercentage)}% Complete</span>
            </div>
            <div className="w-full bg-gray-800/30 rounded-full h-4 shadow-inner">
              <div 
                className="bg-gradient-to-r from-amber-400 via-orange-400 to-orange-500 h-4 rounded-full transition-all duration-700 shadow-lg relative overflow-hidden"
                style={{ width: `${progressPercentage}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between text-xs">
            {steps.map((step) => (
              <div 
                key={step.id}
                className={`flex flex-col items-center transition-all duration-300 ${
                  step.active ? 'text-amber-200 scale-110' : 'text-white/60'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 font-bold transition-all duration-300 ${
                  step.active 
                    ? 'bg-gradient-to-br from-amber-300 to-orange-400 text-gray-900 shadow-lg' 
                    : 'bg-gray-800/40 border border-white/20'
                }`}>
                  {step.id}
                </div>
                <span className="font-medium">{step.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Side - Form */}
          <div className="bg-black rounded-xl shadow-2xl p-8 border border-orange-500/20">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                What's the best way for employers to contact you?
              </h1>
              <p className="text-gray-300">
                We suggest including an email and phone number.
              </p>
              <p className="text-sm text-orange-400 mt-2">
                <span className="text-red-400">*</span> Indicates a required field
              </p>
            </div>

            {/* Profile Picture Upload */}
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden flex items-center justify-center border border-orange-500/30">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  )}
                </div>
                <div>
                  <label className="cursor-pointer bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-200 shadow-lg font-medium">
                    Upload Photo
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  NAME <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3  bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg focus:border-orange-500 focus:outline-none transition-all duration-200 text-white placeholder-gray-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  SURNAME <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3  bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg focus:border-orange-500 focus:outline-none transition-all duration-200 text-white placeholder-gray-400"
                  placeholder="Enter your surname"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  CITY
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3  bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg focus:border-orange-500 focus:outline-none transition-all duration-200 text-white placeholder-gray-400"
                  placeholder="Enter your city"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  POSTCODE
                </label>
                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3  bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg focus:border-orange-500 focus:outline-none transition-all duration-200 text-white placeholder-gray-400"
                  placeholder="Enter postcode"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  COUNTRY
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3  bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg focus:border-orange-500 focus:outline-none transition-all duration-200 text-white placeholder-gray-400"
                  placeholder="Enter your country"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  PHONE
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3  bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg focus:border-orange-500 focus:outline-none transition-all duration-200 text-white placeholder-gray-400"
                  placeholder="Enter phone number"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  EMAIL <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3  bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg focus:border-orange-500 focus:outline-none transition-all duration-200 text-white placeholder-gray-400 pr-10"
                    placeholder="Enter your email"
                  />
                  <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handlePreview}
                className="px-6 py-3 border-2 border-orange-500 text-orange-400 rounded-lg hover:bg-orange-500/10 transition-all duration-200 font-semibold"
              >
                Preview
              </button>
              <button
                onClick={handleNext}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-200 font-semibold shadow-lg"
              >
                Next: Education
              </button>
            </div>
          </div>

          {/* Right Side - Preview */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl p-6 border border-orange-500/20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Live Preview</h2>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L10 4.414 4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-orange-400">42%</span>
                </div>
                <span>Higher response rate from recruiters</span>
              </div>
            </div>

            {/* Template Preview */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-4 min-h-96 border-2 border-dashed border-orange-500/30">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-4 rounded-lg mb-4 shadow-lg">
                <h3 className="text-lg font-bold">{formData.name} {formData.surname}</h3>
                <p className="text-sm opacity-90">Professional Resume</p>
                <div className="text-xs mt-2 space-y-1">
                  <p>{formData.city}, {formData.postcode}</p>
                  <p>{formData.country}</p>
                  <p>{formData.phone}</p>
                  <p>{formData.email}</p>
                </div>
              </div>
              
              <div className="space-y-4 text-sm text-gray-300">
                <div>
                  <h4 className="font-semibold text-orange-400 border-b border-orange-500/30 pb-1">Professional Experience</h4>
                  <p className="mt-2">Your work experience will appear here...</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-400 border-b border-orange-500/30 pb-1">Education</h4>
                  <p className="mt-2">Your education details will appear here...</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-400 border-b border-orange-500/30 pb-1">Skills</h4>
                  <p className="mt-2">Your skills will appear here...</p>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <button className="text-orange-400 hover:text-orange-300 font-semibold text-sm underline transition-colors duration-200">
                Change template
              </button>
            </div>

            <div className="mt-4 text-xs text-gray-400">
              <sup>1</sup> The results are based on a study with over 1000 participants, among whom 287 used resume tools provided on our family sites.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm1;