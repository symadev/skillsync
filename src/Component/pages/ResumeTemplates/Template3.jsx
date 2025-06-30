import { useResume } from "../../Provider/ResumeContext";

import profileImage from "../../../assets/images/image.png"

import Education from "../AllInfo/Education";
import Skills from "../AllInfo/Skills";
import Projects from "../AllInfo/Projects";
import PersonalInfoCard from "../AllInfo/PersonalInfoCard";
import Work from "../AllInfo/Work";

import personalInfo from "../../../Data/PersonalInfoData";
import educationInfo from "../../../Data/educationInfo";
import skillsData from "../../../Data/skills";
import projectData from "../../../Data/projectData";
import workData from "../../../Data/workData";

const Template3 = ({ primaryColor = "blue" }) => {
    const { formData } = useResume();
    const { profileImage: uploadedImage } = formData;


    const colorStyles = {
        purple: {
            headerBg: "bg-purple-700",
            text: "text-purple-700",
        },
        green: {
            headerBg: "bg-green-700",
            text: "text-green-700",
        },
        blue: {
            headerBg: "bg-blue-700",
            text: "text-blue-700",
        },
        orange: {
            headerBg: "bg-orange-600",
            text: "text-orange-600",
        },
        gray: {
            headerBg: "bg-gray-600",
            text: "text-gray-600",
        },
    };

    const colors = colorStyles[primaryColor] || colorStyles.blue;

    return (
        <div
            className="max-w-4xl mx-auto bg-white text-black shadow rounded-lg overflow-hidden flex flex-col md:flex-row p-4 gap-4"
            id="resume-output"
        >
            {/* Sidebar with Image and Info */}
            <aside className="w-full md:w-1/3 bg-gray-100 rounded-md p-3">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3">

                    <img
                        src={uploadedImage || profileImage} // uploaded না থাকলে fallback static image
                        alt="Profile"
                        className={`w-20 h-20 rounded-full object-cover border-4 ${colors.text} shadow`}
                    />




                </div>
            </aside>

            {/* Main Content */}
            <main className="w-full md:w-2/3 flex flex-col space-y-4">

                <div className={`space-y-1 text-black`}>
                    <PersonalInfoCard {...personalInfo} primaryColor={primaryColor} />
                </div>
                {/* Skills */}
                <div>
                    <h3 className={`text-lg font-semibold ${colors.text} border-b pb-0.5`}>Skills</h3>
                    <Skills {...skillsData} />
                </div>

                {/* Projects */}
                <div>
                    <h3 className={`text-lg font-semibold ${colors.text} border-b pb-0.5`}>Projects</h3>
                    <Projects {...projectData} />
                </div>

                {/* Work History */}
                <div>
                    <h3 className={`text-lg font-semibold ${colors.text} border-b pb-0.5`}>Work History</h3>
                    <Work {...workData} />
                </div>

                {/* Education */}
                <div>
                    <h3 className={`text-lg font-semibold ${colors.text} border-b pb-0.5`}>Education</h3>
                    <Education {...educationInfo} />
                </div>
            </main>
             <div className="absolute top-4 right-4">
       
      </div>
        </div>
    );
};

export default Template3;
