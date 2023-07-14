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
    carrent,
    jobit,
    tripguide,
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };