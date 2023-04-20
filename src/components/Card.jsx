import React from "react";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = ({ image, testimony, name, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={inView ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.5 }}
      className="flex-1 flex flex-col justify-center items-center text-center p-8 my-4 md:mx-4 bg-white rounded-lg shadow-xl"
    >
      <img
        src={image}
        alt=""
        className="w-28 h-28 object-cover rounded-full mb-4"
      />
      <p className="text-base md:text-lg text-gray-600 max-w-md mb-2">
        {testimony}
      </p>
      <div className="flex flex-row mx-1 text-2xl text-[#fe9e0d] mb-4">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <h2 className="text-xl font-medium">{name}</h2>
    </motion.div>
  );
};

export default Card;
