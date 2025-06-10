import React from 'react';
import '../../styles/global.css'
import '../../styles/Projects.css';
import { motion } from 'framer-motion';
import { boxVariantsLeft, boxVariantsRight } from '../../motionVariants';

const projects = [
    {
        link: "https://youtu.be/Tx-U61np41M",
        name: "Bouldr",
        technology: "C#, .NET MAUI, ASP.NET Core Web API, SQL Server",
        period: "09/2023 - 12/2024",
        description: "Designed, Developed, Tested, and Documented a cross-platform application for my Final Year Project at University, awarded a First Class. The application is an innovative idea where climbing enthusiasts can create, compete in, spectate, and judge in climbing competitions. The app serves as a social platform where climbers can view live results for bouldering competitions.",
        details: [
            "Cross-Platform App using .NET MAUI that can be used on Windows, Mac, Android & iOS.",
            "Developed a RESTful Web API using ASP.NET Core to handle data operations and business logic.",
            "Implemented a SQL Server database to store user data, competition details, results, etc.",
            "Designed a user-friendly interface with a focus on usability and accessibility.",
        ]
    },
    {
        link: "https://youtu.be/Tx-U61np41M",
        name: "Blazor Bouldr",
        technology: "C#, .NET MAUI Blazor Hybrid & Web App, ASP.NET Core Web API, SQL Server, Blazor",
        period: "05/2025 - Present",
        description: "A new version of Bouldr, this project is a complete rewrite using Blazor for the front-end, providing a more modern and responsive user interface. It retains all the core functionalities of the original Bouldr app while enhancing performance and user experience.",
        details: [
            "Utilizes Blazor for a modern, responsive front-end experience.",
            "Improved performance and user experience with a focus on modern web standards.",
            "Maintains the core functionalities of the original Bouldr app.",
            "Continued use of ASP.NET Core Web API & SQL Server database for back-end services.",
            "Still in early development stages, with ongoing enhancements and features planned.",
        ]
    },
    {
        link: "https://github.com/SamJ0nes/food_bank_finder",
        name: "Food Bank Finder Mobile Application",
        technology: "Flutter, Dart, Firebase, Firestore, Google Maps API, Firebase Authentication",
        period: "09/2023 - 04/2024",
        description: "A mobile application developed for my university module , Mobile Platform Development, designed to help those in need, and those willing to donate find local food banks, aiming to help the UN SDG 2 - Zero Hunger. The app uses Flutter for cross-platform development and integrates with Firebase for backend services.",
        details: [
            "Cross-platform mobile application developed using Flutter and Dart.",
            "Integrated with Firebase for No-SQL backend services, including authentication.",
            "Utilized Firestore for real-time database capabilities, allowing users to find and contribute to local food banks.",
            "Incorporated Google Maps API to display food bank locations on a map, enhancing user experience with filter and search capabilities.",
            "Designed with a focus on user experience, ensuring easy navigation with onboarding screens and accessibility settings such as font size, colour correction, language.",
            "Co-working with food banks to ensure accurate and up-to-date information of stock avaliability for users.",
        ]
    },
    {
        link: "#home",
        name: "Website Portfolio",
        technology: "React.js, Vite, JavaScript, HTML, CSS",
        period: "06/2025 - Present",
        description: "A personal portfolio website showcasing my projects, skills, and experience. Built with React.js and Vite for a fast and modern web experience.",
        details: [
            "Developed using React.js and Vite for a modern, fast-loading web experience.",
            "Responsive design to ensure usability across various devices and screen sizes.",
            "Extensive use of JavaScript, HTML, and CSS to create a dynamic and interactive user interface.",
        ]
    },
    {
        link: "https://github.com/SamJ0nes/DVUX-ComparisonDashboard",
        name: "Data Visualisation & User Experience Dashboard Website",
        technology: "Chart.js, JavaScript, HTML, CSS, PHP, MySQL",
        period: "09/2023 - 04/2024",
        description: "A university project for my module, Data Visualisation & User Experience, where I created a website that visualises data from a MySQL database using Chart.js. The website provides an interactive dashboard for users to explore and understand data about sport & gym workout snacks.",
        details: [
            "Developed a web application using PHP and MySQL to manage and retrieve data.",
            "Utilized Chart.js to create interactive and visually appealing data visualisations.",
            "Implemented filters & facets to allow users to explore data based on various criteria and make informed decisions.",
            "Designed a user-friendly interface with a focus on usability and accessibility.",
            "Incorporated responsive design principles to ensure the website is accessible on various devices.",
        ]
    },
    {
        link: "",
        name: "Unity Game Development Serious Game - SDG 2: Zero Hunger",
        technology: "Chart.js, JavaScript, HTML, CSS, PHP, MySQL",
        period: "09/2023 - 04/2024",
        description: "A university project for my game development module, Serious Games, where I created an educational game using Unity to educate players about the UN SDG 2 - Zero Hunger. The game focuses on the challenges of food distribution, the importance of sustainable practices, and how to assist food banks near them.",
        details: [
            "Developed a serious game using Unity to educate players about the UN SDG 2 - Zero Hunger.",
            "Implemented game mechanics that simulate real-world challenges of food distribution and the importance of sustainable practices.",
            "Designed interactive gameplay that encourages players to learn about food banks and how they can assist in their local communities.",
            "Focused on creating an engaging and educational experience that raises awareness about food security issues.",
            "Incorporated elements of fun gamification to enhance user engagement and encourage learning outcomes.",
        ]
    },

];

function Projects() {
    return (
        <div className="containerOuter" id="projects">
            <div className="sectionContentContainer">
                <h2 className="projectTitle">My Personal & University Projects</h2>
                <small className='smallText'>* Click on the project names for video or repo code</small>
                <div className="projectListScroll">
                    <ul className="projectList">
                        {(() => {
                            let flip = true;
                            return projects.map((proj, idx) => {
                                const variant = flip ? boxVariantsLeft : boxVariantsRight;
                                flip = !flip;
                                return (
                                    <li key={idx}>
                                        <motion.div
                                            className="projectItem"
                                            variants={variant}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ amount: 0.1 }}
                                        >
                                            <a href={proj.link} target='_blank'>
                                                <h3 className="projectName">
                                                    {proj.name}
                                                    
                                                </h3>
                                            </a>
                                            <span className="projectTechnology"> - {proj.technology}</span>
                                            <div className="projectPeriod">{proj.period}</div>
                                            <p className="projectDescription">{proj.description}</p>
                                            <div className="projectDetails">
                                                <ul>
                                                    {proj.details && proj.details.map((detail, i) => (
                                                        <li key={i}>{detail}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    </li>
                                );
                            });
                        })()}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects;
