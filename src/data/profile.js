export const profile = {
  name: "Arun Balaji Ravichandran",
  title: "MS Computer Science Student",
  roles: ["Software Engineer", "Backend Developer", "AI-Focused Developer"],
  tagline: "Open to internships, co-ops, and software engineering opportunities.",
  intro: "I build scalable backend systems, intelligent applications, and production-ready software solutions with a focus on Java, Spring Boot, REST APIs, React, MySQL, and AI-driven technologies.",
  about: "Arun Balaji Ravichandran is a Computer Science graduate student at Florida Atlantic University with 2+ years of software engineering experience at Cognizant. He has worked on enterprise Java applications, backend services, production support, REST APIs, MySQL databases, React interfaces, and deployment validation. His current academic focus includes machine learning, deep learning, NLP, data mining, and intelligent systems.",
  email: "arunbalaji1200@gmail.com",
  phone: "+1 (484)-692-0141",
  linkedin: "https://www.linkedin.com/in/arun-balaji-ravichandran/",
};

export const experience = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Cognizant Technology Solutions",
    client: "Bayer",
    period: "Feb 2024 – Nov 2024",
    type: "Full-time",
    points: [
      "Delivered L2/L3 production support for enterprise Java applications with 95%+ SLA compliance.",
      "Debugged backend, frontend, database, and integration issues across production systems.",
      "Supported post-deployment validation, production health checks, release activities, and incident resolution.",
      "Worked with Java, MySQL, ServiceNow, IntelliJ IDEA, Agile practices, and cross-functional teams.",
    ],
    tech: ["Java", "MySQL", "ServiceNow", "Agile"],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Cognizant Technology Solutions",
    client: "VMware",
    period: "Jul 2022 – Jan 2024",
    type: "Full-time",
    points: [
      "Developed and maintained HelpNow+, an internal helpdesk portal for employee service requests.",
      "Built backend logic using Java, Spring Boot, REST APIs, and MySQL.",
      "Developed responsive UI components using React, HTML, and CSS.",
      "Supported debugging, API integration, production issue resolution, and sprint-based development.",
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "React", "MySQL"],
  },
  {
    id: 3,
    role: "Software Engineering Intern",
    company: "Cognizant Technology Solutions",
    client: null,
    period: "Jan 2022 – Jul 2022",
    type: "Internship",
    points: [
      "Developed backend services using Java and Spring Boot.",
      "Built frontend components using React, HTML, and CSS.",
      "Worked with XAMPP, local deployment environments, testing, debugging, and validation workflows.",
      "Collaborated with team members under structured development practices.",
    ],
    tech: ["Java", "Spring Boot", "React", "XAMPP"],
  },
];

export const techStack = [
  {
    category: "Programming Languages",
    icon: "Code2",
    color: "#22d3ee",
    items: ["Java", "Python", "C++", "JavaScript", "C"],
  },
  {
    category: "Backend",
    icon: "Server",
    color: "#4f87ff",
    items: ["Spring Boot", "REST APIs", "Microservices", "Hibernate"],
  },
  {
    category: "Frontend",
    icon: "Monitor",
    color: "#7c3aed",
    items: ["React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "#06b6d4",
    items: ["MySQL", "Redis"],
  },
  {
    category: "AI / Machine Learning",
    icon: "Brain",
    color: "#f59e0b",
    items: ["TensorFlow", "Keras", "OpenCV", "CNN", "YOLOv3", "NLP", "Deep Learning"],
  },
  {
    category: "Tools & DevOps",
    icon: "Wrench",
    color: "#10b981",
    items: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code", "Google Colab", "XAMPP", "ServiceNow"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Cloud-Based Fire Detection System",
    subtitle: "using YOLOv3",
    description: "Built a real-time object detection system for fire detection in complex scenes. Trained a custom YOLOv3 model with labeled fire image datasets achieving high detection accuracy for safety-critical monitoring.",
    tech: ["YOLOv3", "Java", "Darknet", "LabelImg", "Google Colab"],
    highlight: "AI/computer vision project focused on safety and intelligent monitoring.",
    type: "AI / Computer Vision",
    color: "#f59e0b",
  },
  {
    id: 2,
    title: "CNN-Based Music Notation",
    subtitle: "Conversion System",
    description: "Developed a CNN model to convert Western musical notation into Carnatic notation. Combined computer vision with domain-specific music intelligence to bridge two notation systems.",
    tech: ["Python", "TensorFlow", "Keras", "NumPy", "OpenCV"],
    highlight: "AI model combining computer vision and music intelligence.",
    type: "Deep Learning",
    color: "#7c3aed",
  },
  {
    id: 3,
    title: "Certification Management",
    subtitle: "System",
    description: "Built a secure certificate storage and retrieval platform with user authentication, structured document management, and streamlined access control for academic records.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "XAMPP"],
    highlight: "Full-stack academic system for organized document management.",
    type: "Full-Stack",
    color: "#22d3ee",
  },
];

export const achievements = [
  { stat: "2+", label: "Years Professional Experience", icon: "Briefcase" },
  { stat: "95%+", label: "SLA Compliance Rate", icon: "TrendingUp" },
  { stat: "3+", label: "AI/ML Projects Shipped", icon: "Brain" },
  { stat: "5+", label: "Tech Stacks Mastered", icon: "Layers" },
];

export const highlights = [
  "2+ years of professional software engineering experience at Cognizant.",
  "95%+ SLA compliance in enterprise production support for Fortune 500 clients.",
  "Built Java Spring Boot backend services and REST APIs in production environments.",
  "Worked across backend, frontend, database, deployment, and support layers.",
  "Graduate student specializing in AI-focused computer science coursework.",
  "Computer vision experience with CNN and YOLOv3 for real-world detection systems.",
  "Strong foundation in scalable systems, debugging, Agile delivery, and production reliability.",
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Florida Atlantic University",
    period: "2025 – Present",
    focus: ["Machine Learning", "Deep Learning", "NLP", "Data Mining", "Intelligent Systems"],
    status: "current",
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Sri Ramakrishna Engineering College",
    period: "2018 – 2022",
    focus: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems"],
    status: "completed",
  },
];
