import { Link } from "react-router-dom";


const CtaSection = () => {
    return (
        <div className="bg-black py-16 px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-700 to-orange-400 rounded-2xl py-12 px-6 text-center text-white shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-snug">
                    Transform your career today and <br />
                    join thousands of satisfied users
                </h2>
                <Link to ="/dashboard/resume" className="bg-black hover:bg-orange-700 text-white font-semibold py-4 px-6 rounded-full transition duration-300">
                    Create Your Resume Now
                </Link>
            </div>
        </div>
    );
};

export default CtaSection;