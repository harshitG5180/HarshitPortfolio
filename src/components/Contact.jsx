import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import icon from "../assets/leetcode.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github3.png";
import mail from "../assets/mail.jpg";
import mobilephone from "../assets/phone.jpg";

import { SectionWrapper } from "../hoc";
const Contact = () => {
    return (
        <div >
            <div className="text-center">
                <p className={styles.sectionSubText} > Get in touch</p >
                <h3 className={styles.sectionHeadText} >Contact</h3>
            </div>

            <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-center ">
                <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)}
                    className='flex-row bg-black-100 p-8 rounded-2xl'
                >
                    <h1 className="text-3xl font-bold mb-4">
                        Have a <span className="text-[#915EFF]">Question</span> on your mind??
                    </h1>
                    <p className="mb-8">Or just want to discuss a project? Contact Me using any of the links!!</p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <img src={linkedin} alt="LinkedIn" className="h-8 w-8" />
                            <a href="https://www.linkedin.com/in/harshit-gupta5180" target="_blank" rel="noopener noreferrer" className="hover:underline">Linkedin</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img src={github} alt="GitHub" className="h-8 w-8" />
                            <a href="https://github.com/harshitG5180" target="_blank" rel="noopener noreferrer" className="hover:underline">Github</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img src={icon} alt="Twitter" className="h-8 w-8" />
                            <a href="https://leetcode.com/harshitgupta5180" target="_blank" rel="noopener noreferrer" className="hover:underline">Leetcode</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img src={mail} alt="Mail" className="h-8 w-8" />
                            <a href="mailto:harshitgupta5180@gmail.com" className="hover:underline">Mail [harshitgupta5180@gmail.com]</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img src={mobilephone} alt="Mail" className="h-8 w-8" />
                            <a href="tel:+916260996265" className="hover:underline">Call[+916260996265]</a>
                        </div>
                    </div>
                </motion.div>
            </div >
        </div>

    );
};


export default SectionWrapper(Contact, "contact");
