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
    highsense,
    solera,
    vbdn,
    CSharp,
    styledComponent,
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
    // {
    //   title: "Web Developer",
    //   icon: web,
    // },
    {
      title: "React Developer",
      icon: mobile,
    },
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
      title: "React Developer",
      company_name: "HighSense Infotech",
      icon: highsense,
      iconBg: "#383E56",
      date: "Jan 2022 - April 2022",
      points: [
        "Designed and implemented web applications using React.js, React Router, and Redux for efficient state management and navigation.",
        "Created dynamic and interactive user interfaces with Tailwind CSS, ensuring a seamless and engaging user experience.",
        "Worked on projects for clients, focusing on responsive design and cross-browser compatibility to deliver high-quality web applications.",
        "Utilized React Table to develop advanced data visualization and manipulation features, enhancing the functionality of applications.",
        "Collaborated closely with design, product, and development teams to ensure client requirements were met and exceeded in all projects.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company_name: "Solera",
      icon: solera,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Present",
      points: [
        "Addressed and resolved numerous bug fixes and enhancement requests in Crystal Reports and VB forms to improve application stability and performance.",
        "Developed and deployed code into the TFS server, ensuring smooth and efficient version control and collaboration with other team members.",
        "Collaborated with cross-functional teams to optimize existing systems and introduce new features, enhancing overall productivity and user experience.",
        "Integrated with an application that handles accounting, inventory, payroll, tax filing, invoicing, bank account tracking, and accounts receivable and accounts payable management for comprehensive business solutions.",
        "Worked on the integration of payment services, enabling seamless and secure financial transactions for users.",
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
        "I thought it was impossible to make a website as beautiful as our product, but Jenil proved me wrong.",
      name: "John Doe",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Jenil does.",
      name: "John Doe",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Jenil optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "John Doe",
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
      source_code_link: 'https://github.com/SavaniJenil/netflix-gpt/tree/dev',
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