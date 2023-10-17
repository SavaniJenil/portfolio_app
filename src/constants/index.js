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
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
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
      name: "React JS",
      icon: reactjs,
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Intern (React.js)",
      company_name: "Highsense Infotech",
      icon: highsense,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - April 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Ensuring optimal performance of web applications by implementing best practices such as lazy loading, code splitting, and efficient data fetching in React.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company_name: "Solera",
      icon: solera,
      iconBg: "#383E56",
      date: "Aug 2022 - Present",
      points: [
        "Developing and maintaining desktop applications using VB.NET and C# .NET, ensuring they meet the specified requirements and functionality.",
        "Collaborating closely with the development team, including QA testers and other developers, to identify and resolve bugs, implement enhancements, and ensure the overall quality of product.",
        "Utilizing APIs to integrate external services, functionalities, and data into desktop app, enhancing its capabilities and improving user experience.",
        "Maintaining code quality and following best practices in software development to ensure the reliability and maintainability of product.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Jenil proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Jenil does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Jenil optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Delishio",
      description:
        "Web-based platform for exploring, ordering your favorite dishes from a diverse range of restaurants, bringing the flavors of the world to your doorstep.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: delishio,
      source_code_link: "https://github.com/SavaniJenil/react_learning/tree/dev",
    },
    {
      name: "Netflix GPT",
      description:
        "A cutting-edge streaming platform, enhanced with AI-driven movie recommendations tailored to your mood and preferences for an unparalleled viewing experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: netflixGpt,
      source_code_link: "https://github.com/SavaniJenil/netflix-gpt/tree/dev",
    },
    {
      name: "Watch Nest",
      description:
        "A dynamic video-sharing platform that empowers creators to share their content with the world, complete with live chat for real-time interaction and engagement.",
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
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: watchNest,
      source_code_link: "https://github.com/SavaniJenil/watch-nest/tree/dev",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };