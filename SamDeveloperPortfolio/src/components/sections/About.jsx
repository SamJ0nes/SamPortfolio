import trentLogo from '/assets/Nottingham_Trent_University_shield_logo.png'
import SamPic from '/assets/Sam_Background_Explore.jpg'

import '../../styles/global.css'
import '../../styles/About.css'
import { motion } from 'framer-motion';
import { boxVariantsLeft, boxVariantsRight, boxVariantsFade } from '../../motionVariants';

const About = () => (
    <div className="aboutContainer">
        <div className='aboutHeaderContainer'>
            <h2><span className='highlightWord'>About</span> Me</h2>

        </div>
        <div className='aboutContentContainer'>
            <motion.div className='samPicContainer' variants={boxVariantsFade} initial="hidden" whileInView="visible" viewport={{amount: 0.1 }}>
                <img className='samPic' src={SamPic}></img>
            </motion.div>
            <div className='boxContainer'>
                <motion.div
                    className="aboutBox"
                    variants={boxVariantsLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.5 }}
                >
                    <div className="careerHeaderInline">
                        <h3>What Am I pursuing For My Career?</h3>
                        <a href="https://www.ntu.ac.uk/" target='_blank'>
                            <img src={trentLogo} className="logo ntu" alt="NTU Logo"></img>
                        </a>
                    </div>
                    <p>
                        As a driven, dedicated, & passionate 1st-class BSc Computing graduate from Nottingham Trent University,
                        currently I am seeking a postgraduate role in Software Development to continue my career. I have a particular
                        interest in Back-End development with experience in the .NET ecosystem both Framework & Core alongside a good
                        database architecture skillset. However, a good amount of experience in Front-End & Full-Stack Development with
                        Web Programming (such as this website), Flutter Mobile Development, & .NET MAUI Cross-Platform Development.
                        Previously, I worked as a Software Engineer during my University Placement at TBA Group, where I developed the
                        Back-End of a C# .NET Framework web application.
                    </p>
                </motion.div>
                <motion.div
                    className="aboutBox"
                    variants={boxVariantsRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.3 }}
                >
                    <h3>What do I enjoy?</h3>
                    <p>I enjoy solving problems, learning new technologies, and creating impactful software. With my main interests lying in Back-End
                        development, I have developed key skills in Object-Ortientated Programming, Normalization & Standardization, Web API Design &
                        Development. However I do think principles such as good commenting practice, code efficiency with necessary decomposition, and
                        thorough test coverage is essential for me to continue my aspirational career journey. Please feel free to check out my projects
                        below, which showcase my skills and interests in software development, as well as my GitHub for more examples of my work.
                    </p>
                </motion.div>
            </div>
        </div>
    </div>
);

export default About;
