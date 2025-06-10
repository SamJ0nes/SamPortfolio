import React, { useEffect, useState } from 'react';

const sections = ['home', 'about', 'experience', 'education', 'projects', 'contact'];

export default function Sidebar() {

    const [activeSection, setActiveSection] = useState('home');
    const initialMobile = window.innerWidth <= 1100;
    const [isMobile, setIsMobile] = useState(initialMobile);
    const [isOpen, setIsOpen] = useState(!initialMobile);
    const [hoveredSection, setHoveredSection] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(

            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {

        const handleResize = () => {
            const mobile = window.innerWidth <= 1100;
            setIsMobile(mobile);
            setIsOpen(!mobile);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLinkClick = (section) => {
        const target = document.getElementById(section);

        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        if (isMobile) setIsOpen(false);
    };


    return (
        <>
            {isMobile && (
                <button onClick={() => setIsOpen(prev => !prev)} style={styles.toggleButton}>
                    {isOpen ? <i className="bi bi-x-circle"></i> : <i className="bi bi-list"></i>}</button>
            )}

            {isMobile && isOpen && (
                <div style={styles.overlay} onClick={() => setIsOpen(false)}></div>
            )}

            <div className='sidebarContainer'
                style={{
                    ...styles.sidebarContainer,
                    transform: isMobile
                        ? isOpen
                            ? 'translateX(0)'
                            : 'translateX(-100%)'
                        : 'translateX(0)',
                }}
                >

                <nav style={styles.sidebar}>
                    {sections.map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            style={{
                                ...styles.link,
                                backgroundColor:
                                    activeSection === section
                                        ? '#555'
                                        : hoveredSection === section
                                            ? '#333'
                                            : 'transparent',
                                color:
                                    activeSection === section
                                        ? 'white'
                                        : hoveredSection === section
                                            ? '#fff'
                                            : 'grey',
                                fontSize: activeSection === section ? '20px' : '15px',
                                transform: hoveredSection === section ? 'scale(1.08)' : 'none',
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(section);
                            }}
                            onMouseEnter={() => setHoveredSection(section)}
                            onMouseLeave={() => setHoveredSection(null)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}
                </nav>

            </div>
        </>
    );

}

const styles = {
    overlay:{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100dvh',
        width: '100vw',
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 99,

    },
    sidebarContainer: {
        transition: 'transform 0.3s ease-in-out',
        zIndex: 100,
    },
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        zIndex: 100,
    },
    link: {
        textDecoration: 'none',
        padding: '0.75rem 1rem',
        borderRadius: '0 5px 5px 0',
        transition: 'background-color 0.5s, font-size 0.5s, color 0.5s',
    },
    toggleButton: {
        position: 'fixed',
        top: '1rem',
        left: '1rem',
        zIndex: 200,
        backgroundColor: '#333',
        color: 'white',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1.5rem',
        cursor: 'pointer',
        boxShadow:'0 8px 16px 0 rgba(0,0,0,0.3), 0 6px 20px 0 rgba(0,0,0,0.19)',
        opacity: 0.8,
    }
};