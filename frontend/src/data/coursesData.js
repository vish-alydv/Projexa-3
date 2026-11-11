export const LEARNING_PATHS = [
  {
    id: "web-dev",
    title: "Web Development",
    iconName: "Globe",
    category: "Frontend & Fullstack",
    difficulty: "Intermediate",
    lessonsCount: 36,
    projectsCount: 6,
    estimatedHours: "38h",
    rating: 4.9,
    enrolledCount: "18.4k",
    description: "Master modern full-stack web applications with React, TypeScript, APIs, and scalable cloud architecture.",
    syllabus: [
      { title: "HTML5 Semantics & Accessible Foundations", duration: "3h 20m", lessons: 6 },
      { title: "Modern CSS Architecture & Tailwind Precision", duration: "5h 45m", lessons: 8 },
      { title: "JavaScript ESNext & Async Patterns", duration: "7h 15m", lessons: 10 },
      { title: "Production React 19 & Component Design", duration: "12h 30m", lessons: 12 },
    ],
    highlights: ["Interactive live sandbox", "6 real-world capstones", "Code reviews by seniors"],
    color: "blue"
  },
  {
    id: "prog-fundamentals",
    title: "Programming Fundamentals",
    iconName: "Code2",
    category: "Core Foundations",
    difficulty: "Beginner",
    lessonsCount: 24,
    projectsCount: 4,
    estimatedHours: "26h",
    rating: 4.95,
    enrolledCount: "24.1k",
    description: "Build an unshakable foundation in algorithmic thinking, data structures, and computer science principles.",
    syllabus: [
      { title: "Computational Thinking & Problem Decomposition", duration: "3h 10m", lessons: 5 },
      { title: "Control Flow, Loops & Conditionals", duration: "4h 40m", lessons: 6 },
      { title: "Functions, Scope & Memory Paradigms", duration: "6h 15m", lessons: 7 },
      { title: "Fundamental Algorithms & Complexity (Big-O)", duration: "8h 00m", lessons: 6 },
    ],
    highlights: ["Zero prerequisite required", "Hands-on logic puzzles", "Instant automated grading"],
    color: "violet"
  },
  {
    id: "data-ai",
    title: "Data & AI",
    iconName: "BrainCircuit",
    category: "Artificial Intelligence",
    difficulty: "Advanced",
    lessonsCount: 32,
    projectsCount: 5,
    estimatedHours: "42h",
    rating: 4.88,
    enrolledCount: "12.8k",
    description: "From data wrangling with Python to training neural networks and building production LLM pipelines.",
    syllabus: [
      { title: "Python Scientific Stack (NumPy, Pandas)", duration: "6h 30m", lessons: 7 },
      { title: "Exploratory Data Analysis & Statistical Modeling", duration: "7h 15m", lessons: 8 },
      { title: "Supervised & Unsupervised Machine Learning", duration: "11h 20m", lessons: 9 },
      { title: "Prompt Engineering & Retrieval-Augmented Generation", duration: "13h 45m", lessons: 8 },
    ],
    highlights: ["Kaggle-ready datasets", "Jupyter cloud notebooks", "Deploy LLM microservices"],
    color: "indigo"
  },
  {
    id: "database-systems",
    title: "Database Systems",
    iconName: "Database",
    category: "Backend & Infra",
    difficulty: "Intermediate",
    lessonsCount: 20,
    projectsCount: 3,
    estimatedHours: "22h",
    rating: 4.92,
    enrolledCount: "9.6k",
    description: "Design resilient relational schemas, tune indexing strategies, and operate high-concurrency document stores.",
    syllabus: [
      { title: "Relational Modeling & Normalization Form 1-3", duration: "4h 15m", lessons: 5 },
      { title: "Advanced SQL, Window Functions & CTEs", duration: "6h 30m", lessons: 6 },
      { title: "Query Optimization, B-Trees & Execution Plans", duration: "5h 45m", lessons: 5 },
      { title: "Distributed NoSQL & In-Memory Redis Caching", duration: "5h 30m", lessons: 4 },
    ],
    highlights: ["SQL query playground", "Query latency profiling", "Real transaction workloads"],
    color: "cyan"
  }
];

export const TRUST_BENEFITS = [
  {
    id: 1,
    title: "Structured Learning",
    description: "Logical step-by-step curricula with no skipped fundamentals.",
    iconName: "Compass"
  },
  {
    id: 2,
    title: "Practical Concepts",
    description: "Real-world code examples instead of abstract academic trivia.",
    iconName: "Zap"
  },
  {
    id: 3,
    title: "Progress Tracking",
    description: "Precise skill diagnostics and actionable milestone feedback.",
    iconName: "LineChart"
  },
  {
    id: 4,
    title: "Learn at Your Pace",
    description: "Bite-sized modules made to fit around your daily schedule.",
    iconName: "Clock"
  }
];

export const FEATURES = [
  {
    id: "structured",
    title: "Structured Learning",
    tagline: "Sequential Knowledge Architecture",
    description: "Say goodbye to scattered tutorials. Every course is organized into clear, cumulative milestones that guide you from fundamental building blocks to production mastery.",
    iconName: "Layers",
    badge: "Curated Roadmaps",
    details: [
      "No skipped prerequisites",
      "Progressive cognitive difficulty",
      "Validated by industry practitioners"
    ]
  },
  {
    id: "interactive",
    title: "Interactive Lessons",
    tagline: "Hands-on Code & Instant Feedback",
    description: "Read, experiment, and run code directly in your browser. Interactive sandboxes give instant feedback so you absorb concepts through actual execution, not passive video watching.",
    iconName: "Terminal",
    badge: "Active Recall",
    details: [
      "In-browser interactive sandboxes",
      "Instant syntax & logic verification",
      "Practical project checkpoints"
    ]
  },
  {
    id: "tracking",
    title: "Progress Tracking",
    tagline: "Granular Mastery Analytics",
    description: "See exactly where you stand. Our diagnostic dashboard tracks retention rates, completed problem sets, and weekly focus hours with zero friction.",
    iconName: "Activity",
    badge: "Real-Time Telemetry",
    details: [
      "Weekly momentum tracking",
      "Topic-by-topic comprehension score",
      "Milestone certificates upon completion"
    ]
  },
  {
    id: "pace",
    title: "Learn at Your Pace",
    tagline: "Zero Deadlines, Maximum Clarity",
    description: "Fit your education into your life. Whether you have 15 focused minutes during lunch or dedicated weekend study blocks, your progress syncs seamlessly across devices.",
    iconName: "Clock3",
    badge: "Self-Paced Freedom",
    details: [
      "Bite-sized 10-15 minute lessons",
      "Lifetime unlimited access",
      "Resume anytime exactly where you left off"
    ]
  }
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Choose",
    subtitle: "Select your target discipline",
    description: "Explore curated paths tailored to your current skill level, whether transitioning into tech or deepening your engineering expertise.",
    iconName: "Compass"
  },
  {
    step: "02",
    title: "Learn",
    subtitle: "Absorb focused, modular lessons",
    description: "Digest clear visual explanations, practical examples, and interactive exercises designed for deep mental clarity.",
    iconName: "BookOpen"
  },
  {
    step: "03",
    title: "Progress",
    subtitle: "Validate skills & achieve mastery",
    description: "Complete real-world capstone projects, track your competency metrics, and graduate with genuine practical confidence.",
    iconName: "Award"
  }
];

export const USER_PROGRESS_MOCK = {
  activeCourse: "Web Development",
  activeModule: "Module 4: Modern Component Architecture",
  activeLesson: "Lesson 28: State Machines & UI Synchronization",
  courseProgress: 78,
  totalLessons: 36,
  completedLessons: 28,
  weeklyProgress: 82,
  weeklyLessonsCompleted: 12,
  weeklyLearningHours: 4,
  coursesInProgressCount: 3,
  recentLessons: [
    { id: 1, title: "CSS Grid & Fluid Subgrid Systems", status: "completed", date: "Yesterday" },
    { id: 2, title: "State Management with React Hooks", status: "completed", date: "2 days ago" },
    { id: 3, title: "Component Composition Patterns", status: "completed", date: "3 days ago" },
    { id: 4, title: "State Machines & UI Synchronization", status: "in_progress", date: "Up next" }
  ],
  weeklyActivity: [
    { day: "Mon", minutes: 45, height: "65%" },
    { day: "Tue", minutes: 60, height: "85%" },
    { day: "Wed", minutes: 35, height: "50%" },
    { day: "Thu", minutes: 75, height: "100%" },
    { day: "Fri", minutes: 30, height: "45%" },
    { day: "Sat", minutes: 20, height: "30%" },
    { day: "Sun", minutes: 0, height: "8%" },
  ]
};
