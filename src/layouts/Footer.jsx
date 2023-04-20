import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial={inView ? { opacity: 0, y: -50 } : { opacity: 1, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center p-4"
    >
      <div className="w-full max-w-[1240px] mx-auto p-8 grid lg:grid-cols-3 gap-8">
        <div className="mt-2">
          <div className="font-bold w-full text-3xl  flex items-center font-sans">
            <span className="text-[#FE9E0D]">CHOW</span>
            <span className="text-[#FE0D39]">VI</span>
          </div>
          <div className="flex justify-between md:w-[50%] my-6 text-gray-700">
            <FaTwitter size={30} />
            <FaYoutube size={30} />
            <FaInstagram size={30} />
            <FaFacebookF size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-col lg:flex-row justify-between mt-2">
          <div className="w-full lg:w-auto">
            <ul className="flex flex-col">
              <li className="py-2 lg:pr-4 text-sm">Quality</li>
              <li className="py-2 lg:pr-4 text-sm">Help</li>
              <li className="py-2 lg:pr-4 text-sm">Work</li>
              <li className="py-2 lg:pr-4 text-sm">Testimonials</li>
            </ul>
          </div>
          <div className="w-full lg:w-auto mt-6 lg:mt-0">
            <ul className="flex flex-col">
              <li className="py-2 lg:pr-4 text-sm">244-5333-7783</li>
              <li className="py-2 lg:pr-4 text-sm">hello@chowvi.com</li>
              <li className="py-2 lg:pr-4 text-sm">contact@chowvi.com</li>
            </ul>
          </div>
          <div className="w-full lg:w-auto mt-6 lg:mt-0">
            <ul className="flex flex-col">
              <li className="py-2 lg:pr-4 text-sm">Terms & Conditions</li>
              <li className="py-2 lg:pr-4 text-sm">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-[#999]">Developed by Melchor Bendanillo Callos</p>
      </div>
    </motion.div>
  );
};

export default Footer;
