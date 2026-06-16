// ─── Project Images ────────────────────────────────────────────────
import liver_image from "../assets/projects/liver_image.jpg";
import code_converter from "../assets/projects/code_converter.png";
import calculator from "../assets/projects/calculator.png";
import hospital_management_system from "../assets/projects/hospital_management_system.png";
import churn from "../assets/projects/Customer_Churn_Prediction.png";
import loan from "../assets/projects/Loan_Approval_Prediction.png";
import crop_prediction from "../assets/projects/crop-prediction.png";
import flower_prediction from "../assets/projects/flower-prediction.png";
import smartkart from "../assets/projects/smartkart.png";

// ─── Social Links ──────────────────────────────────────────────────
export const SOCIAL_LINKS = {
  github: "https://github.com/Murugavl",
  linkedin: "https://www.linkedin.com/in/murugavelv",
  leetcode: "https://leetcode.com/u/murugavl/",
  geeksforgeeks: "https://www.geeksforgeeks.org/user/mrvmvho0/",
  codechef: "https://www.codechef.com/users/murugavelv",
};

// ─── Terminal Script ───────────────────────────────────────────────
export const TERMINAL_LINES = [
  { prompt: ">>> ", text: "import murugavel as dev" },
  { prompt: ">>> ", text: "dev.role" },
  { output: "'Python Developer & ML Engineer'" },
  { prompt: ">>> ", text: "dev.builds()" },
  { output: "'Models that turn data into decisions'" },
  { prompt: ">>> ", text: "dev.stack" },
  { output: "['Python', 'Django', 'Flask', 'scikit-learn', 'Streamlit']" },
  { prompt: ">>> ", text: "dev.status" },
  { output: "'Open to internships & entry-level roles ✓'" },
];

// ─── Hero ──────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: "# whoami",
  name: "MURUGAVEL V",
  role: "Python Developer & ML Engineer",
  tagline:
    "I build machine learning systems and Python applications that turn raw data into real decisions.",
  ctaPrimary: { label: "View Projects", href: "#projects" },
  ctaSecondary: {
    label: "Download Résumé",
    href: "/resume.pdf",
  },
};

// ─── About ─────────────────────────────────────────────────────────
export const ABOUT = {
  bio: "I'm a B.Tech graduate in Artificial Intelligence & Data Science from Hindusthan Institute of Technology. I build machine learning models and Python applications — from predictive systems to deployable web apps — and I'm constantly exploring how deep learning can solve real-world problems.",
  hobbies: ["Watching series / movies", "Reading books"],
  kural: {
    tamil:
      "முறைகோடி மன்னவன் செய்யின் உறைகோடி ஒல்லாது வானம் பெயல்.",
    attribution: "Thiruvalluvar · Thirukkural · Kural 559 (Tyranny)",
    gloss:
      "This verse warns that when a ruler abandons justice, the rains themselves fail to fall in season — used here as a personal reminder that integrity in small things shows up in the big ones.",
  },
};

// ─── Skills ────────────────────────────────────────────────────────
export const SKILLS = {
  languages: ["Python", "Java"],
  frameworks: [
    "Django",
    "Flask",
    "Streamlit",
    "scikit-learn",
    "NumPy",
    "Pandas",
  ],
  tools: [
    "Jupyter Notebook",
    "Tkinter",
    "MongoDB",
    "Git",
    "GitHub",
    "Docker",
    "Android Studio",
  ],
};

// ─── Experience ────────────────────────────────────────────────────
export const EXPERIENCES = [
  {
    period: "June 2024",
    role: "Data Science Intern",
    company: "Technohacks Edutech",
    bullets: [
      "Developed data analysis and machine learning models to extract actionable insights from raw datasets.",
      "Applied ML techniques to improve predictive accuracy on classification tasks — add specific dataset/metric here.",
      "Collaborated with cross-functional teams to translate data analysis into data-driven decisions.",
    ],
    technologies: ["Python"],
  },
];

// ─── Projects ──────────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: "Liver Cancer Detection",
    image: liver_image,
    description:
      "Built and evaluated multiple machine learning classifiers to detect liver cancer from patient health records, comparing model performance to identify the most reliable predictors for early diagnosis support.",
    technologies: ["Python", "scikit-learn", "Pandas", "Jupyter Notebook"],
    githubLink: "https://github.com/Murugavl",
  },
  {
    title: "Loan Approval Prediction",
    image: loan,
    description:
      "Designed an end-to-end loan approval system that scores applications against historical data using scikit-learn, deployed as an interactive Streamlit app for real-time decisioning.",
    technologies: ["Python", "scikit-learn", "Streamlit", "Pandas"],
    githubLink: "https://github.com/Murugavl",
    demoLink: "https://loan--approval--prediction.streamlit.app",
  },
  {
    title: "Customer Churn Prediction",
    image: churn,
    description:
      "Built a churn-prediction pipeline that analyzes customer behavior patterns to flag at-risk customers early, deployed via Streamlit for interactive exploration.",
    technologies: ["Python", "scikit-learn", "Streamlit", "Pandas"],
    githubLink: "https://github.com/Murugavl",
    demoLink: "https://customer-churnprediction.streamlit.app",
  },
  {
    title: "Crop Prediction",
    image: crop_prediction,
    description:
      "Built a Flask-based recommendation system that suggests optimal crops from soil and climate data, helping farmers make data-driven planting decisions.",
    technologies: ["Python", "Flask", "scikit-learn", "NumPy", "Pandas"],
    githubLink: "https://github.com/Murugavl",
  },
  {
    title: "Flower Prediction",
    image: flower_prediction,
    description:
      "Trained and compared classification models on the Iris dataset, then deployed the best-performing model as a Flask web app for real-time species prediction.",
    technologies: ["Python", "Flask", "scikit-learn", "NumPy", "Pandas"],
    githubLink: "https://github.com/Murugavl",
  },
  {
    title: "SmartKart",
    image: smartkart,
    description:
      "Developed a full-stack e-commerce platform in Django, with product browsing, cart management, and a secure checkout flow.",
    technologies: ["Python", "Django", "HTML/CSS"],
    githubLink: "https://github.com/Murugavl",
  },
  {
    title: "Code Converter",
    image: code_converter,
    description:
      "Built an in-browser code and Markdown editor in React, with live HTML/CSS/JS previews, GitHub-flavored Markdown rendering, and autosave to local storage.",
    technologies: ["React", "JavaScript", "HTML/CSS"],
    githubLink: "https://github.com/Murugavl",
    demoLink: "https://code-converter.streamlit.app/",
  },
  {
    title: "Hospital Management System",
    image: hospital_management_system,
    description:
      "Built a desktop Hospital Management System with Tkinter and MongoDB to help administrative staff manage patient records and operations.",
    technologies: ["Python", "Tkinter", "MongoDB"],
    githubLink: "https://github.com/Murugavl",
  },
  {
    title: "Scientific Calculator",
    image: calculator,
    description:
      "Developed a native Android scientific calculator in Java, supporting arithmetic, trigonometric, and logarithmic functions through an intuitive interface.",
    technologies: ["Java", "Android Studio"],
    githubLink: "https://github.com/Murugavl",
  },
];

// ─── Contact ───────────────────────────────────────────────────────
export const CONTACT = {
  location: "Rajapalayam, Virudhunagar, Tamil Nadu",
  email: "vmv2k05@gmail.com",
  blurb:
    "Based in Virudhunagar, Tamil Nadu — open to internships and entry-level roles in Python development, machine learning, and data science. Email is the fastest way to reach me.",
  // ⚠ Phone number intentionally omitted from visible HTML — keep in résumé PDF only
};

// ─── Certifications ────────────────────────────────────────────────
// Add your real certificate image imports and links below.
// image: import each image from ../assets/certs/ or use a URL string.
export const CERTIFICATIONS = [
  {
    provider: "UiPath Certified Professional",
    name: "Automation Developer Associate certification",
    image: '../assets/certs/UI-Path.png',
    link: "https://credentials.uipath.com/41b2ea5c-3cdc-446b-8d22-aa1a9e6b6ffa#acc.wHvZMP03",
  },
  {
    provider: "AWS Training and Certification",
    name: "Public Sector AI & ML",
    image: '../assets/certs/Amazon.png',
    link: "https://drive.google.com/file/d/1OzE905XSv8Ajok1wn3eGpjLtQH9V6CMY/view",
  },
  {
    provider: "Microsoft and Linkedln",
    name: "Career Essentials in Software Development.",
    image: '../assets/certs/Software_Development.png',
    link: "https://www.linkedin.com/learning/certificates/f86e7d4d0ad97120dd30291c4251abccc87d310ab5e685f87664d884fafad910",
  },
  {
    provider: "Microsoft and Linkedln",
    name: "Career Essentials in Data Analysis",
    image: '../assets/certs/Data_Analytics.png',
    link: "https://www.linkedin.com/learning/certificates/c34a20d0c1e57ebbe6f2db76f0ec695c341aea9f6099e1b772382bfa9235899b?trk=share_certificate",
  },
  {
    provider: "NPTEL",
    name: "The Joy of Computing Using Python",
    image: '../assets/certs/NPTEL.png',
    link: "https://drive.google.com/file/d/1_h3BLtXNw1LNaEtwsG9yaF60ECmypsP4/view",
  },
];
