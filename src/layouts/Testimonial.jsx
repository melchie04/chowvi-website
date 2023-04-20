import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { testimonialData } from "../data/content";
import Content from "../components/Content";
import Card from "../components/Card";

const Testimonial = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      id="testimonial"
      className="relative flex flex-col px-4 md:px-20 lg:px-36 py-20"
    >
      <motion.div
        ref={ref}
        initial={inView ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex flex-col justify-center items-center text-center p-4"
      >
        <Content
          title={testimonialData.title}
          pretitle={testimonialData.pretitle}
          subtitle={testimonialData.subtitle}
        />
      </motion.div>
      <div className="flex-1 flex flex-col md:flex-row justify-center items-center">
        {testimonialData.testimonial.map((testimonial, index) => (
          <Card
            key={index}
            image={testimonial.image}
            testimony={testimonial.testimony}
            name={testimonial.name}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
