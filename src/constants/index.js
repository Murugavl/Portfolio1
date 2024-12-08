import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6  from "../assets/projects/project-6.png";

export const HERO_CONTENT = `I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️

I am fluent in classics like C, Python and Java.

My field of Interest's are building new  Machine Learning Projects and also in areas related to Deep Learning.

Whenever possible, I also apply my passion for developing products with Python and Modern Python frameworks and libraries,  like Django and Flask.`;

export const ABOUT_TEXT = {
  name : "Hi Everyone, I am MURUGAVEL V.",
  para : " I am currently pursuing my B.Tech degree in Hindusthan Institute of Technology in the field of Artificial Intelligence and Data Science.",
  line : "Apart from coding, some other activities that I love to do!",
  list : ["Playing Games","Listening Music","Travelling"],
  qoutes : {
    qoute : "Be the light in the world of Darkness!",
    author : "-MURUGAVEL V"
  }
}

export const EXPERIENCES = [
  {
    year: "Jun 2024",
    role: "Data Science Intern",
    company: "Technohacks Edutech",
    description: `Developed and implemented data analysis models to extract actionable insights. Utilized machine learning techniques to enhance predictive accuracy. Collaborated with cross-functional teams to support data driven decision-making.`,
    technologies: [
      "Python",
    ],
  },
  {
    year: "Jul 2024",
    role: "UI/UX Intern",
    company: "Cognigyz Technologies",
    description: `Designed intuitive user interfaces adn interactive prototypes to enhance user experience. Conducted user research adn usability testing to gather feedback adn refine design solutions. Collaborated with developers and stakeholders to ensure seamless implementation of design concepts.`,
    technologies: ["Figma","UI/UX,"],
  },
];

export const PROJECTS = [
  {
    title: "Liver Cancer Detection",
    image: project1,
    description:
      "This project focuses on detecting liver cancer using various machine learning algorithms. The dataset contains features relevant to liver health, and the goal is to predict whether a patient has liver cancer or not based on these features.",
    technologies: ["Python", "Jupyter Notebook"],
  },
  {
    title: "Code Converter",
    image: project2,
    description:
      "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage.",
    technologies: ["Python", "Streamlit"],
  },
  {
    title: "Scientific Calculator",
    image: project3,
    description:
      "The ScientificCalculator app is a powerful tool designed for Android devices that allows users to perform a wide range of mathematical calculations, including basic arithmetic, trigonometric functions, logarithms, and more. Built using Java in Android Studio, this app provides an intuitive user interface and efficient performance.",
    technologies: ["Java", "Android Studio"],
  },
  {
    title: "Login Form",
    image: project4,
    description:
      "Designed and created a user-friendly login form in Figma, focusing on clean UI/UX with attention to accessibility and responsiveness. The form includes input fields for username and password, along with a 'Submit' button, and a 'Forgot Password' link for added functionality.",
    technologies: ["Figma"],
  },
  {
    title: "Landing Page",
    image: project5,
    description:
      "Designed and created a visually appealing landing page in Figma, focusing on clean UI/UX with emphasis on accessibility and responsiveness. The page includes sections like a hero image, a clear call-to-action button, and product details, ensuring a smooth user experience across devices.  The design also incorporates strategic use of typography, color schemes, and visual hierarchy to engage visitors and drive conversions.",
    technologies: ["Figma"],
  },
  {
    title: "News App",
    image: project6,
    description:
      "Designed and created an engaging news app in Figma, focusing on intuitive UI/UX with emphasis on microinteractions for a dynamic user experience.  The app includes features like smooth transitions between articles, interactive buttons.",
    technologies: ["Figma"],
  },
];

export const CONTACT = {
  address:
    "Virudhunagar, Tamil Nadu, India",
  phoneNo: "+91 6379262122",
  email: "mrvmvel@gmail.com",
};