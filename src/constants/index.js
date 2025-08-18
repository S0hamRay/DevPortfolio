import {
    mobile,
    backend,
    web,
    javascript,
    html,
    reactjs,
    tailwind,
    threejs,
    py,
    boot,
    c,
    css,
    java,
    dj,
    sql,
    iris,
    arbitrage,
    fisbook,
    github,
    mail,
    compiler,
    neurons,
    linkedin,
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
      title: "Backend Developer",
      icon: backend,
      description: 'Proficient in Python, Java, C, C++, and SQL. Also have experience with Django and Flask.'
    },
    {
        title: "Machine Learning Engineer",
        icon:backend,
        description: 'Proficient in scikit-learn, PyTorch, numpy, matplotlib, pandas, TensorFlow, etc.. Also have experience with agentic AI via the OpenAI API and retrieval-augmented generation via the langchain framework.'
    },
    {
        title: "Frontend Developer",
        icon: web,
        description: 'Proficient in HTML, CSS, JavaScript, React, React Native, Expo, Flutter, Flask, Node.js, and several JS frameworks.'
    },
    {
        title: "2D Game Developer",
        icon:backend,
        description: 'Proficient in Godot, multiple JS frameworks and PyGame. Also have some experience with Unity.'
    },
    {
      title: "Computational Neuroscientist",
      icon: mobile,
      description: "Currently conducting research on computational neuroscience and artificial intelligence under Dr. Tai-Sing Lee at Carnegie Mellon University"
    },
    {
      title: "Cybersecurity Enthusiast",
      icon: mobile,
      description: "Working on a few personal projects in machine learning and cybersecurity. Proficient in web exploitation and general penetration testing via Burp Suite, Metasploit, Nmap etc."
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Python",
      icon:py,
    },
    {
      name:"CSS",
      icon:css,
    },
    {
      name:"Bootstrap",
      icon:boot,
    },
    {
      name:"Django",
      icon:dj,
    },
    {
      name: "MySQL",
      icon:sql,
    },
    {
      name: "C",
      icon:c,
    },
    {
      name: "Java",
      icon:java,
    }
  ];
  
  const projects = [
    {
      name: "Arbitrage Analysis",
      description:
        "Rudimentary application of Bellman-Ford's algorithm to find negative cycles in forex.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "BeautifulSoup",
          color: "green-text-gradient",
        },
      ],
      image: arbitrage, 
      source_code_link: "https://colab.research.google.com/drive/1YVlTTT6mTszIDVPankZV39oIbBzQTf3D?usp=sharing",
    },
    {
      name: "FISBook",
      description:
        "Web application designed for schools, facilitates inter-student and student-teacher communication along with event planning and scheduling. Streamlines the process of club (forum) creation",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "Ajax",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Three JS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        }
      ],
      image: fisbook,
      source_code_link: "https://github.com/Sausageexpert/FISBook-SubmittableMaybe",
    },
    {
      name: "Cassava Compiler",
      description:
        "Some experimentation with basic compiler design and implementation",
      tags: [
        {
          name: "python",
          color: "green-text-gradient",
        },
      ],
      image: compiler,
      source_code_link: "https://github.com/S0hamRay/Cassava_Compiler",
    },
    {
      name: "Oscillatory Hopfield Network",
      description:
        "Implementation of simple Kuramoto oscillatory neurons in a Hopfield network to observe oscillatory dynamics in an associative memory system",
      tags: [
        {
          name: "python",
          color: "green-text-gradient",
        },
      ],
      image: neurons,
      source_code_link: "https://colab.research.google.com/drive/1AsqLVk8TpLzIekTOSseLQLmPCZKid57C?usp=sharing",
    },
  ];

  const achievements=[
    {
      title: "Freedom International School",
      date: "2018-2024",
      description: "Studied Physics, Chemistry, Mathematics, Computer Science and English. Highest rank in Physics, Chemistry and Mathematics",
    },
    {
      title:"FIITJEE",
      date: "2021-2024",
      description: "100 percent merit based scholarship for the three year STEM coaching program",
    },
    {
      title:"Carnegie Mellon University",
      date: "2024-2028",
      description: "Studying Computer Science with a concentration in Machine Learning"
    },
    {
      title:"Research Assistant, Carnegie Mellon University",
      date: "2024-Present",
      description: "Working on computational neuroscience and artificial intelligence. Currently investigating recurrent connections in the mammalian visual system and methods to efficiently extrapolate them to convolutional neural networks"
    },
  ]

  const contacts = [
    {
      name: 'GitHub',
      icon: github,
      link: 'https://github.com/S0hamRay',
    },
    {
      name: 'Email',
      icon: mail,
      link: 'mailto:soham.usind@gmail.com',
    },
    {
      name: 'LinkedIn',
      icon: linkedin,
      link: 'https://www.linkedin.com/in/soham-raychaudhuri-b515a9313/',
    },
  ];
  
  export { services, technologies, projects, achievements, contacts };