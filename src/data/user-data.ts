export const experiences = [
  {
    date: "July 2024 - Present",
    company: "Freelance websites",
    companyIcon: '/icons/circle-user.svg',
    role: "Full stack mobile developer",
    details: [
      "Developed multiple mobile applications, from scratch, some web applications for specific clients",
      "Build high quality back-end systems for users",
      "Migrate back-end systems from Firebase to RestFull API alongside the link between the front-end and the back-end",
    ],
  },
  {
    date: "February - March 2025",
    company: "Caisse Nationale des Retraites (CNR)",
    companyIcon: '/images/cnr.png',
    role: "Software Engineer",
    details: [
      "Developed a Full stack web application for tracking all the IT equipments inside the company with tracking their status, sold archive",
      "Learned dealing with MySQL database and Active Directory",
    ],
  },
]

export const education = [
  {
    date: "2020 - 2025",
    company: "Ecole Nationale Polytechnique d'Oran",
    companyIcon: '/images/logo_enpo.png',
    role: "Master & Enginnering Degree in Engineering & Management of Information Systems",
    details: [
      "One of the brilliant minds in school, by ranking 2nd in my class",
      "Studied many relevent courses like: Web Development, Mobile Development, Projects Managements, Process Management",
    ],
  },
  {
    date: "2017 - 2020",
    company: "Emir Abdelkader High School",
    companyIcon: '/icons/school.svg',
    role: "Baccalauréat in Expiremntal Science",
    details: [
      "Graduated with Honors",
      "Top class student",
    ],
  },
]

export const technologies = [
  { icon: "/icons/flutter.svg", name: "Flutter" },
  { icon: "/icons/dart.svg", name: "Dart" },
  { icon: "/icons/kotlin.svg", name: "Kotlin" },
  { icon: "/icons/node-js.svg", name: "Node.js" },
  { icon: "/icons/express-js.svg", name: "Express" },
  { icon: "/icons/NestJS.svg", name: "NestJs" },
  { icon: "/icons/firebase.svg", name: "Firebase" },
  { icon: "/icons/postgresql.svg", name: "PostgreSQL" },
  { icon: "/icons/Mongodb-icon.svg", name: "MongoDB" },
  { icon: "/icons/html.svg", name: "HTML" },
  { icon: "/icons/css.svg", name: "CSS" },
  { icon: "/icons/javascript.svg", name: "JavaScript" },
  { icon: "/icons/react-native.svg", name: "React" },
  { icon: "/icons/typescript.svg", name: "Typescript" },
  { icon: "/icons/git.svg", name: "Git" },
]

export interface ProjectLink {
  iconSrc: string
  alt: string
  url: string
}

export interface Project {
  id: number
  title: string
  description: string
  about: string
  topTechnologies: string[]
  links: ProjectLink[]
  durations: string
  role: string
  platforms: string[]
  year: string
  keyFeatures: string[]
  thumbnail: string
  screenshots: string[]
}

export const projects: Project[] = [
  {
    id: 0,
    title: "Quantify -- Shop Manager",
    description: "Quantify is a practical mobile app built for small businesses such as barbershops, salons, and service providers. It enables client management, payment tracking, and income monitoring in one place, offering a simple and reliable tool to keep daily operations organized—even without internet access.",
    about: "Quantify is a practical mobile app built for small businesses such as barbershops, salons, and service providers. It enables client management, payment tracking, and income monitoring in one place, offering a simple and reliable tool to keep daily operations organized—even without internet access.",
    topTechnologies: ["Flutter", "Dart", "SQLite", "Bloc", "Lottie"],
    links: [
      { iconSrc: '/icons/github.svg', alt: 'GitHub', url: "https://github.com/dadixcod/quantify-readme" },
    ],
    durations: "3 months",
    role: "Full Stack Mobile Developer",
    platforms: ["iOS", "Android"],
    year: "2025",
    keyFeatures: [
      "Multiple themes",
      "Multiple Stores",
      "Clean Architecture",
      "Bloc State Management",
      "Push Notifications",
      "Multiple Languages",
      "Multiple Currencies",
    ],
    thumbnail: "/images/quantify/Thumbnail.png",
    screenshots: [
      "/images/quantify/Thumbnail.png",
      "/images/quantify/OnBoarding Dark.png",
      "/images/quantify/OnBoarding Light.png",
      "/images/quantify/MULTI STEP FORM P1.png",
      "/images/quantify/MULTI STEP FORM P2.png",
      "/images/quantify/Tickets Screen P1.png",
      "/images/quantify/Tickets Screen P2.png",
      "/images/quantify/Clients Screen P1.png",
      "/images/quantify/Clients Screen P2.png",
      "/images/quantify/Statistics Screen.png",
      "/images/quantify/Settings Screen.png",
      "/images/quantify/More Screen.png",
    ],
  },
  {
    id: 1,
    title: "Researcher Agent",
    description: "The Researcher agent is an MVP that consist of building and AI Powered application that help the user gather some deep information about his complex question. The app can trigger questions via Voice with Speech to Text techniques, and talk back via Text to speech techniques.",
    about: "The Researcher agent is an MVP that consist of building and AI Powered application that help the user gather some deep information about his complex question. The app can trigger questions via Voice with Speech to Text techniques, and talk back via Text to speech techniques.",
    topTechnologies: ["Flutter", "Dart", "SQLite", "Bloc", "Lottie"],
    links: [
      { iconSrc: '/icons/github.svg', alt: 'GitHub', url: "https://github.com/dadixCod/researcher-readme" },
    ],
    durations: "1 months",
    role: "Full Stack Mobile Developer",
    platforms: ["iOS", "Android"],
    year: "2025",
    keyFeatures: [
      "Speech Recognition",
      "Open AI Integration",
      "Text to speech",
      "Catchy Color Movement",
      "Bloc State Management",
      "Web Sockets",
    ],
    thumbnail: "/images/researcher/Researcher_Thumbnail.png",
    screenshots: [
      "/images/researcher/Researcher_Thumbnail.png",
      "/images/researcher/1.png",
      "/images/researcher/2.png",
    ],
  },
  {
    id: 2,
    title: "Portfolio V1",
    description: "The first version of this portfolio. It was designed by React pure, clean, elegant one signle page. The first step is always followed by the next one, and this was the first.",
    about: "The first version of this portfolio. It was designed by React pure, clean, elegant one signle page. The first step is always followed by the next one, and this was the first.",
    topTechnologies: ["Flutter", "Dart", "SQLite", "Bloc", "Lottie"],
    links: [
      { iconSrc: '/icons/github.svg', alt: 'GitHub', url: "https://github.com/dadixCod/portfolio" },
      { iconSrc: '/icons/globe.svg', alt: 'Live', url: "https://dadixcod-v1.netlify.app/" },
    ],
    durations: "1 months",
    role: "Full Stack Mobile Developer",
    platforms: ["iOS", "Android"],
    year: "2025",
    keyFeatures: [
      "One Page Scroll",
      "Animated content",
      "Direct email integration",
      "React JS",
    ],
    thumbnail: "/images/portfoliov1/Thumbnail.png",
    screenshots: [
      "/images/portfoliov1/Thumbnail.png",
      "/images/portfoliov1/1.png",
      "/images/portfoliov1/2.png",
      "/images/portfoliov1/3.png",
      "/images/portfoliov1/4.png",
    ],
  },
  {
    id: 3,
    title: "Pharmabot",
    description: "Pharmabot-- AI Pharmaceutical Chatbot, that help pharmacies accessing relevent data about their drugs. Building a RAG architecture was hard especially with real data, working with Knowledge Graph, FastAPI and Flutter for the frontend result this beautiful application.",
    about: "Pharmabot-- AI Pharmaceutical Chatbot, that help pharmacies accessing relevent data about their drugs. Building a RAG architecture was hard especially with real data, working with Knowledge Graph, FastAPI and Flutter for the frontend result this beautiful application.",
    topTechnologies: ["Flutter", "Dart", "SQLite", "Bloc", "Lottie"],
    links: [
      { iconSrc: '/icons/github.svg', alt: 'GitHub', url: "https://github.com/dadixCod/pharmabot-readme" },
    ],
    durations: "6 months",
    role: "Full Stack Mobile Developer",
    platforms: ["iOS", "Android"],
    year: "2025",
    keyFeatures: [
      "Open Router API",
      "Web Sokcets",
      "RAG integration",
      "Knowledge Graphs",
      "Web View PDF",
    ],
    thumbnail: "/images/pharmabot/Thumbnail.png",
    screenshots: [
      "/images/pharmabot/Thumbnail.png",
      "/images/pharmabot/1.png",
      "/images/pharmabot/2.png",
      "/images/pharmabot/3.png",
    ],
  },
  {
    id: 4,
    title: "My MIB",
    description: "An Advanced financial management app developed with Flutter and Dart. Easily track expenses and incomes with customizable categories. Gain insights into your spending habits with detailed analytics. Available in Arabic, English, and French with secure authentication options.",
    about: "An Advanced financial management app developed with Flutter and Dart. Easily track expenses and incomes with customizable categories. Gain insights into your spending habits with detailed analytics. Available in Arabic, English, and French with secure authentication options.",
    topTechnologies: ["Flutter", "Dart", "SQLite", "Bloc", "Lottie"],
    links: [
      { iconSrc: '/icons/github.svg', alt: 'GitHub', url: "https://github.com/dadixCod/mymib-readme" },
    ],
    durations: "1 months",
    role: "Full Stack Mobile Developer",
    platforms: ["iOS", "Android"],
    year: "2025",
    keyFeatures: [
      "Effective Analytics",
      "Google Authentication",
      "Custom reports",
      "Premium features",
    ],
    thumbnail: "/images/mymib/MyMib_Thumbnail.png",
    screenshots: [
      "/images/mymib/MyMib_Thumbnail.png",
      "/images/mymib/SignUpLogIn.png",
      "/images/mymib/HomeStat.png",
      "/images/mymib/Categories.png",
    ],
  },
]
