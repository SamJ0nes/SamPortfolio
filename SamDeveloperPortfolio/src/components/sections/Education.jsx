import { useState } from 'react';
import '../../styles/global.css'
import '../../styles/Education.css';
import { motion, AnimatePresence } from 'framer-motion';
import { boxVariantsUp, boxVariantsLeft } from '../../motionVariants';

const educationData = {
    university: {
        title: "Nottingham Trent University",
        degree: "BSc (Hons) Computing - 1st Class Honours 14/15 Credits",
        period: "09/2020 - 07/2024",
        years: [
            {
                year: "Year 4",
                overall: "Year 4 - stage 4 Qualify For Award: 1MID",
                modules: [
                    { name: "Data Visualisation & UX", grade: "High 1st" },
                    { name: "Serious Games", grade: "High 1st" },
                    { name: "Final Year Project - NET MAUI Cross-Platform App", grade: "Mid 1st" },
                    { name: "Mobile Platform Development", grade: "Low 1st" },
                    { name: "Information Systems Management", grade: "Low 1st" }
                ]
            },
            {
                year: "Year 2 & 3",
                overall: "Year 2 & 3 - stage 2 & 3 Pass Placement: 21HIGH",
                modules: [
                    { name: "Info & Database Engineering", grade: "Mid 1st" },
                    { name: "Internet Application Development", grade: "Mid 1st" },
                    { name: "Info Systems Development", grade: "Low 1st" },
                    { name: "Practical Project Management & Professional Development", grade: "High 2.1" },
                    { name: "Information Security", grade: "Mid 2.1" },
                    { name: "Interaction Design", grade: "Mid 2.1" },
                    { name: "Computing Placement at TBA Group", grade: "Mid 1st" }

                ]
            },
            {
                year: "Year 1",
                overall: "Year 1 - stage 1 (FHEQ Level 4): 21HIGH",
                modules: [
                    { name: "Web-Based Programming", grade: "Mid 1st" },
                    { name: "Internet Technology", grade: "Low 1st" },
                    { name: "Foundations of Comp & Tech", grade: "Low 1st" },
                    { name: "Essential Skills", grade: "Mid 2.1" },
                    { name: "Prof Development for Industry", grade: "Low 2.1" },
                    { name: "System Analysis & Design", grade: "High 2.2" },


                ]
            }
        ]
    },
    college: {
        title: "Aquinas College",
        degree: "A-Levels",
        period: "09/2018 - 07/2020",
        years: [
            {
                year: "A-Levels",
                modules: [
                    { name: "Computer Science", grade: "B" },
                    { name: "Economics", grade: "B" },
                    { name: "Statistics", grade: "C" }
                ]
            }
        ]
    },
    highschool: {
        title: "The Kingsway School",
        degree: "GCSEs",
        period: "09/2013 - 07/2018",
        years: [
            {
                year: "GCSEs",
                modules: [
                    { name: "Computer Science", grade: "7" },
                    { name: "D&T: Electronic Products", grade: "A" },
                    { name: "Geography", grade: "6" },
                    { name: "Mathematics", grade: "6" },
                    { name: "Physics", grade: "6" },
                    { name: "Biology Tier H", grade: "5" },
                    { name: "Chemistry Tier H", grade: "5" },
                    { name: "English Language", grade: "5" },
                    { name: "English Literature", grade: "5" }
                ]
            }
        ]
    }
};

const tabOptions = [
    { key: 'university', label: 'University' },
    { key: 'college', label: 'College' },
    { key: 'highschool', label: 'High School' }
];

const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.5 } },
    exit: { opacity: 0, y: -40, transition: { type: "tween", duration: 0.3 } }
};

const Education = () => {
    const [activeTab, setActiveTab] = useState('university');
    const edu = educationData[activeTab];

    return (
        <div className="educationOuter">
            <div className="educationContainer">
                <h2 className="educationTitle">My <span className='highlightWord'>Education</span></h2>
                <div className="educationTabs">
                    {tabOptions.map(tab => (
                        <button
                            key={tab.key}
                            className={`educationTab${activeTab === tab.key ? ' active' : ''}`}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <div className='educationContent' key={activeTab}>
                        <div className="eduInfoRow">
                            <div className="eduInfoCol">
                                <h3 className="educationInstitution">{edu.title}</h3>
                                <div className="educationDegree">{edu.degree}</div>
                                <div className="educationPeriod">{edu.period}</div>
                            </div>
                        </div>
                        <div className="eduTablesGrid">
                            {edu.years.map((year, yIdx) => (
                                <motion.div key={yIdx} className="eduYearSection" variants={boxVariantsLeft} initial="hidden" whileInView="visible" viewport={{ amount: 0.1 }}>
                                    <h4>{year.year} Modules & Grades:</h4>
                                    <table className="eduModulesTable">
                                        <thead>
                                            <tr>
                                                <th>Module</th>
                                                <th>Grade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {year.modules.map((mod, mIdx) => (
                                                <tr key={mIdx}>
                                                    <td>{mod.name}</td>
                                                    <td>{mod.grade}</td>
                                                </tr>
                                            ))}
                                            {activeTab === 'university' && year.overall && (
                                                <tr className="eduOverallRow">
                                                    <td colSpan={2}>{year.overall}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Education;
