import liver_image from "../assets/projects/liver_image.jpg";
import code_converter from "../assets/projects/code_converter.png";
import calculator from "../assets/projects/calculator.png";
import login from "../assets/projects/login-page.png";
import landing from "../assets/projects/landing-page.png";
import news  from "../assets/projects/news-app.png";
import hospital_management_system from "../assets/projects/hospital_management_system.png";
import churn from "../assets/projects/Customer_Churn_Prediction.png"
import loan from "../assets/projects/Loan_Approval_Prediction.png"
import crop_prediction from "../assets/projects/crop-prediction.png"
import flower_prediction from "../assets/projects/flower-prediction.png"
import smartkart from "../assets/projects/smartkart.png"

export const HERO_CONTENT = `I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️

I am fluent in classics like C, Python and Java.

My field of Interest's are building new  Machine Learning Projects and also in areas related to Deep Learning.

Whenever possible, I also apply my passion for developing products with Python and Modern Python frameworks and libraries,  like Django and Flask.`;

export const ABOUT_TEXT = {
  name : "Hi Everyone, I am MURUGAVEL V.",
  para : " I am currently pursuing my B.Tech degree in Hindusthan Institute of Technology in the field of Artificial Intelligence and Data Science.",
  line : "Apart from coding, some other activities that I love to do!",
  list : ["Playing Games","Listening Music","Travelling"],
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
];

export const PROJECTS = [
  {
    title: "Liver Cancer Detection",
    image: liver_image,
    description:
      "This project focuses on detecting liver cancer using various machine learning algorithms. The dataset contains features relevant to liver health, and the goal is to predict whether a patient has liver cancer or not based on these features.",
    technologies: ["Python", "Jupyter Notebook","Machine Learning",'scikit-learn'],
  },
  {
    title: "Loan Approval Prediction",
    image: loan,
    description:
      "This project is a Loan Approval Prediction System that uses Machine Learning to determine whether a loan application should be approved or rejected based on various factors. It is deployed using Streamlit for an interactive user experience.",
    technologies: ["Python", "Jupyter Notebook","Machine Learning","Streamlit",'scikit-learn'],
    demoLink: "https://loan--approval--prediction.streamlit.app",
  },
  {
    title: "Customer Churn Prediction",
    image: churn,
    description:
      "Customer churn prediction is a crucial task in business analytics, helping companies identify customers who are likely to leave and take preventive actions. This project utilizes Machine Learning (ML) techniques to analyze customer behavior and predict churn.",
    technologies: ["Python", "Jupyter Notebook","Machine Learning","Streamlit",'scikit-learn'],
    demoLink: "https://customer-churnprediction.streamlit.app",
  },
  {
    title: "Crop Prediction",
    image: crop_prediction,
    description:
      "This Crop Prediction System utilizes machine learning to recommend suitable crops based on environmental data. It helps farmers make informed decisions by analyzing factors like soil type and climate. The system aims to enhance agricultural efficiency and productivity.",
    technologies: ["Python", "Flask","Machine Learning","Scikit-learn","numpy","pandas"],
  },
  {
    title: "Flower Prediction",
    image: flower_prediction,
    description:
      "Flower Prediction is a machine learning project that uses the Iris dataset to classify iris flowers into three species: Setosa, Versicolor, and Virginica. The project includes data analysis, model training with various algorithms, and deployment via a Flask web application for user-friendly predictions.",
    technologies: ["Python", "Flask","Machine Learning","Scikit-learn","numpy","pandas"],
  },
  {
    title: "SmartKart",
    image: smartkart,
    description:
      "I have developed a Django-based e-commerce website that features a wide range of items for sale. It provides users with a seamless shopping experience, including product browsing, cart management, and secure checkout. The platform is designed to cater to diverse customer needs with a user-friendly interface and efficient backend management.",
    technologies: ["Python", "Flask","Machine Learning","Scikit-learn","numpy","pandas"],
  },
  {
    title: "Code Converter",
    image: code_converter,
    description:
      "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage.",
    technologies: ["Python", "Streamlit"],
    demoLink: "https://code-converter.streamlit.app/",
  },
  {
    title: "Hospital Management System",
    image: hospital_management_system,
    description:
      "This is a Hospital Management System (HMS) developed using Tkinter, the standard GUI toolkit for Python. The system is designed to help hospital staff manage various administrative tasks such as patient records.",
    technologies: ["Python", "Tkinter","MongoDB"],
  },
  {
    title: "Scientific Calculator",
    image: calculator,
    description:
      "The Scientific Calculator app is a powerful tool designed for Android devices that allows users to perform a wide range of mathematical calculations, including basic arithmetic, trigonometric functions, logarithms, and more. Built using Java in Android Studio, this app provides an intuitive user interface and efficient performance.",
    technologies: ["Java", "Android Studio"],
  },
];

export const CONTACT = {
  address:
    "Virudhunagar, Tamil Nadu, India",
  phoneNo: "+91 6379262122",
  email: "mrvmvel@gmail.com",
};
