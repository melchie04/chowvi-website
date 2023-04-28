import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { footerData } from "../data/content";

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
      className="flex flex-col justify-center items-center"
    >
      <div className="w-full max-w-[1240px] mx-auto p-4 grid md:grid-cols-3 gap-8">
        <div className="mt-2">
          <div className="font-bold w-full text-3xl  flex items-center font-sans">
            <span className="text-[#FE9E0D]">CHOW</span>
            <span className="text-[#FE0D39]">VI</span>
          </div>
          <div className="flex md:w-[50%] my-6 text-gray-500 text-sm">
            <p>{footerData.text}</p>
          </div>
        </div>
        <div className="md:col-span-2 flex flex-col md:flex-row justify-between mt-2">
          <div className="w-full md:w-auto">
            <h6 className="py-2 md:pr-4 font-bold">Contact</h6>
            <ul className="flex flex-col">
              <li className="py-2 md:pr-4 text-sm">Partners</li>
              <li className="py-2 md:pr-4 text-sm">Help</li>
              <li className="py-2 md:pr-4 text-sm">FAQ</li>
            </ul>
          </div>
          <div className="w-full md:w-auto mt-6 md:mt-0">
            <h6 className="py-2 md:pr-4 font-bold">Social</h6>
            <ul className="flex flex-col">
              <li className="py-2 md:pr-4 text-sm">
                <a href="#" target="_blank">
                  <FaFacebookF size={10} className="inline mb-1 mr-1" />
                  Facebook
                </a>
              </li>
              <li className="py-2 md:pr-4 text-sm">
                <a href="#" target="_blank">
                  <FaInstagram size={10} className="inline mb-1 mr-1" />
                  Instagram
                </a>
              </li>
              <li className="py-2 md:pr-4 text-sm">
                <a href="#" target="_blank">
                  <FaTwitter size={10} className="inline mb-1 mr-1" />
                  Twitter
                </a>
              </li>
              <li className="py-2 md:pr-4 text-sm">
                <a href="#" target="_blank">
                  <FaYoutube size={10} className="inline mb-1 mr-1" />
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto mt-6 md:mt-0">
            <h6 className="py-2 md:pr-4 font-bold">More</h6>
            <ul className="flex flex-col">
              <li className="py-2 md:pr-4 text-sm">Testimonials</li>
              <li className="py-2 md:pr-4 text-sm">Terms & Conditions</li>
              <li className="py-2 md:pr-4 text-sm">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center bg-[#FE9E0D] w-full p-4">
        <p>{footerData.copyright}</p>
        <p className="text-gray-700">{footerData.developer}</p>
      </div>
    </motion.div>
  );
};

export default Footer;
