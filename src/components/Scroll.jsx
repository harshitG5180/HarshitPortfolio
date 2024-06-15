import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { styles } from "../styles";
import '../index.css'; // Ensure Tailwind CSS is imported

const Scroll = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled down
            const scrolledDown = window.scrollY > 0;

            // Update the state based on scroll position
            setIsVisible(!scrolledDown);
        };

        // Attach scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove scroll event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to ensure the effect runs only once on mount


    return (
        <>
            {isVisible && (
                < div className='fixed bottom-10 left-10 flex justify-start items-center z-10' >
                    <a href={`#about`}>
                        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                            <motion.div
                                animate={{
                                    y: [0, 24, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                                className='w-3 h-3 rounded-full bg-secondary mb-1'
                            />
                        </div>
                    </a>
                </div >
            )}
        </>

    )
}

export default Scroll;