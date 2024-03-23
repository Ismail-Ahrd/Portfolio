import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section id="about" className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Software engineer.
        </motion.h1>

        <p className="sub-title">
          I’m Aharoud Ismail, a software engineer dedicated to creating innovative 
          solutions that drive efficiency and enhance user experiences.
        </p>

        <div className="all-icons flex">
          {/* <div className="icon icon-twitter"></div> */}
          
          <a 
            href="https://github.com/Ismail-Ahrd" 
            target="_blank" 
            className="icon icon-github"
          ></a>
          
          <a 
            href="https://www.linkedin.com/in/ismail-aharoud-9b6274270/" 
            target="_blank" 
            className="icon icon-linkedin"
          ></a>

        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
