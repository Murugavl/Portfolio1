// ─── Project Images ────────────────────────────────────────────────
import resumePdf from "../assets/MURUGAVEL V.pdf";
import liver_image from "../assets/projects/liver_image.jpg";
import code_converter from "../assets/projects/code_converter.png";
import calculator from "../assets/projects/calculator.png";
import hospital_management_system from "../assets/projects/hospital_management_system.png";
import churn from "../assets/projects/Customer_Churn_Prediction.png";
import loan from "../assets/projects/Loan_Approval_Prediction.png";
import crop_prediction from "../assets/projects/crop-prediction.png";
import flower_prediction from "../assets/projects/flower-prediction.png";
import smartkart from "../assets/projects/smartkart.png";
import insightai from "../assets/projects/company-insight-ai.png";
import financeai from "../assets/projects/finance-ai.png";

// ─── Certification Images ──────────────────────────────────────────
import uipath_cert from "../assets/certs/UI-Path.png";
import amazon_cert from "../assets/certs/Amazon.png";
import software_dev_cert from "../assets/certs/Software_Development.png";
import data_analytics_cert from "../assets/certs/Data_Analytics.png";
import nptel_cert from "../assets/certs/NPTEL.png";

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
    href: resumePdf,
  },
};

export const RESUME_LINK = resumePdf;

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
  {
    period: "Oct 2025 - Dec 2025",
    role: "AI Research Intern",
    company: "Infosys Springboard (Virtual Internship)",
    bullets: [
      "Built and explored an Open Deep Research framework using Agentic LLMs to automate multi-step research workflows.",
      "Designed AI agent pipelines for task planning, web research, reasoning, and structured report generation using modern LLM architectures.",
      "Gained hands-on experience with AI agents, prompt engineering, retrieval workflows, and research automation while applying industry best practices.",
    ],
    technologies: [
      "Python",
      "Agentic AI",
      "LLMs",
      "Prompt Engineering",
      "AI Agents",
      "Research Automation"
    ],
  },
];

// ─── Projects ──────────────────────────────────────────────────────
export const PROJECTS = [
  {
    "title": "Company Research Agent",
    "image": insightai,
    "description": "Developed an autonomous AI research platform using LangGraph and FastAPI for real-time company intelligence, competitor analysis, and automated strategic reporting.",
    "overview": "An enterprise-grade research solution leveraging multi-step agent orchestration to perform live web searches, extract structured business metrics, perform delta analysis across sessions, and generate comprehensive strategic reports.",
    "problemSolved": "Manual market and competitor research is tedious and time-consuming. This agent automates multi-source web intelligence gathering and synthesizes raw data into structured 9-section strategic insights.",
    "features": [
      "LangGraph StateGraph for deterministic AI agent orchestration",
      "Real-time Tavily Web Search integration for up-to-date data",
      "Automated structured report generation across 9 strategic domains",
      "Session delta analysis to track changes between research updates",
      "Modern React dashboard with live research status and interactive chat",
      "Redis caching for search optimization & SQLite for research persistence"
    ],
    "challenges": "Ensuring deterministic state transitions and fault tolerance across multi-step asynchronous search pipelines. Solved using LangGraph's state graph architecture and Redis result caching.",
    "techStack": [
      "Python",
      "FastAPI",
      "LangGraph",
      "Groq",
      "React",
      "Tailwind CSS",
      "Redis"
    ],
    "deploymentPlatform": "Docker / Render",
    "frontend": "React 18 / Vite / Tailwind CSS",
    "backend": "FastAPI / LangGraph / Groq (Llama 3)",
    "database": "SQLite (Persistence) / Redis (Cache)",
    "cloudStorage": "Local File / SQLite Storage",
    "authentication": "API Key / Custom Auth",
    "api": "FastAPI REST API",
    "architecture": "Agentic State Graph Architecture (LangGraph + REST API)",
    "github": "https://github.com/Murugavl/Company_Research_Agent",
    "liveDemo": "https://company-research-agent-s3ib.onrender.com"
  },
  {
    title: "AI-Powered Personal Finance Assistant",
    image: financeai, // Ensure you import `financeai` image at the top of your file
    description: "Developed a full-stack personal finance management platform using FastAPI, React, MongoDB, and GROQ AI for automated receipt extraction and intelligent spending analysis.",
    overview: "A comprehensive personal finance platform featuring automated receipt scanning via multi-pass OCR & GROQ Vision AI, an embedded GROQ LLaMA 3 financial chatbot, interactive category analytics, budget tracking, and exportable financial reports.",
    problemSolved: "Manual expense entry is time-consuming and prone to human error. This platform automates receipt data extraction and provides an intelligent financial assistant for real-time budget insights.",
    features: [
      "Automated bill & receipt extraction using OpenCV, Tesseract OCR & GROQ Vision AI",
      "Embedded GROQ AI financial assistant (LLaMA 3) with live user context",
      "Interactive expense analytics with categorical spending breakdowns",
      "Real-time budget monitoring and multi-account balance aggregation",
      "Automated statement export in PDF and CSV formats",
      "Secure JWT authentication and password hashing"
    ],
    challenges: "Ensuring accurate receipt data extraction across diverse image qualities without requiring heavy system binaries on cloud servers. Solved by engineering a multi-pass image preprocessing pipeline with an automated GROQ Vision AI fallback.",
    techStack: [
      "Python",
      "FastAPI",
      "React",
      "Tailwind CSS",
      "MongoDB",
      "GROQ AI",
      "OpenCV"
    ],
    deploymentPlatform: "Render / Vercel",
    frontend: "React 18 / Vite / Tailwind CSS",
    backend: "FastAPI (Python) / GROQ AI (LLaMA 3 & Vision)",
    database: "MongoDB Atlas (Motor Async)",
    cloudStorage: "Local Static Storage / Cloud Storage",
    authentication: "JWT Authentication (Bcrypt)",
    api: "FastAPI REST API",
    architecture: "Asynchronous Modular REST Architecture",
    github: "https://github.com/Murugavl/AI-powered-personal-finance",
    liveDemo: "https://ai-powered-personal-finance-lyart.vercel.app/"
  },
  {
    title: "Loan Approval Prediction",
    image: loan,
    description:
      "Designed an end-to-end loan approval system that scores applications against historical data using scikit-learn, deployed as an interactive Streamlit app for real-time decisioning.",
    overview: "An interactive machine learning application that predicts whether a loan application will be approved based on applicant details like credit history, income, education, and assets.",
    problemSolved: "Manual loan screening is slow, subjective, and prone to human error. This app provides instant, data-backed screening to assist credit officers.",
    features: [
      "Real-time application scoring",
      "User-friendly form interface",
      "Model explanation & feature importance visualization",
      "Automatic data cleaning pipeline"
    ],
    challenges: "Ensuring the Streamlit app state remains responsive and doesn't reload the entire model on every user input change. Resolved by using Streamlit's caching mechanisms for model loading.",
    techStack: ["Python", "scikit-learn", "Streamlit", "Pandas", "NumPy"],
    deploymentPlatform: "Streamlit Community Cloud",
    frontend: "Streamlit (Python-based UI)",
    backend: "Streamlit Server (Python)",
    // database: "None (Local pickle model)",
    // cloudStorage: "None",
    // authentication: "None",
    // api: "None",
    architecture: "Single-Tier Web App",
    github: "https://github.com/Murugavl/Loan_Approval_Prediction",
    liveDemo: "https://loan-approval-prediction-t3vd.onrender.com"
  },
  {
    title: "Customer Churn Prediction",
    image: churn,
    description:
      "Built a churn-prediction pipeline that analyzes customer behavior patterns to flag at-risk customers early, deployed via Streamlit for interactive exploration.",
    overview: "A customer churn prediction dashboard that analyzes behavior trends (e.g., tenure, usage, billing contract) to predict the likelihood of a customer leaving the service.",
    problemSolved: "Acquiring new customers is 5x more expensive than retaining existing ones. This pipeline identifies high-risk customers, allowing marketing teams to target retention campaigns.",
    features: [
      "Predictive scoring threshold control",
      "Customer profile visualization",
      "Feature correlation heatmap",
      "Batch prediction support via CSV upload"
    ],
    challenges: "Feature engineering from raw time-series interaction logs into stable tabular features. Solved by aggregating monthly usage trends and billing history.",
    techStack: ["Python", "scikit-learn", "Streamlit", "Pandas", "NumPy"],
    deploymentPlatform: "Streamlit Community Cloud",
    frontend: "Streamlit UI",
    backend: "Python (Streamlit)",
    // database: "None (Pickle serialization)",
    // cloudStorage: "None",
    // authentication: "None",
    // api: "None",
    architecture: "Single-Tier Web App",
    github: "https://github.com/Murugavl/Customer_churn_Prediction",
    liveDemo: "https://customer-churn-prediction-o4y9.onrender.com/"
  },
  {
    title: "Crop Prediction",
    image: crop_prediction,
    description:
      "Built a Flask-based recommendation system that suggests optimal crops from soil and climate data, helping farmers make data-driven planting decisions.",
    overview: "A web-based crop advisor that recommends the best crop to cultivate based on soil parameters (Nitrogen, Phosphorous, Potassium, pH) and climatic factors (Temperature, Humidity, Rainfall).",
    problemSolved: "Improper crop selection leads to soil depletion and low agricultural yield. This model recommends optimal crops, optimizing farm productivity and sustainability.",
    features: [
      "Multi-input parameter form",
      "Interactive prediction output",
      "Soil quality insights",
      "Model accuracy report dashboard"
    ],
    challenges: "Translating complex soil science indicators into accessible form inputs for everyday users. Solved by designing a simplified UI with explanatory tooltips.",
    techStack: ["Python", "Flask", "scikit-learn", "NumPy", "Pandas"],
    deploymentPlatform: "Render / Localhost",
    frontend: "HTML5 / CSS3 / JavaScript",
    backend: "Flask (Python)",
    // database: "None (Static ML Model)",
    // cloudStorage: "None",
    // authentication: "None",
    api: "REST API (Flask endpoint)",
    architecture: "Client-Server (MVC)",
    github: "https://github.com/Murugavl/Crop-Prediction",
    liveDemo: "https://crop-prediction-61kd.onrender.com/"
  },
  {
    title: "Liver Cancer Detection",
    image: liver_image,
    description:
      "Built and evaluated multiple machine learning classifiers to detect liver cancer from patient health records, comparing model performance to identify the most reliable predictors for early diagnosis support.",
    overview: "This project aims to support early diagnosis of liver cancer by analyzing patient health records. By comparing different machine learning classifiers, we identify the most accurate model for predicting liver cancer risk, potentially saving lives through early intervention.",
    problemSolved: "Liver cancer is often detected at late stages when treatment options are limited. This ML system helps clinicians identify high-risk patients earlier based on routine clinical metrics.",
    features: [
      "Data preprocessing & normalization",
      "Exploratory Data Analysis (EDA)",
      "Evaluation of multiple ML classifiers (Logistic Regression, Random Forest, SVM)",
      "Performance metrics comparison (Accuracy, Precision, Recall, F1-Score)"
    ],
    challenges: "Handling class imbalance in medical records where negative cases outnumber positive cancer diagnoses. Solved using SMOTE (Synthetic Minority Over-sampling Technique) to balance the training dataset.",
    techStack: ["Python", "scikit-learn", "Pandas", "NumPy", "Jupyter Notebook"],
    deploymentPlatform: "Jupyter Notebook (Offline Analysis)",
    // frontend: "None (Jupyter Notebook / CLI)",
    backend: "Python",
    // database: "None (CSV data source)",
    cloudStorage: "None",
    authentication: "None",
    api: "None",
    architecture: "Monolithic Notebook",
    github: "https://github.com/Murugavl/liver_cancer_detection",
    // liveDemo: ""
  },
  {
    title: "Flower Prediction",
    image: flower_prediction,
    description:
      "Trained and compared classification models on the Iris dataset, then deployed the best-performing model as a Flask web app for real-time species prediction.",
    overview: "A simple, educational web application that classifies Iris flower species (Setosa, Versicolor, Virginica) based on sepal and petal measurements.",
    problemSolved: "Introduced standard machine learning workflows and deployment pipelines for beginners by demonstrating classification on a benchmark dataset.",
    features: [
      "Instant classification",
      "Visual representations of species",
      "Responsive interface",
      "Detailed probability breakdown"
    ],
    challenges: "Creating a lightweight app that can be instantly booted with minimal cold-start delay. Solved using a simple linear classifier.",
    techStack: ["Python", "Flask", "scikit-learn", "NumPy", "Pandas"],
    deploymentPlatform: "Render",
    frontend: "HTML / Tailwind CSS",
    backend: "Flask (Python)",
    // database: "None",
    // cloudStorage: "None",
    // authentication: "None",
    api: "REST API",
    architecture: "Client-Server",
    github: "https://github.com/Murugavl/Flower-Prediction",
    // liveDemo: ""
  },
  {
    title: "SmartKart",
    image: smartkart,
    description:
      "Developed a full-stack e-commerce platform in Django, with product browsing, cart management, and a secure checkout flow.",
    overview: "A complete e-commerce solution featuring dynamic catalog management, shopper profiles, cart operations, order placement, and an administrative dashboard.",
    problemSolved: "Retail businesses require a robust online storefront with consistent inventory tracking, shopping logic, and secure checkout.",
    features: [
      "Product categorization & search",
      "Shopping cart state retention",
      "User authentication & dashboard",
      "Admin panel for inventory and order management"
    ],
    challenges: "Maintaining cart sessions for guest users and converting them seamlessly upon signup/login. Solved using Django's session database framework.",
    techStack: ["Python", "Django", "HTML/CSS"],
    deploymentPlatform: "PythonAnywhere",
    frontend: "HTML5 / CSS3 / JavaScript",
    backend: "Django (Python)",
    database: "SQLite (Development)",
    cloudStorage: "Local static storage",
    authentication: "Django Auth System",
    api: "Django Templates (Server-rendered)",
    architecture: "Model-View-Template (MVT)",
    github: "https://github.com/Murugavl/SmartKart",
    liveDemo: ""
  },
  {
    title: "Code Converter",
    image: code_converter,
    description:
      "Built an in-browser code and Markdown editor in React, with live HTML/CSS/JS previews, GitHub-flavored Markdown rendering, and autosave to local storage.",
    overview: "An in-browser code compiler and converter that lets developers write code and see instant HTML/CSS/JS visual previews, alongside a Markdown previewer.",
    problemSolved: "Eliminates the need for opening complex local IDEs just to convert snippets, test minor web mockups, or write markdown notes.",
    features: [
      "Real-time code compilation",
      "Dual-pane editor and previewer",
      "Autosave via localStorage",
      "One-click copy and reset"
    ],
    challenges: "Preventing infinite loops in user-submitted JavaScript from crashing the main browser thread. Solved by executing script previews inside a sandboxed iframe with restricted permissions.",
    techStack: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    deploymentPlatform: "Vercel",
    frontend: "React",
    backend: "None (Static Single-Page Application)",
    database: "Local Storage",
    // cloudStorage: "None",
    // authentication: "None",
    // api: "None",
    architecture: "Single-Page App (SPA)",
    github: "https://github.com/Murugavl/Code-Converter",
    liveDemo: "https://code-converter.streamlit.app/"
  },
  {
    title: "Hospital Management System",
    image: hospital_management_system,
    description:
      "Built a desktop Hospital Management System with Tkinter and MongoDB to help administrative staff manage patient records and operations.",
    overview: "A desktop database application designed for hospital staff to manage patient entries, doctors, appointments, billing records, and medical logs.",
    problemSolved: "Local clinics often lack expensive web infrastructure, needing a lightweight, offline desktop database to secure patient charts.",
    features: [
      "Patient database CRUD operations",
      "Doctor schedule planner",
      "Billing invoice generator",
      "MongoDB remote synchronization"
    ],
    challenges: "Connecting a native Python desktop app (Tkinter) to a remote MongoDB Atlas database securely and handling network dropouts gracefully. Solved using python's PyMongo thread-safe client with custom retry logic.",
    techStack: ["Python", "Tkinter", "MongoDB"],
    deploymentPlatform: "Desktop Application",
    frontend: "Tkinter GUI",
    backend: "Python (PyMongo)",
    database: "MongoDB Atlas",
    // cloudStorage: "None",
    authentication: "Custom Local Login",
    // api: "None",
    architecture: "Desktop client connecting to Cloud Database",
    github: "https://github.com/Murugavl/Tkinter-Hospital_Management_System",
    // liveDemo: ""
  },
  {
    title: "Scientific Calculator",
    image: calculator,
    description:
      "Developed a native Android scientific calculator in Java, supporting arithmetic, trigonometric, and logarithmic functions through an intuitive interface.",
    overview: "A native Android calculator designed to evaluate mathematical expressions, handling standard and advanced scientific operations.",
    problemSolved: "Many default mobile calculators lack advanced formula parsing or clear histories for multi-step engineering calculations.",
    features: [
      "Trigonometric, logarithmic, and exponential operations",
      "Interactive calculation history",
      "Theme customizer",
      "Error checking for invalid expressions"
    ],
    challenges: "Implementing a mathematically correct parser for order of operations (PEMDAS). Resolved by building a Shunting-yard algorithm parser in Java.",
    techStack: ["Java", "Android Studio"],
    deploymentPlatform: "Google Play Store / APK",
    frontend: "Android Native XML",
    backend: "Java",
    database: "Room DB (History cache)",
    // cloudStorage: "None",
    // authentication: "None",
    // api: "None",
    architecture: "Mobile App (MVP Architecture)",
    github: "https://github.com/Murugavl/ScientificCalculator",
    // liveDemo: ""
  }
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
    image: uipath_cert,
    link: "https://credentials.uipath.com/41b2ea5c-3cdc-446b-8d22-aa1a9e6b6ffa#acc.wHvZMP03",
  },
  {
    provider: "AWS Training and Certification",
    name: "Public Sector AI & ML",
    image: amazon_cert,
    link: "https://drive.google.com/file/d/1OzE905XSv8Ajok1wn3eGpjLtQH9V6CMY/view",
  },
  {
    provider: "Microsoft and Linkedln",
    name: "Career Essentials in Software Development.",
    image: software_dev_cert,
    link: "https://www.linkedin.com/learning/certificates/f86e7d4d0ad97120dd30291c4251abccc87d310ab5e685f87664d884fafad910",
  },
  {
    provider: "Microsoft and Linkedln",
    name: "Career Essentials in Data Analysis",
    image: data_analytics_cert,
    link: "https://www.linkedin.com/learning/certificates/c34a20d0c1e57ebbe6f2db76f0ec695c341aea9f6099e1b772382bfa9235899b?trk=share_certificate",
  },
  {
    provider: "NPTEL",
    name: "The Joy of Computing Using Python",
    image: nptel_cert,
    link: "https://drive.google.com/file/d/1_h3BLtXNw1LNaEtwsG9yaF60ECmypsP4/view",
  },
];
