export const projectsData = [
  {
    id: "syrus",
    number: "01",
    category: "ARTIFICIAL INTELLIGENCE & EDTECH",
    featured: true,
    title: "SYRUS",
    subtitle: "AI LEARNING MENTOR",
    tagline: "An AI-powered learning assistant designed to provide students with a personalized learning experience.",
    shortDesc: "An AI-powered personalized learning assistant that generates adaptive study roadmaps, interactive neural guidance, and tailored learning support for computer science students.",
    focusAreas: ["Artificial Intelligence", "Personalized Learning", "Student Assistance", "Learning Support", "Intelligent Interaction"],
    tags: ["React", "Node.js", "Express.js", "AI Integration", "CSS3"],
    coverImage: "/images/projects/syrus/syrus-cover.png",
    screenshots: [
      {
        url: "/images/projects/syrus/syrus-cover.png",
        caption: "Syrus AI Learning Mentor Dashboard & Neural Chat Interface"
      },
      {
        url: "/images/projects/syrus/syrus-preview.png",
        caption: "Adaptive Study Roadmap & Real-time Progress Tracking"
      }
    ],
    overview: "Syrus is an intelligent educational companion engineered to mentor engineering students through complex technical topics. By analyzing student comprehension stages and individual learning pace, Syrus delivers customized explanations, conceptual roadmaps, and real-time interactive problem guidance.",
    problem: "Students frequently encounter roadblocks when studying complex computer science concepts independently. Generic online resources lack contextual awareness of a learner's current knowledge baseline, resulting in knowledge gaps, cognitive overload, and passive consumption.",
    solution: "Syrus solves this by serving as an interactive digital mentor. It breaks down intimidating topics into digestible milestones, facilitates conversational dialogue for immediate doubt clarification, and visualizes abstract concepts through structural roadmaps.",
    keyFeatures: [
      "Personalized Learning Pathways tailored to student pace and curriculum",
      "Interactive Neural Chat Mentor for instant technical doubt resolution",
      "Dynamic Milestone Tracker to celebrate incremental learning achievements",
      "Algorithmic Concept Visualizer mapping data structures and program logic",
      "Self-Assessment Quizzes with explanatory feedback"
    ],
    technology: [
      "React.js for reactive, modern student interface components",
      "Node.js & Express.js for scalable backend API handling",
      "AI Prompt Pipelines for contextual educational explanations",
      "Custom CSS3 design system with dark navy theme and glowing cyan accents"
    ],
    developmentApproach: "Developed with a modular component architecture. The frontend leverages clean state management for conversational message streams and progress milestones, while the backend orchestrates query pipelines to deliver structured educational responses.",
    demoUrl: null,
    githubUrl: null,
    status: "Active Academic Project"
  },
  {
    id: "code-journey",
    number: "02",
    category: "PROGRAMMING & LOGIC PLATFORM",
    featured: true,
    title: "CODE JOURNEY",
    subtitle: "INTERACTIVE CODING LEARNING PLATFORM",
    tagline: "A student-focused programming learning platform created to strengthen coding logic through interactive lessons and visual problem solving.",
    shortDesc: "A dedicated interactive coding environment designed to demystify computer programming, offering structured logic challenges, code execution previews, and beginner-to-intermediate exercises.",
    focusAreas: ["Programming Foundations", "Coding Logic", "Interactive Learning", "Student Development", "Visual Execution"],
    tags: ["React", "JavaScript", "CSS3", "Visualizer", "Web Storage"],
    coverImage: "/images/projects/code-journey/code-journey-cover.png",
    screenshots: [
      {
        url: "/images/projects/code-journey/code-journey-cover.png",
        caption: "Interactive Code Editor Playground with Logic Visualizer"
      },
      {
        url: "/images/projects/code-journey/code-journey-cover.png",
        caption: "Structured Coding Roadmap & Practice Modules"
      }
    ],
    overview: "Code Journey is an educational web platform tailored for engineering peers learning core languages like Java, JavaScript, and algorithmic foundations. It transforms abstract syntax memorization into hands-on code experiments.",
    problem: "Novice programmers often struggle with abstract computational concepts such as loops, recursion, and object-oriented paradigms when presented purely through static textbooks and slides.",
    solution: "Code Journey bridges this gap with an intuitive split-screen environment where learners write code alongside instant visual output, step-by-step logic breakdowns, and gamified milestone challenges.",
    keyFeatures: [
      "In-browser interactive coding workspace with syntax highlighting",
      "Step-by-step algorithmic logic visualization for loops and conditionals",
      "Curated practice tracks spanning fundamentals to data structures",
      "Instant syntax feedback and guided error hints",
      "Local progress persistence across browser sessions"
    ],
    technology: [
      "React for dynamic view state and responsive code workspace layout",
      "Modern JavaScript ES6+ engine for code parsing and interactive sandbox",
      "Custom CSS Grid & Flexbox layout optimized for dual-pane viewing",
      "Browser Storage API for continuous milestone synchronization"
    ],
    developmentApproach: "Prioritized distraction-free developer ergonomics. Implemented an adaptable layout engine that smoothly resizes code editors and execution panels while maintaining high rendering performance on desktop and mobile devices.",
    demoUrl: null,
    githubUrl: null,
    status: "Featured Student Project"
  },
  {
    id: "smart-bus",
    number: "03",
    category: "QR TRANSIT VERIFICATION",
    featured: false,
    title: "SMART BUS ATTENDANCE SYSTEM",
    subtitle: "QR-BASED STUDENT TRANSIT VERIFICATION",
    tagline: "Automated student bus attendance verification system utilizing dynamic QR codes and centralized MySQL management.",
    shortDesc: "A secure digital transit attendance application replacing manual roll-calls with instant QR code scanning and administrative oversight.",
    focusAreas: ["QR-based attendance", "Student scanning", "Secure attendance", "MySQL data storage", "Admin dashboard", "Attendance reports"],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    coverImage: "/images/projects/smart-bus/smart-bus-cover.png",
    screenshots: [
      {
        url: "/images/projects/smart-bus/smart-bus-cover.png",
        caption: "Centralized Admin Dashboard & Real-Time Bus Verification Log"
      }
    ],
    overview: "The Smart Bus Attendance System replaces slow, error-prone paper registers on institutional transportation routes with an instantaneous digital verification pipeline.",
    problem: "Manual attendance taking on moving buses is cumbersome, prone to proxy attendance, and delays communication between transport coordinators and academic administrations.",
    solution: "Provides each student with a unique verified digital identity. Upon boarding, students scan their QR code, instantly committing timestamped attendance to a central MySQL database accessible to transport managers.",
    keyFeatures: [
      "Instantaneous QR-based attendance recording upon boarding",
      "Real-time administrative monitoring of route passenger counts",
      "Centralized MySQL relational schema storing routes, buses, and student logs",
      "Automated attendance report generation with export capabilities",
      "Responsive driver and coordinator mobile-friendly interface"
    ],
    technology: [
      "HTML5 & CSS3 for responsive transit dashboard interfaces",
      "JavaScript for QR scanner hardware integration and asynchronous updates",
      "PHP for secure server-side transaction handling and authentication",
      "MySQL for relational data integrity across students and transit routes"
    ],
    developmentApproach: "Engineered with normalized database tables ensuring minimal latency during peak morning and evening boarding windows. Designed a clean, high-contrast UI suitable for quick glance operations.",
    demoUrl: null,
    githubUrl: null,
    status: "Completed Prototype"
  },
  {
    id: "smart-study",
    number: "04",
    category: "ACADEMIC PRODUCTIVITY & SCHEDULING",
    featured: false,
    title: "SMART STUDY PLANNER",
    subtitle: "ACADEMIC PRODUCTIVITY & TIME MANAGEMENT",
    tagline: "Intuitive academic planner assisting students with schedule scheduling, task prioritization, and exam milestones.",
    shortDesc: "A focused productivity application designed for college students to organize study schedules, set automated subject reminders, and track revision progress.",
    focusAreas: ["Task management", "Study reminders", "Progress tracking", "Exam scheduling", "Productivity", "Time management"],
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
    coverImage: "/images/projects/smart-study/smart-study-cover.png",
    screenshots: [
      {
        url: "/images/projects/smart-study/smart-study-cover.png",
        caption: "Smart Study Planner Timetable, Countdown & Focus Timer"
      }
    ],
    overview: "Smart Study Planner empowers engineering students to organize their academic workload, allocate realistic revision windows for complex courses, and maintain consistency throughout semester exams.",
    problem: "Engineering students balance multiple rigorous subjects, lab submissions, and internal assessments, often leading to fragmented study habits and last-minute cramming.",
    solution: "The planner centralizes syllabus topics into actionable study blocks, tracks completion percentages, provides countdown timers toward impending exam dates, and offers integrated focus sessions.",
    keyFeatures: [
      "Syllabus-aligned task management and subject categorization",
      "Dynamic countdown timers for semester exams and lab assessments",
      "Built-in study timer supporting focused interval sessions",
      "Progress tracking charts showing syllabus completion percentage",
      "Study reminder notifications preventing neglected subjects"
    ],
    technology: [
      "HTML5 semantic structures for clear schedule visualization",
      "CSS3 for sleek dark-slate theme and responsive card grids",
      "JavaScript for interactive timer logic, filter states, and DOM updates",
      "MySQL for persistent user task lists and subject completion archives"
    ],
    developmentApproach: "Focused on minimal cognitive friction. The user interface prioritizes clarity and immediate task creation, utilizing lightweight JavaScript handlers and clean database queries.",
    demoUrl: null,
    githubUrl: null,
    status: "Completed Project"
  }
];
