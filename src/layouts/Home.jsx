import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { homeData } from "../data/content";
import Content from "../components/Content";
import RedButton from "../components/RedButton";

const Home = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      id="home"
      className="relative flex flex-col md:flex-row px-4 md:px-20 lg:px-36 py-36"
    >
      <div className="absolute top-0 right-0 z-[-2] max-w-[500px]">
        <img src={homeData.background} alt="" />
      </div>
      <motion.div
        ref={ref}
        initial={inView ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left p-4"
      >
        <Content pretitle={homeData.pretitle} subtitle={homeData.subtitle} />
        <RedButton>
          {homeData.btnText} <FiArrowRight className="ml-2" />
        </RedButton>
      </motion.div>
      <motion.div
        ref={ref}
        initial={inView ? { opacity: 0, x: 100 } : { opacity: 1, x: 0 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex justify-center items-center p-4"
      >
        <img src={homeData.image} alt="" className="max-w-md w-full" />
      </motion.div>
    </div>
  );
};

export default Home;
