// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';
import bulkdoorLogo from './assets/company_logo/bulkdoor_logo.png';
import writecreamLogo from './assets/company_logo/writecream_logo.svg';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';
import ipuLogo from './assets/education_logo/ipu_logo.png';
import cbseLogo from './assets/education_logo/Cbse-logo.png'

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import yourOsManager from './assets/work_logo/YourOsManager.png';
import taskMate from './assets/work_logo/taskMate.png';
import keyframeLogo from './assets/work_logo/keyframe.png';


export const SkillsInfo = [
  // {
  //   title: 'Frontend',
  //   skills: [
  //     // // { name: 'SASS', logo: sassLogo },
  //     // { name: 'JavaScript', logo: javascriptLogo },
  //     // // { name: 'Angular', logo: angularLogo },
  //     // // { name: 'Redux', logo: reduxLogo },
  //     // // { name: 'Next JS', logo: nextjsLogo }, 
  //     // { name: 'Tailwind CSS', logo: tailwindcssLogo },
  //     // // { name: 'GSAP', logo: gsapLogo },
  //     // // { name: 'Material UI', logo: materialuiLogo },
  //     // { name: 'Bootstrap', logo: bootstrapLogo },
  //   ],
  // },
  {
    title: 'Skills',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Compass', logo: mcLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: writecreamLogo,
    role: "Full Stack Developer",
    company: "WriteCream",
    date: "Mar 2026 - Present",
    desc: "Developed and maintained full-stack SaaS features and tools using modern web technologies. Collaborated with teams to ship features and enhance user experience. Improved development workflows using Claude Code and Cursor for faster feature implementation.",
    skills: [
      "React JS",
      "Node JS",
      "JavaScript",
      "TypeScript",
      "MongoDB",
      "Express JS",
      "Tailwind CSS",
    ],
  },
  {
    id: 1,
    img: bulkdoorLogo,
    role: "Backend Developer",
    company: "Bulkdoor",
    date: "Dec 2025 - Mar 2026",
    desc: "Built scalable backend services and REST APIs for an e-commerce platform. Collaborated with teams to build features and support production releases. Implemented authentication, order management, and database operations with proper error handling.",
    skills: [
      "Node JS",
      "Express JS",
      "MongoDB",
      "REST APIs",
      "JWT Authentication",
      "JavaScript",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: ipuLogo,
    school: "Dr. Akhilesh Das Gupta Institute of Professional Studies (GGSIPU), Delhi",
    date: "2022 - 2026",
    // grade: "7.81 CGPA",
    desc: "Completed B.Tech in Information Technology from Dr. Akhilesh Das Gupta Institute of Professional Studies, affiliated with Guru Gobind Singh Indraprastha University. Built a strong foundation in coding, programming, databases, and problem-solving, with hands-on experience building efficient and scalable software solutions.",
    degree: "Bachelor of Technology - B.Tech (Information Technology)",
  },
  // {
  //   id: 1,
  //   img: bsaLogo,
  //   school: "BSA College, Mathura",
  //   date: "Sept 2018 - Aug 2021",
  //   grade: "73.2%",
  //   desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
  //   degree: "Bachelor of Science - BSC (Computer Science)",
  // },
  {
    id: 2,
    img: cbseLogo,
    school: "Sarvodaya Vidyalaya (GBSSS) Dr. Mukherjee nagar, Delhi",
    date: "2021 - 2022",
    // grade: "78%",
    desc: "I completed my class 12 education from Sarvodaya Vidyalaya (GBSSS) Dr. Mukherjee nagar, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 3,
    img: cbseLogo,
    school: "Oscar Public School, Delhi",
    date: "2019 - 2020",
    // grade: "87.5%",
    desc: "I completed my class 10 education from Oscar Public School, under the CBSE board.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "KEYFRAME",
    description:
      "An AI-powered video generation platform that converts prompts, websites, and reference content into fully animated videos with scripts, voiceovers, captions, and music. Built a multi-agent workflow using LangGraph and OpenRouter AI for storyboard generation, asset orchestration, website ingestion, and automated MP4 rendering.",
    image: keyframeLogo,
    tags: ["Node.js", "MongoDB", "Express.js", "React.js", "LangChain", "LangGraph", "Multer"],
    github: "https://github.com/iamshubhamratra",
    webapp: "#",
  },
  {
    id: 1,
    title: "Task Mate",
    description:
      "Designed and developed a role-based task workflow system with structured collaboration, role-based access control, and high data integrity (99.9%), supporting multiple users. Built RESTful APIs for task and team management with real-time status tracking, and integrated secure file uploads using Multer with proper validation and storage handling.",
    image: taskMate,
    tags: ["Node.js", "MongoDB", "Express.js", "React.js", "Postman", "Nodemailer", "Multer"],
    github: "https://github.com/iamshubhamratra/Taskmate-Backend-Server.git",
    webapp: "https://taskmate-frontend-server.vercel.app/",
  },
  {
    id: 2,
    title: "Your OS Manager",
    description:
      "A modern, secure, and production-ready web-based file and folder management system built with the MERN stack. Allows authenticated users to create, organize, and manage folders and files through an intuitive and responsive web interface. Designed for scalability, security, and ease of use.",
    image: yourOsManager,
    tags: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript", "Bootstrap 5"],
    github: "https://github.com/iamshubhamratra/YourOsManager.git",
    webapp: "https://yourosmanager.onrender.com/",
  },
];  