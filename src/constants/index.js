import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  highsense,
  solera,
  threejs,
  delishio,
  netflixGpt,
  watchNest,
  vbdn,
  CSharp,
  styledComponent,
  foodMania,
  elegantCloths,
  placePicker,
  Andrew,
  Jesus,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Frontend Web Developer",
    icon: web,
  },
  // {
  //   title: "React Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Styled Component",
    icon: styledComponent,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "CSharp",
  //   icon: CSharp,
  // },
  // {
  //   name: "VB.Net",
  //   icon: vbdn,
  // },
];

const experiences = [
  {
    title: "Software Engineer II",
    company_name: "Solera",
    icon: solera,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "Addressed and resolved critical bugs and implemented key enhancements in Crystal Reports and VB forms, improving overall system stability and performance.",
      "Developed, tested, and deployed code into the TFS server, ensuring smooth and efficient version control, while collaborating effectively with team members across multiple projects.",
      "Collaborated with cross-functional teams to optimize existing systems and introduce new features, enhancing overall productivity and user experience.",
      "Integrated with an application that handles accounting, inventory, payroll, tax filing, invoicing, bank account tracking, and accounts receivable/payable management, providing comprehensive business solutions.",
      "Worked on the integration of payment services, enabling seamless and secure financial transactions for users.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "HighSense Infotech",
    icon: highsense,
    iconBg: "#383E56",
    date: "Jan 2022 - April 2022",
    points: [
      "Designed and developed web applications using React.js, React Router, and Redux for efficient state management and seamless navigation.",
      "Built dynamic, interactive user interfaces with Tailwind CSS, delivering a responsive and engaging user experience across devices.",
      "Worked on client-facing projects with a strong focus on responsive design, performance optimization, and cross-browser compatibility.",
      "Implemented advanced data manipulation and visualization features using React Table, enhancing app functionality and usability.",
      "Collaborated with design, product, and engineering teams to translate client requirements into high-quality web solutions.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Jenil stands out due to his technical acumen and dedication to solving complex problems. He's quick to learn, dependable, and always ready to tackle challenges head on. He's a true asset to the team and a fantastic person to work with.",
    name: "Andrew Gatlin",
    designation: "Product Specialist",
    company: "Absencesoft",
    image: Andrew,
  },
  {
    testimonial:
      "Jenil has acquired extensive technical experience and has strong administrative, communication, and leadership skills. He consistently demonstrates his dedication to problem-solving and excellent teamwork. In a short time, he has improved and learned quickly.",
    name: "Jesus Alberto Perez",
    designation: "Manager 2",
    company: "Solera",
    image: Jesus,
  },
];

const projects = [
  {
    name: "Delishio",
    description:
      "Web-based platform allows you to explore and order your favorite dishes from a diverse range of restaurants, bringing global flavors directly to your doorstep. Utilizing a backend that seamlessly integrates with both the Swiggy API for menu data and the OpenCage API to pinpoint your current location based on coordinates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
    ],
    image: delishio,
    source_code_link: "https://github.com/SavaniJenil/react_learning.git",
    project_url: "https://delishio.netlify.app/",
  },
  {
    name: "Netflix GPT",
    description:
      "Explore movies across genres like Netflix and get personalized suggestions based on your mood with our unique AI feature- simply tell AI your mood, and They will suggest movies to match your emotions and mood.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: netflixGpt,
    source_code_link: "https://github.com/SavaniJenil/netflix-gpt.git",
  },
  {
    name: "Food Mania",
    description:
      "Food Mania is a vibrant platform where users share their cooking recipes, complete with step-by-step guides and images of their dishes. Join to explore a diverse range of culinary creations, contribute your own recipes, and personalize your profile with your name and more. Experience the joy of cooking with our foodie community!",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: foodMania,
    source_code_link: "https://github.com/SavaniJenil",
  },
  {
    name: "Elegant Cloth",
    description:
      "Elegant Cloth is your go-to web-app for premium clothing, catering to every occasion and everyone. Explore our curated collections of exquisite, timeless pieces designed to elevate your wardrobe. Whether you're dressing for a special event or everyday elegance, find the perfect outfit that speaks to your style and sophistication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: elegantCloths,
    source_code_link: "https://github.com/SavaniJenil",
  },
  {
    name: "Place Picker",
    description:
      "A web-based app tailored for travel enthusiasts to easily explore and select world-famous destinations. Utilizing location access, discover places sorted by proximity, ensuring effortless travel planning customized to your preferences. Start mapping out your next adventure with precision!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
    ],
    image: placePicker,
    source_code_link: "https://github.com/SavaniJenil",
  },
  {
    name: "Watch Nest",
    description:
      "Introducing our dynamic video-sharing platform powered by the YouTube API, where creators showcase their content globally. Engage in real-time with live chat features, fostering interactive experiences for viewers and creators alike.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: watchNest,
    source_code_link: "https://github.com/SavaniJenil/watch-nest.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
