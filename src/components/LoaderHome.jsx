import { motion } from "framer-motion";
import "../styles/LoaderHome.css";

function LoaderHome() {
  return (
    <motion.section
      className="LoaderHome"
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.8 },
        transitionEnd: {
          display: "none",
        },
      }}
    >
      <div className="containerLoaderHome">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5 },
            transitionEnd: {
              display: "none",
            },
          }}
          className="loaderText"
        >
          {" "}
          Halo
        </motion.span>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.8 },
            transitionEnd: {
              display: "none",
            },
          }}
          className="loaderText"
        >
          {" "}
          Hello{" "}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.1 },
            transitionEnd: {
              display: "none",
            },
          }}
          className="loaderText"
        >
          {" "}
          Bonjour
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4 },
            transitionEnd: {
              display: "none",
            },
          }}
          className="loaderText"
        >
          {" "}
          السلام عليكم{" "}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.7 },
            transitionEnd: {
              display: "none",
            },
          }}
          className="loaderText"
        >
          {" "}
          Ola{" "}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.0 },
            transitionEnd: {
              display: "none",
            },
          }}
          className="loaderText"
        >
          {" "}
          안녕하세요{" "}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.3 },
            transitionEnd: {
              display: "none",
            },
          }}
          className="loaderText"
        >
          {" "}
          こんにちは
        </motion.span>
      </div>
    </motion.section>
  );
}

export default LoaderHome;
