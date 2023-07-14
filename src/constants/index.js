import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    docker,
    pwc,
    flem,
    solvay,
    shopify,
    ulb,
    python,
    c,
    cplus,
    java,
    sql,
    pandas,
    tensorflow,
    linux,
    salesforce,
    mulesoft,
    azure,
    hackthebox,
    kaggle,
    imagerecognition,
    pawnhub,
    newsapp,
    elt,
    dieteren,
    logo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "exp",
      title: "Exp",
    },
    {
      id: "tech",
      title: "Tech",
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
      title: "AI",
      icon: web,
    },
    {
      title: "Cloud",
      icon: mobile,
    },
    {
      title: "Cybersecurity",
      icon: backend,
    },
    {
      title: "Data Science",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cplus,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "Kaggle",
      icon: kaggle,
    },
    {
      name: "Pandas",
      icon: pandas,
    },
    {
      name: "TensorFlow",
      icon: tensorflow,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "HackTheBox",
      icon: hackthebox,
    },
    {
      name: "Salesforce",
      icon: salesforce,
    },
    {
      name: "Mulesoft",
      icon: mulesoft,
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
      name: "Tailwindcss",
      icon: tailwind,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Shopify",
      icon: shopify,
    },
  ];
  
  const experiences = [
    {
      title: "Business Engineering",
      company_name: "Solvay Business School, BRUSSELS(BE)",
      icon: solvay,
      iconBg: "#FFFFFF",
      date: "September 2013 - September 2016",
      points: [
        "Studies with a focus on modern business practices, financial analysis, and strategic decision-making.",
        "Exploration of both microeconomics and macroeconomics, acquiring a robust comprehension of fundamental economic concepts and their real-world applications.",
        "Developed strong analytical skills through advanced courses in statistics and data analysis.",
        "Conducted projects, demonstrating strong research abilities, critical thinking and problem-solving skills.",
      ],
    },
    {
      title: "Computer Science (Distinction)",
      company_name: "ULB, BRUSSELS(BE)",
      icon: ulb,
      iconBg: "#FFFFFF",
      date: "September 2016 - September 2020",
      points: [
        "Developed a strong foundation in computer science theory and practice, including data structures, algorithms, and software engineering principles.",
        "Gained practical experience through individual and group projects using current technologies.",
        "Acquired strong problem-solving abilities and critical thinking skills through complex coding challenges and debugging tasks.",
        "Sparked a lifelong passion for technology, inspiring me to continuously explore, learn, and master emerging tech trends.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Saint-Tran, BRUSSELS(BE)",
      icon: flem,
      iconBg: "#FFFFFF",
      date: "September 2020 - September 2021",
      points: [
        "Supervised digitalization of small and large corporations",
        "Prepared, planned, forecast IT meetings",
        "Oversaw UX/UI design and backend development",
        "Translated and communicated coding languages into clear presentations"
      ],
    },
    {
      title: "Technology Consultant",
      company_name: "PwC, BRUSSELS(BE)",
      icon: pwc,
      iconBg: "#FFFFFF",
      date: "September 2021 - Present",
      points: [
        "Collaborated closely with a major automobile manufacturer to gain a holistic understanding of their process from Sales to Service to Marketing, contributed to the optimization of their Salesforce system, and assisted in the implementation of innovative features.",
        "Enhanced knowledge in key areas of interest, including AI, Data Science, Cloud, and Cybersecurity through consistent participation in professional development and training.",
        "Continuous improvement, by seeking feedback from experienced colleagues, addressing areas for personal development, and actively contributing constructive feedback.",
        "Expanded professional network, refined teamwork skills, and improved personal organization through daily operational activities and team interactions.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "AI-Based Number Recognizer",
      description:
        "An AI neural network capable of identifying numbers 1 to 9 from a picture, given an array of the picture's grayscale values.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "AI",
          color: "green-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "pink-text-gradient",
        },
      ],
      image: imagerecognition,
      source_code_link: "",
    },
    {
      name: "Pawn Hub: An Online Chess Experience",
      description:
        "C++-based chess game offering the traditional aspects of Chess while also offering real-time play and 'Pawns Only' mode. ",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Network",
          color: "green-text-gradient",
        },
        {
          name: "Game Development",
          color: "pink-text-gradient",
        },
      ],
      image: pawnhub,
      source_code_link: "https://github.com/Phucyro/PawnHub",
    },
    {
      name: "FeedBuzz: News Aggregator Java App",
      description:
        "Java application that aggregates daily news from multiple websites using Flux, offering a consolidated view of daily headlines.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Full Stack",
          color: "green-text-gradient",
        },
        {
          name: "RSS flux",
          color: "pink-text-gradient",
        },
      ],
      image: newsapp,
      source_code_link: "https://github.com/Phucyro/FeedBuzz",
    },
    {
      name: "Flem: smart planner for lazy people",
      description:
        "AI-powered planning application designed with the philosophy of 'less effort, more efficiency'. Harnessing the power of Figma for UI/UX design, the project provides a comprehensive solution for smart planning on both web and mobile platforms, serving as a full-stack development showcase",
      tags: [
        {
          name: "Full Stack",
          color: "blue-text-gradient",
        },
        {
          name: "Figma",
          color: "green-text-gradient",
        },
        {
          name: "AI",
          color: "pink-text-gradient",
        },
      ],
      image: flem,
    },
    {
      name: "SOS Electronics Programming",
      description:
        "Designed an emergency locator transmitter capable of emitting sounds, detecting temperature and luminosity, and sending/receiving SOS messages.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "Electronics",
          color: "green-text-gradient",
        },
        {
          name: "PSoC-5LP",
          color: "pink-text-gradient",
        },
      ],
      image: elt,
      source_code_link: "https://github.com/Phucyro/DigitalElectronics",
    },
    {
      name: "Automotive Manufacturing Support",
      description:
        "Contributed to the maintenance and enhancement of a leading car manufacturer's Salesforce systems, ensuring efficiency and reliability.",
      tags: [
        {
          name: "Salesforce",
          color: "blue-text-gradient",
        },
        {
          name: "Apex",
          color: "green-text-gradient",
        },
        {
          name: "Maintenance & Upgrade",
          color: "pink-text-gradient",
        },
      ],
      image: dieteren,
      source_code_link: "https://www.dieteren.be/fr/",
    },
    {
      name: "Portfolio Website",
      description:
        "Developed a personal portfolio website using ReactJS and Tailwind CSS to showcase projects and professional experience.",
      tags: [
        {
          name: "Full Stack",
          color: "blue-text-gradient",
        },
        {
          name: "ReactJS",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: logo,
    },
    {
      name: "Shopify E-commerce Store",
      description:
        "Developed a comprehensive e-commerce store using Shopify, complete with inventory management and secure checkout functionality.",
      tags: [
        {
          name: "Shopify",
          color: "blue-text-gradient",
        },
        {
          name: "E-commerce",
          color: "green-text-gradient",
        },
      ],
      image: shopify,
    },
  ];
  
  export { services, technologies, experiences, projects };