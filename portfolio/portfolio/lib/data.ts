export const personal = {
  name: "Chun Wai Chiu",
  casual: "Allen",
  title: "Graduate Software Engineer",
  tagline:
    "Graduate Software Engineer building full-stack and AI-enabled applications.",
  summary:
    "I am a Sydney-based software engineering graduate with experience in full-stack web development, REST API implementation, GenAI-integrated applications, cloud-based systems, Java application development, and client-facing project delivery.",
  location: "Sydney, NSW, Australia",
  email: "AllenChiu010314@gmail.com",
  phone: "0403 148 738",
  linkedin: "https://www.linkedin.com/in/chunwai-chiu-318746292/",
  github: "https://github.com/AllenChiu0314",
  workRights: "Full working rights in Australia",
  about: `I recently completed a Master of Engineering Management at the University of Technology Sydney after graduating with a Bachelor of Software Engineering (Honours) from The University of Sydney. My work sits between software engineering, AI applications, and technical product delivery.

Through university projects, research, and consulting experience, I have worked across full-stack web platforms, REST APIs, GenAI integrations, Java applications, database-backed systems, and client-facing project communication. I am currently seeking graduate software engineering, junior developer, full-stack, and AI/GenAI developer opportunities in Australia.`,
};

export const education = [
  {
    institution: "University of Technology Sydney",
    degree: "Master of Engineering Management",
    grade: "Distinction",
    period: "Jul 2025 – May 2026",
    logo: null,
  },
  {
    institution: "The University of Sydney",
    degree: "Bachelor of Software Engineering (Honours)",
    grade: "Class II",
    period: "Jan 2020 – Dec 2024",
    logo: null,
  },
];

export const experience = [
  {
    company: "Jacaranda Flame Consulting",
    role: "Consulting Engineer Intern",
    period: "2023 – 2024",
    type: "Internship",
    highlights: [
      "Participated in client meetings and gathered technical requirements",
      "Produced technical documentation, reports, and presentation materials",
      "Conducted data analysis and prototyping to support project outcomes",
      "Worked with Python, CAD tools, and Raspberry Pi for engineering tasks",
      "Communicated findings to stakeholders and refined deliverables based on feedback",
    ],
  },
  {
    company: "ALDI",
    role: "Assistant Manager",
    period: "2021 – 2023",
    type: "Management",
    highlights: [
      "Led a team of 10+ staff across day-to-day store operations",
      "Coordinated scheduling, training, and performance support for team members",
      "Managed customer-facing problem solving and operational decision making",
      "Developed communication and leadership skills in a high-pressure environment",
    ],
  },
];

export const skills = {
  Languages: ["Java", "Python", "C", "JavaScript", "TypeScript"],
  Frontend: ["React", "Vue", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["Spring Boot", "REST APIs", "JWT", "Authentication", "Authorization"],
  Databases: ["PostgreSQL", "SQLite", "Supabase", "SQL"],
  "Cloud / DevOps": ["AWS", "Docker", "Git", "Gradle", "CI/CD"],
  "AI / Data": [
    "GenAI APIs",
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "OpenCV",
    "TensorFlow",
    "PyTorch",
  ],
};

export interface Project {
  slug: string;
  title: string;
  summary: string;
  period: string;
  type: string;
  tech: string[];
  image: string | null;
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
  problem: string;
  solution: string;
  contribution: string;
  features: string[];
  technicalFocus: string;
  learned: string;
  futureWork: string;
  employerValue: string;
}

export const projects: Project[] = [
  {
    slug: "ai-legal-assistant",
    title: "Multi-Model AI Legal Assistant Platform",
    summary:
      "A full-stack GenAI web platform that allows users to interact with multiple AI models through a unified legal assistance interface.",
    period: "Jun 2024 – Dec 2024",
    type: "Full-stack Web Application",
    tech: ["Vue", "Java", "Spring Boot", "Supabase", "GenAI APIs"],
    image: null,
    liveUrl: null,
    githubUrl: null,
    featured: true,
    problem:
      "Legal information can be difficult and expensive for users to navigate independently. AI models can provide an accessible support interface to help users understand legal concepts and gather relevant information — reducing barriers without replacing professional legal advice.",
    solution:
      "A web platform integrating five GenAI models (including ChatGPT, Gemini, and Claude) into a single legal assistance interface, allowing users to submit legal questions and receive AI-generated responses directly within the platform.",
    contribution:
      "Contributed to frontend and backend development, including the chatbox feature, GenAI API integration, eight APIs supporting AI interaction, document handling, and user-generated content, as well as database-backed platform features.",
    features: [
      "Integration of five GenAI models into a unified interface",
      "Interactive chatbox for submitting legal questions and receiving AI responses",
      "Eight APIs supporting AI interaction, document handling, and user content",
      "Database-backed user platform built with Supabase",
      "Full-stack architecture using Vue (frontend) and Spring Boot (backend)",
    ],
    technicalFocus:
      "GenAI API integration, Spring Boot REST APIs, Vue frontend, Supabase database, document handling, multi-model orchestration.",
    learned:
      "Working across multiple AI APIs highlighted the importance of response reliability, prompt design, and responsible framing of AI-generated output in user-facing contexts. The project also deepened my understanding of full-stack system design with database-backed features.",
    futureWork:
      "Add user authentication, conversation history persistence, response confidence indicators, and improved prompt engineering for more accurate legal information retrieval.",
    employerValue:
      "Demonstrates GenAI API integration, full-stack development, API design, database-backed feature implementation, and awareness of AI-assisted application workflows.",
  },
  {
    slug: "hotel-booking-system",
    title: "Cloud-Based Hotel Booking System",
    summary:
      "A cloud-based hotel booking platform with secure authentication, role-based access control, room filtering, availability calendar, real-time booking, payment flow, and automated booking confirmations.",
    period: "2023 – 2024",
    type: "Full-stack Cloud Application",
    tech: ["AWS", "JWT", "RBAC", "REST APIs", "PostgreSQL", "Email Automation"],
    image: null,
    liveUrl: null,
    githubUrl: null,
    featured: true,
    problem:
      "Hotel booking systems require secure user access, accurate room availability management, user-friendly search, and reliable payment and confirmation workflows — all while supporting multiple user roles with different access levels.",
    solution:
      "A cloud-based booking platform designed with JWT authentication, role-based access control for customers, hotel owners, and admins, a room search engine with filters, an availability calendar, real-time booking logic, multi-payment support, and automated email confirmations.",
    contribution:
      "Contributed to system design and implementation across authentication, RBAC, booking workflow, search, calendar availability, payment flow design, and email automation.",
    features: [
      "JWT-based authentication with register, sign-in, and 2FA for payment",
      "Role-based access control for customers, hotel owners, and admins",
      "Room search with filters by type, location, rating, and price",
      "Visual availability calendar with real-time booking lock-in",
      "Multi-payment support: PayPal, credit card, bank transfer",
      "Automated emails for booking confirmation, invoicing, and arrival info",
      "Discount and voucher logic",
      "Hotel owner dashboard for updating room and pricing information",
    ],
    technicalFocus:
      "AWS cloud infrastructure, JWT authentication, RBAC permission management, booking workflow design, database-backed real-time availability, email automation, payment flow integration.",
    learned:
      "This project deepened my understanding of secure access control design, cloud-based system architecture, real-time state management, and the complexity of balancing business workflow needs with user experience across multiple user roles.",
    futureWork:
      "Add mobile-responsive UI, booking analytics dashboard for hotel owners, review and rating system, and integration with third-party calendar APIs.",
    employerValue:
      "Demonstrates full-stack system design, AWS exposure, authentication and authorization knowledge, booking workflow logic, user role management, and product-focused software architecture.",
  },
  {
    slug: "ourvoice",
    title: "OurVoice Civic Engagement Platform",
    summary:
      "A client-facing civic engagement platform developed in a 7-person full-stack team to support community communication and user interaction.",
    period: "Aug 2023 – Jan 2024",
    type: "Team Full-stack Project",
    tech: ["Python", "React", "REST APIs", "HTML", "SQL"],
    image: null,
    liveUrl: "https://www.itsourvoice.com/",
    githubUrl: null,
    featured: true,
    problem:
      "Communities and elected officials often lack effective digital channels for structured, transparent communication. A civic engagement platform can bridge this gap by providing tools for community members to raise issues, track progress, and interact with representatives.",
    solution:
      "A full-stack social platform built across a 7-person team, delivering seven core features based on client requirements, three RESTful APIs, and integrated React frontend components with backend services.",
    contribution:
      "Contributed to seven core platform features based on client requirements, developed three RESTful APIs, integrated React frontend components with backend services, and participated in fortnightly client meetings to communicate progress, gather feedback, and refine deliverables throughout the development cycle.",
    features: [
      "Seven core platform features delivered to client specification",
      "Three RESTful APIs supporting reliable data exchange",
      "React frontend integrated with Python backend services",
      "User interaction features supporting civic communication",
      "Iterative development with fortnightly client feedback loops",
    ],
    technicalFocus:
      "RESTful API design, React frontend development, Python backend, SQL database integration, client communication, and agile-style iterative delivery.",
    learned:
      "Working in a seven-person team on a real client project reinforced the importance of clear communication, scope management, and iterative delivery. Client feedback loops helped me understand how requirements evolve and how to refine deliverables accordingly.",
    futureWork:
      "Enhanced notification system, mobile-responsive design improvements, and expanded analytics for community moderators.",
    employerValue:
      "Demonstrates team-based full-stack delivery, REST API development, frontend/backend integration, client communication, requirements refinement, and collaborative software development.",
  },
  {
    slug: "pool-game",
    title: "JavaFX Pool Game",
    summary:
      "An individual JavaFX pool game implementing physics, collision handling, configurable game rules, difficulty switching, undo behaviour, and multiple object-oriented design patterns.",
    period: "Jan 2024 – Jun 2024",
    type: "Individual Java Application",
    tech: ["Java", "JavaFX", "Gradle", "JSON", "OOP Design Patterns"],
    image: "/images/pool-game.png",
    liveUrl: null,
    githubUrl: null,
    featured: true,
    problem:
      "Design and implement a playable pool game with configurable rules, meaningful game states, and maintainable code architecture — demonstrating object-oriented design fundamentals in a non-trivial application.",
    solution:
      "A JavaFX application implementing ball physics, collision detection, pocket detection, scoring, timer, difficulty levels (Easy / Normal / Hard), undo behaviour via the Memento pattern, JSON-based pocket configuration, and cheat controls — all structured using established OOP design patterns.",
    contribution:
      "Individual project: designed and implemented the full application including physics engine, game state logic, UI, JSON configuration system, and design pattern architecture.",
    features: [
      "Ball physics with friction, velocity, and collision calculation",
      "Pocket detection and scoring system",
      "Timer and score display",
      "Difficulty switching (Easy, Normal, Hard)",
      "Undo functionality using the Memento design pattern",
      "JSON-based pocket configuration",
      "Builder, State, Memento, and Strategy design patterns",
      "Cheat controls for game testing",
    ],
    technicalFocus:
      "Java OOP, JavaFX UI, Gradle build system, JSON configuration, collision physics algorithm, design pattern implementation (Builder, State, Memento, Strategy).",
    learned:
      "This project strengthened my understanding of how to structure complex object-oriented systems and manage evolving game state. Applying formal design patterns to a real application made their practical value clear — particularly the Memento pattern for undo behaviour and the Strategy pattern for difficulty switching.",
    futureWork:
      "Add multiplayer mode, network-based leaderboard, and unit tests for physics and collision logic.",
    employerValue:
      "Demonstrates Java fundamentals, OOP design, game state management, algorithmic thinking, UI implementation, JSON configuration, and maintainable code structure.",
  },
  {
    slug: "vending-machine",
    title: "JavaFX Vending Machine System",
    summary:
      "A JavaFX vending machine application with login, product selection, cart management, cash and card payment flows, JSON data handling, and MVC-style architecture.",
    period: "2023 – 2024",
    type: "Java Application",
    tech: ["Java", "JavaFX", "Gradle", "JSON", "MVC", "JUnit", "JaCoCo"],
    image: null,
    liveUrl: null,
    githubUrl: null,
    featured: false,
    problem:
      "Build a functional vending machine application with realistic payment flows, user authentication, and clean separation of application concerns.",
    solution:
      "A JavaFX application structured using MVC principles, supporting user login, product browsing and selection, cart management, and both cash and card payment flows with JSON-based data handling.",
    contribution:
      "Individual project: designed and implemented the full application including login flow, product selection, cart logic, payment state management, JSON data layer, and test setup.",
    features: [
      "User login and session management",
      "Product selection and cart management",
      "Cash and card payment flows",
      "JSON-based product and data handling",
      "MVC-style application structure",
      "Test setup with JaCoCo coverage configuration",
    ],
    technicalFocus:
      "Java application structure, JavaFX UI design, payment state logic, JSON data handling, MVC architecture, JUnit testing setup.",
    learned:
      "Structuring an MVC application in JavaFX highlighted the benefits of clear separation between model logic, view rendering, and controller flow — particularly when managing multi-step payment state.",
    futureWork:
      "Add product inventory management, admin interface, receipt generation, and expanded unit test coverage.",
    employerValue:
      "Demonstrates Java application structure, UI workflow design, payment-state logic, JSON data handling, testing setup, and object-oriented programming.",
  },
];

export const research = {
  title:
    '"Do as I say not as I do": A Semi-Automated Approach for Jailbreak Prompt Attack against Multimodal LLMs',
  authors: "Co-author",
  year: "2025",
  url: "https://arxiv.org/pdf/2502.00735",
  arxivUrl: "https://arxiv.org/abs/2502.00735",
  summary:
    "This paper presents a semi-automated approach for evaluating jailbreak prompt attacks against multimodal large language models, contributing to AI safety research on adversarial robustness and policy-violation evaluation.",
  topics: [
    "AI Safety",
    "Multimodal LLMs",
    "Jailbreak Attacks",
    "Adversarial Robustness",
    "Policy-Violation Evaluation",
  ],
  contribution:
    "Contributed to research on AI safety and multimodal LLM jailbreak attacks as co-author.",
};
