import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { contactData } from "../data/content";
import Content from "../components/Content";
import RedButton from "../components/RedButton";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [sending, setSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    if (name && email && message) {
      setSending(true);
      await delay(3000);
      setSending(false);
      setName("");
      setEmail("");
      setMessage("");
      setStatus("success");
      await delay(5000);
      setStatus(null);
    } else {
      setStatus("error");
      await delay(5000);
      setStatus(null);
    }
  };

  return (
    <div
      id="contact"
      className="relative flex flex-col px-4 md:px-20 lg:px-36 py-20"
    >
      <motion.div
        ref={ref}
        initial={inView ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex flex-col justify-center items-center text-center p-4"
      >
        <Content title={contactData.title} pretitle={contactData.pretitle} />
      </motion.div>
      {status === "success" && (
        <p className="text-center mb-2 text-green-600">
          Thank you! We will get back to you as soon as possible.
        </p>
      )}
      {status === "error" && (
        <p className="text-center mb-2 text-red-600">
          Oops, something went wrong. Please try again later.
        </p>
      )}
      <motion.form
        ref={ref}
        initial={inView ? { opacity: 0, x: 100 } : { opacity: 1, x: 0 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="w-full md:w-2/3 lg:w-1/2 mx-auto p-6 bg-white rounded-lg shadow-xl"
      >
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Name:</label>
          <input
            className="w-full px-3 py-2 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Email:</label>
          <input
            className="w-full px-3 py-2 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700  mb-2">Message:</label>
          <textarea
            className="w-full px-3 py-2 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center items-center text-center">
          <RedButton type="submit">{sending ? "Sending..." : "Send"}</RedButton>
        </div>
      </motion.form>
    </div>
  );
};

export default Contact;
