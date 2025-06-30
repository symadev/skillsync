import { useResume } from "../../Provider/ResumeContext";
import Education from "../AllInfo/Education";
import Skills from "../AllInfo/Skills";
import Projects from "../AllInfo/Projects";

import personalInfo from "../../../Data/PersonalInfoData";
import projectData from "../../../Data/projectData";
import workData from "../../../Data/workData";
import Work from "../AllInfo/Work";
import educationInfo from "../../../Data/educationInfo";
import skillsData from "../../../Data/skills";

import profileImage from "../../../assets/images/image.png"

const Template4 = ({ primaryColor = "purple" }) => {
    const { formData } = useResume();
    const {

    } = formData;
    const { profileImage: uploadedImage } = formData;

    // Destructure only name, phone, and email from personalInfo
    const { name, phone, email } = personalInfo;

    const colorStyles = {
        purple: {
            leftBg: "bg-purple-100",
            headerBg: "bg-purple-700",
            text: "text-purple-700",
            border: "border-purple-700",
        },
        green: {
            leftBg: "bg-green-100",
            headerBg: "bg-green-700",
            text: "text-green-700",
            border: "border-green-700",
        },
        blue: {
            leftBg: "bg-blue-100",
            headerBg: "bg-blue-700",
            text: "text-blue-700",
            border: "border-blue-700",
        },
        orange: {
            leftBg: "bg-orange-100",
            headerBg: "bg-orange-600",
            text: "text-orange-600",
            border: "border-orange-600",
        },
    };

    const colors = colorStyles[primaryColor] || colorStyles.purple;

    return (
        <div className="max-w-4xl mx-auto bg-white text-black shadow-lg" id="resume-output">
            <div className="flex min-h-screen">
                {/* Left Column - Personal Info & Skills */}
                <div className={`w-1/3 ${colors.leftBg} p-6 space-y-6`}>

                    <div className="grid grid-cols-1 gap-2 justify-items-center text-center">
                        {/* Profile Image */}
                        <img
                            src={uploadedImage || profileImage}
                            alt="Profile"
                            className={`w-20 h-20 rounded-full object-cover border-4 ${colors.text} shadow`}
                        />

                        {/* Name */}
                        <h1 className={`font-bold text-sm text-${primaryColor}-700`}>{name}</h1>

                        {/* Phone */}
                        <p className="text-[10px] text-black">Phone: {phone}</p>
                    </div>



                    {/* Skills Section */}
                    <div className="space-y-4">
                        <h3 className={`text-lg font-bold ${colors.text} border-b-2 ${colors.border} pb-2`}>
                            Skills
                        </h3>
                        <div className="text-sm">
                            <Skills {...skillsData} />
                        </div>
                    </div>
                </div>

                {/* Right Column - Work, Projects, Education */}
                <div className="w-2/3 p-6 space-y-6">
                    {/* Work History */}
                    <div className="space-y-3">
                        <h3 className={`text-xl font-bold ${colors.text} border-b-2 ${colors.border} pb-2`}>
                            Work History
                        </h3>
                        <Work {...workData} />
                    </div>

                    {/* Projects */}
                    <div className="space-y-3">
                        <h3 className={`text-xl font-bold ${colors.text} border-b-2 ${colors.border} pb-2`}>
                            Projects
                        </h3>
                        <Projects {...projectData} />
                    </div>

                    {/* Education */}
                    <div className="space-y-3">
                        <h3 className={`text-xl font-bold ${colors.text} border-b-2 ${colors.border} pb-2`}>
                            Education
                        </h3>
                        <Education {...educationInfo} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Template4;