import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { BallCanvas } from "./canvas";
import { technologies } from "../constants";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>A bit about me </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am currently pursuing my 4th year of Bachelor of Technology at IET DAVV Indore.
        My academic journey has equipped me with a strong foundation in Computer Science,
        complemented by hands-on experience in Data Structures and Algorithms (DSA)
        and proficiency in MERN stack web development.
        <br></br>
        <br></br>
        I am passionate about leveraging technology to solve real-world problems
        and am actively seeking opportunities in software development engineering (SDE) roles.
        Whether for a full-time position or internship, I am eager to apply my skills,
        contribute to meaningful projects, and continue learning and growing in the field of software engineering.

      </motion.p>

      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Technologies and Tools</h2>
      </motion.div>

      {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled full stack software developer with experience in JavsScript
        and expertise in frameworks like React, Node.js, and Express.js.
      </motion.p> */}
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}

      </div>

    </>
  );
};

export default SectionWrapper(About, "about");
