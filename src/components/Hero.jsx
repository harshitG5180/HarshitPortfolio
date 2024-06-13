import { motion } from "framer-motion";
import { styles } from "../styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ComputersCanvas from "../components/canvas/Computers"
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Harshit</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Full Stack <br className='sm:block hidden' />
            Web Developer
          </p>

          {/* <button className="bg-black text-white py-2 rounded text-2xl text-[20px] font-bold  mt-2">Resume</button> */}
          <button class="bg-white hover:bg-[#915EFF] text-black font-bold py-2 px-4 rounded mt-4 mb-4 text-[20px]"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://github.com/harshitG5180';
            }}>
            Resume
          </button>
          <div className=" justify-center space-x-6 mt-2 ml-1">
            <a href="https://github.com/harshitG5180" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/harshit-gupta5180/" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>

          </div>
        </div>

      </div>


      <ComputersCanvas />











      {/* Scroll down GIF wala code */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            {/* using react framer motion */}
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
      </div>
    </section>
  );
};

export default Hero;
