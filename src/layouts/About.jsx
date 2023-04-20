import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutData } from "../data/content";
import Content from "../components/Content";
import RedButton from "../components/RedButton";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      id="about"
      className="relative flex flex-col md:flex-row px-4 md:px-20 lg:px-36 py-20"
    >
      <div className="absolute top-0 left-0 z-[-2] max-w-[150px]">
        <img src={aboutData.background} alt="" />
      </div>
      <motion.div
        ref={ref}
        initial={inView ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex justify-center items-center p-4"
      >
        <img src={aboutData.image} alt="" className="max-w-md w-full" />
      </motion.div>
      <motion.div
        ref={ref}
        initial={inView ? { opacity: 0, x: 100 } : { opacity: 1, x: 0 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left p-4"
      >
        <Content
          title={aboutData.title}
          pretitle={aboutData.pretitle}
          subtitle={aboutData.subtitle}
        />
        <RedButton>
          <BsFillPlayCircleFill className="mr-2" size={30} />{" "}
          {aboutData.btnText}
        </RedButton>
      </motion.div>
    </div>
  );
};

export default About;
