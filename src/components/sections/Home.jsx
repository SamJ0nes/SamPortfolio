import reactLogo from '/assets/react.svg'
import linkedInLogo from '/assets/LinkedIn_icon.svg.webp'
import gitHubLogoWhite from '/assets/github-mark-white.png'
import '../../styles/global.css'
import '../../styles/Home.css'
import { motion } from 'framer-motion';
import { boxVariantsLeft, boxVariantsRight, boxVariantsFade } from '../../motionVariants';

const Home = () => {

    return (
        <>
            <motion.div className="homeContainer" variants={boxVariantsFade} initial="hidden" whileInView="visible" viewport={{amount: 0.1 }}>
                <div className="columnsContainer">
                    <div className="leftColumn">
                        <motion.div className="infoContainer" variants={boxVariantsLeft} initial="hidden" whileInView="visible" viewport={{amount: 0.5 }}>
                            <h1>_______________________</h1>
                            <h1>I'm <span className="highlightWord">Sam</span>, a Graduate Software Developer.</h1>

                        </motion.div>
                    </div>

                    <div className="rightColumn">
                        <div className="madeWithContainer">
                            <p>Made with React</p>
                            <a href="https://react.dev" target='_blank'>
                                <img src={reactLogo} className="logo react" alt="React Logo"></img>
                            </a>
                        </div>
                        <motion.div className="sideInfo" variants={boxVariantsRight} initial="hidden" whileInView="visible" viewport={{amount: 0.3 }}>
                            <h2>First Class Graduate - Computing BSc Hons</h2>
                            <p style={{ fontStyle: "italic", fontSize: 17 }}>
                                Studied a 4 year Computing course at Nottingham Trent University, including a year with an Industry Placement
                                <a
                                    href="#about"
                                    onClick={e => {
                                        e.preventDefault();
                                        const aboutSection = document.getElementById('about');
                                        if (aboutSection) {
                                            aboutSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                > read more...</a>
                            </p>
                        </motion.div>
                        <div className="sideSocial">
                            <h2 style={{float:"left"}}>Find me</h2>
                            <a href="https://www.linkedin.com/in/sam-jones-88493b224/" target='_blank'>
                                <img src={linkedInLogo} className="logo linkedIn" alt="LinkedIn Logo"></img>
                            </a>
                            <a href="https://github.com/SamJ0nes" target='_blank'>
                                <img src={gitHubLogoWhite} className="logo gitHubWhite" alt="LinkedIn Logo"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Home;