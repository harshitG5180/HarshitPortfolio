import {
    interviewPrep,
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    studyNotion,
    crunchFitness,
    threejs,
    codeItUp,
    dsa,
    ietdavv,
    fog,
    pvp,
    c,
} from "../assets";

export const navLinks = [
    {
        id: "",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "education",
        title: "Experience and Education"
    },
    {
        id: "work",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "c",
        icon: c,
    },
    {
        name: "dsa",
        icon: dsa,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Full Stack SDE Intern",
        company_name: "Future Of Gaming",
        icon: fog,
        iconBg: "#383E56",
        date: "July 2024 - Aug 2024",
        points: [
            "Used Socket.io for establishing real time communication between various players and related devices.",
            "Developed new game modes for game LaserTag using ReactJS, TailwindCSS increasing total variety of games by 25% resulting in longer playing times and more options.",
            "Utilized RealmDB of MongoDB for efficient data management and Electron.js to run the game offline",
        ],
    },
    {
        title: "B.Tech [IT]",
        company_name: "Institute of Engineering and Technology DAVV",
        icon: ietdavv,
        iconBg: "#383E56",
        date: "April 2021 - June 2025",
        points: [
            "Learned about computer fundamentals like DSA , OOPS Principle, SQL , Database Management.",
            "Participated in various hackathons like SIH , college coding challenges.",
            "Learned MERN stack web development and developed various projects using the tech stack.",
        ],
    },
    {
        title: "High School",
        company_name: "Pragati Vidya Peeth",
        icon: pvp,
        iconBg: "#E6DEDD",
        date: "Jan 2020 - Mar 2021",
        points: [
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "InterviewPrep",
        description:
            "Internview Prepration website that allows students to pratice DSA questions based on their prepration level.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image: interviewPrep,
        source_code_link: "https://interview-prep-front.vercel.app/",
    },
    {
        name: "StudyNotion",
        description:
            "EdTech Platform where students can purchase courses and instructors can upload courses on various technologies",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image: studyNotion,
        source_code_link: "https://study-notion-harshit-gupta.vercel.app/",
    },
    {
        name: "Crunch Fitness",
        description:
            "Developed “Crunch Fitness” a gym website allowing users to select exercise categories and musclegroups, facilitating browsing of exercises alongside practical examples.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: crunchFitness,
        source_code_link: "https://code-it-up.netlify.app/",
    },
    {
        name: "Code-It-Up",
        description:
            "Developed a web application that replicates the functionality of the CodePen online code editor using ReactJS, enabling users to create, edit, and preview HTML, CSS, and JavaScript code in real-time.",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: codeItUp,
        source_code_link: "https://code-it-up.netlify.app/",
    },
];

export { services, technologies, experiences, testimonials, projects };