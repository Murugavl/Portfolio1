import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/about.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-center mb-4">
              Hi Everyone, I am <span className="text-teal-400">{ABOUT_TEXT.name.split("Hi Everyone, I am ")[1]}</span>
            </h1>
            <p className="text-lg text-center mb-6">
              {ABOUT_TEXT.para}
            </p>
            <p className="text-lg font-semibold text-center mb-4">
              {ABOUT_TEXT.line}
            </p>
            <ul className="text-left mx-auto mb-6 list-disc list-inside">
              {ABOUT_TEXT.list.map((item, index) => (
                <li key={index} className="text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <blockquote className="text-xl font-semibold text-teal-600 italic text-center mt-6">
              "{ABOUT_TEXT.qoutes.qoute}"
              <br />
              <span className="block text-gray-500" style={{textIndent: "35%"}}>
                {ABOUT_TEXT.qoutes.author}
              </span>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
