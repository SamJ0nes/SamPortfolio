import React from 'react';
import '../../styles/global.css'
import '../../styles/Experience.css';
import { motion } from 'framer-motion';
import { boxVariantsUp } from '../../motionVariants';

const experiences = [
    {
        role: "Placement Software Engineer",
        company: "TBA Group",
        period: "08/2022 - 08/2023",
        description: "During my placement year, I worked as a Software Engineer at TBA Group, where I was involved in developing the Back-End of a microservices web application within an agile scrum team, enhancing my skills in professional software development, teamwork, and testing.",
        skills: "C#, .NET, SQL Server, Docker, Git, Agile, CI/CD, Azure, Unit Testing, Integration Testing",
        details: [
            "Back-End development using C# on .NET Framework web application for a next-generation automated Terminal Operating System (TOS).",
            "Experience writing automated tests, such as Unit & Integration Tests ,using Moq & NUnit, to improve and ensure our software quality using technologies such as NUnit and Moq.",
            "Effectively working alongside a team of experienced Software Engineers & Architects in a Nexus of Agile Scrum Teams.",
            "Use of the Docker platform to assist in building, running, testing, and deploying our microservices applications quickly and efficiently. ",
            "Knowledge gained from interacting, querying, and adjusting a large-scale SQL Server database.",
            "Use of Git for version control, including branching, merging, and pull requests.",
            "Experience with CI/CD pipelines to automate the deployment process, ensuring faster and more reliable releases.",
            "Exposure to cloud technologies, particularly Microsoft Azure, for deploying and managing applications.",
            "Collaboration with cross-functional teams, including Product Owners and Quality Assurance, to deliver high-quality software solutions.",
        ]
    }
];

function Experience() {
    return (
        <div className="containerOuter">
            <div className="sectionContentContainer">
                <h2 className="experienceTitle">Work Experience</h2>
                <div className="experienceListScroll">
                    <ul className="experienceList">
                        {experiences.map((exp, idx) => (
                            <li key={idx}>
                                <motion.div className="experienceItem" variants={boxVariantsUp} initial="hidden" whileInView="visible" viewport={{amount: 0.3 }}>
                                    <h3 className="experienceRole">
                                        {exp.role}
                                        <span className="experienceCompany"> @ {exp.company}</span>
                                    </h3>
                                    <div className="experiencePeriod">{exp.period}</div>
                                    <p className="experienceDescription">{exp.description}</p>
                                    <p className="experienceSkills">{exp.skills}</p>
                                    <div className="experienceDetails">
                                        <ul>
                                            {exp.details && exp.details.map((detail, i) => (
                                                <li key={i}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Experience;
