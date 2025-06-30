import { useResume } from "../../Provider/ResumeContext";
import Education from "../AllInfo/Education";
import Skills from "../AllInfo/Skills";
import Projects from "../AllInfo/Projects";
import Work from "../AllInfo/Work";

import personalInfo from "../../../Data/PersonalInfoData";
import projectData from "../../../Data/projectData";
import workData from "../../../Data/workData";
import educationInfo from "../../../Data/educationInfo";
import skillsData from "../../../Data/skills";

import profileImage from "../../../assets/images/image.png";

const Template4 = ({ primaryColor = "purple" }) => {
    const { formData } = useResume();
    const {
        name = "",
        phone = "",
        surname = "",
        city = "",
        postcode = "",
        country = "",
        skills = [],
        projects = [],
        experience = [],
        education = [],
        profileImage: uploadedImage,
    } = formData || {};

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

    // Use fallback personal info if formData fields are empty
    const finalName = name || personalInfo.name;
    const finalSurname = surname || personalInfo.surname;
    const finalPhone = phone || personalInfo.phone;

    // Use fallback data arrays directly
    const skillsToShow = skills.length > 0 ? skills : skillsData;
    const projectsToShow = projects.length > 0 ? projects : projectData;
    const experienceToShow = experience.length > 0 ? experience : workData;
    const educationToShow = education.length > 0 ? education : educationInfo;

    return (
        <div className="max-w-4xl mx-auto bg-white text-black shadow-lg" id="resume-output">
            <div className="flex min-h-screen">
                {/* Left Column - Personal Info & Skills */}
                <div className={`${colors.leftBg} w-1/3 p-6 space-y-6`}>
                    <div className="grid grid-cols-1 gap-2 justify-items-center text-center">
                        <img
                            src={uploadedImage ? uploadedImage : profileImage}
                            alt="Profile"
                            className={`w-20 h-20 rounded-full object-cover border-4 ${colors.text} shadow`}
                        />
                        <h1 className={`font-bold text-sm ${colors.text}`}>{`${finalName} ${finalSurname}`}</h1>
                        <p className="text-[10px] text-black">Phone: {finalPhone}</p>

                        {/* City, Postcode, Country */}
                        <div className="text-[10px] text-black space-y-1">
                            {/* City, Postcode, Country in one line */}
                            <p className="text-[10px] text-black">
                                {[city, postcode, country].filter(Boolean).join(", ")}
                            </p>

                        </div>
                    </div>

                    {/* Skills */}
                    {skillsToShow.length > 0 && (
                        <div className="space-y-4">
                            <h3 className={`text-lg font-bold ${colors.text} border-b-2 ${colors.border} pb-2`}>
                                Skills
                            </h3>
                            <Skills skills={skillsToShow} />
                        </div>
                    )}
                </div>

                {/* Right Column - Work, Projects, Education */}
                <div className="w-2/3 p-6 space-y-6">
                    {/* Work History */}
                    {experienceToShow.length > 0 && (
                        <div className="space-y-3">
                            <h3 className={`text-xl font-bold ${colors.text} border-b-2 ${colors.border} pb-2`}>
                                Work History
                            </h3>
                            <Work experience={experienceToShow} />
                        </div>
                    )}

                    {/* Projects */}
                    {projectsToShow.length > 0 && (
                        <div className="space-y-3">
                            <h3 className={`text-xl font-bold ${colors.text} border-b-2 ${colors.border} pb-2`}>
                                Projects
                            </h3>
                            <Projects projects={projectsToShow} />
                        </div>
                    )}

                    {/* Education */}
                    {educationToShow.length > 0 && (
                        <div className="space-y-3">
                            <h3 className={`text-xl font-bold ${colors.text} border-b-2 ${colors.border} pb-2`}>
                                Education
                            </h3>
                            <Education education={educationToShow} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Template4;
