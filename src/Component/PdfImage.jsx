import pdfImage from "../assets/images/pdf2.png"; 

const PdfImage = () => {
    return (
      <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={pdfImage}
            alt="PDF Export"
            className="max-w-[400px] w-full drop-shadow-xl"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text mb-4">
            Easily export your CV to PDF
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Create a resume online with our Templates and export a pixel-perfect PDF resume. As most employers’ preferred CV format, a PDF resume is ideal for applying through careers pages and job boards.
          </p>
          <button className="px-6 py-2 border border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white transition rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </section>
    );
};

export default PdfImage;