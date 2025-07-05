import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { FaCopy, FaShareAlt } from "react-icons/fa";
Modal.setAppElement('#root');

const CtaSection = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 

  const shareLink = `https://skillsync.com/share/${user?.email}`;
   if (!user || !user.email) {
  return null; // বা fallback UI দেখাও
}
console.log(user);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    alert("Share link copied to clipboard!");
  };

  return (
    <div className="bg-black py-16 px-6">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-700 to-orange-400 rounded-2xl py-12 px-6 text-center text-white shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-snug">
          Transform your career today and <br />
          join thousands of satisfied users
        </h2>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/dashboard/resume"
            className="bg-black hover:bg-orange-700 text-white font-semibold py-4 px-6 rounded-full transition duration-300"
          >
            Create Your Resume Now
          </Link>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-orange-700 font-semibold py-4 px-6 rounded-full transition duration-300 flex items-center gap-2"
          >
            <FaShareAlt /> Share My Resume
          </button>
        </div>
      </div>

      {/* Modal for Share Link */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Share Link Modal"
        className="bg-white max-w-md mx-auto mt-40 p-6 rounded-lg shadow-lg outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">Your Shareable Link</h2>
        <div className="flex items-center border rounded px-2 py-1 mb-4">
          <input
            type="text"
            value={shareLink}
            readOnly
            className="flex-1 text-sm text-gray-800 bg-transparent outline-none"
          />
          <button
            onClick={handleCopy}
            className="ml-2 text-orange-700 hover:text-orange-900"
          >
            <FaCopy />
          </button>
        </div>
        <button
          onClick={() => setIsModalOpen(false)}
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default CtaSection;


//প্রোডাকশনে শেয়ারেবল লিংক ব্যবহার করতে হলে তোমার অবশ্যই একটা রিয়েল ডোমেইন নাম লাগবে।


