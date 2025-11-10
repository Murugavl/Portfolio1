import {
    SiVisualstudiocode,
    SiAndroidstudio,
    SiPycharm,
    SiJupyter,
    SiAnaconda,
    SiEclipseide,
    SiGithub,
  } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const ToolStack = () => {
    return (
      <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">ToolStack</motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
  
          {/* Visual Studio */}
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiVisualstudiocode className="text-7xl text-cyan-400" />
          </motion.div>
  
          {/* PyCharm */}
          <motion.div
            variants={iconVariants(5.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiPycharm className="text-7xl text-cyan-400" />
          </motion.div>
  
  
          {/* Anaconda */}
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiAnaconda className="text-7xl text-cyan-400" />
          </motion.div>
  
          {/* Jupyter */}
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiJupyter className="text-7xl text-cyan-400" />
          </motion.div>
  
           {/* Eclipse */}
           <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiEclipseide className="text-7xl text-cyan-400" />
          </motion.div>
  
  
          {/* Android Studio */}
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiAndroidstudio className="text-7xl text-cyan-400" />
          </motion.div>
  
          {/* GitHub */}
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiGithub className="text-7xl text-cyan-400" />
          </motion.div>
         
  
        </motion.div>
      </div>
    );
  };
  
  export default ToolStack;
  