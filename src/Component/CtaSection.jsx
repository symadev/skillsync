

const CtaSection = () => {
    return (
        <div className="bg-black py-16 px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-700 to-orange-400 rounded-2xl py-12 px-6 text-center text-white shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                    Transform your career today and <br />
                    join thousands of satisfied users
                </h2>
                <button className="bg-black hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                    Create Your Resume Now
                </button>
            </div>
        </div>
    );
};

export default CtaSection;